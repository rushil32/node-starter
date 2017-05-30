import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Feedback } from './feedback.model';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeedbackService {
	
	private oldUrl = 'api/feedback';
	private feebackUrl = 'http://localhost:3000/api/feedback'
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	// Get all posts from the API
	getFeedback(): Observable<Feedback[]> {
		return this.http.get(this.feebackUrl)
		.map(res => res.json());
	}

	create(feedback: Feedback): Promise<Feedback> {
		console.log(feedback);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		const url = `${this.feebackUrl}/create`;
		return this.http
		.post(url, feedback, options)
		.toPromise()
		.then(res => res.json().data as Feedback)
		.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.feebackUrl}/delete/${id}`;
		return this.http.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}




