import { Component, Input, OnInit } from '@angular/core';
import { TypeMessageInput } from '../model/TypeMessageInput';

@Component({
  selector: 'app-MessageInput',
  templateUrl: './MessageInput.component.html',
  styleUrls: ['./MessageInput.component.css']
})
export class MessageInputComponent implements OnInit {

  @Input()
  message:string="";

  @Input()
  typeError!:TypeMessageInput;
  constructor() { }

  ngOnInit() {
  }

}
