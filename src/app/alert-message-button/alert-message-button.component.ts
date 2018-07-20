import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert-message-button',
  templateUrl: './alert-message-button.component.html',
  styleUrls: ['./alert-message-button.component.css']
})
export class AlertMessageButtonComponent implements OnInit {

  content = 'you have been warned';
  hideContent = true;
  severity = 423;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

}
