import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-field',
  templateUrl: './section-field.component.html',
  styleUrls: ['./section-field.component.css']
})
export class SectionFieldComponent implements OnInit {

  @Input()
  nameInput:string="";

  @Input()
  valueLabel:string="";

  @Input()
  typeButton:string="";

  @Input()
  placeholder:string="";


  constructor() { }

  ngOnInit() {
  }

}
