import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    submitFeedback() {
    
      console.log('Feedback submitted');
    }
  }

 
