import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  list: Feedback[];
  selected = new Feedback(Math.round(Math.random()*10) + 1, '','','');

  ngOnInit() {
  	// Retrieve posts from the API
    this.feedbackService.getFeedback().subscribe(
      list => {this.list = list;},
      error => alert(error),
      () => console.log('Got the data'));
  }

  // Edit feedback post
  editFeedback(post){
    //this.selected = post;
    this.selected = post;
  }

  
  delete(feedback: Feedback): void {
  this.feedbackService
      .delete(feedback.id)
      .then(() => {
        this.list = this.list.filter(h => h.id != feedback.id);
        if (this.selected === feedback) { this.selected = null; }
      });
  }

  // Add new post
  submitFeedback(){
    this.feedbackService.create(this.selected).then(feedback => {
      this.list.push(this.selected);
      this.selected = new Feedback(Math.round(Math.random()*10) + 1, '','','');
    });
  }

}
