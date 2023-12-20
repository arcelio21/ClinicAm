import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input()
  value:string = "";

  @Input()
  classCss:string="";

  @Output()
  onClickB = new EventEmitter<void>();

}
