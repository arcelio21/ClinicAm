import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Option } from '../model/Option';
import { FormControl } from '@angular/forms';
import { TypeMessageInput } from '../model/TypeMessageInput';

@Component({
  selector: 'app-select-input-custom',
  templateUrl: './select-input-custom.component.html',
  styleUrls: ['./select-input-custom.component.css'],
})
export class SelectInputCustomComponent implements OnInit {
  @Input()
  dataOptions!: Option[];

  @Input()
  labelValue: string = '';

  @Input()
  control!: FormControl;

  @Output()
  valueSelected = new EventEmitter<number>();



  messageInput: TypeMessageInput = TypeMessageInput.SUCCESS;

  messageLayout: boolean = false;
  messageInfo: string = '';

  constructor() {}

  ngOnInit() {
    if (this.control.value === 0 || this.control.value === '') {
      this.control.setValue(1);
    }
  }

  showMessage() {
    if (!this.messageLayout) {
      this.messageLayout = true;
    }

    if (this.control.valid) {
      this.messageInput = TypeMessageInput.SUCCESS;
      this.messageInfo = 'Informacion Correcta';
      this.emmitValueSelected();
    } else {
      this.messageInput = TypeMessageInput.ERROR;
      this.messageInfo = this.getMessage();
    }
  }

  private emmitValueSelected(){
    if(this.valueSelected){
      this.valueSelected.emit(this.control.value);
    }
  }

  private getMessage(): string {
    if (this.control.hasError('required')) {
      return 'Información es requerida';
    }

    if (this.control.hasError('minlength')) {
      return `Cantidad necesaria de caracteres: ${this.control.errors?.['minlength'].requiredLength}`;
    }

    if (this.control.hasError('pattern')) {
      return `Formato no valido 123456-123456-123456`;
    }

    if (this.control.hasError('passwordNotEqual')) {
      return `Mismatched passwords`;
    }

    if (this.control.hasError('dateLessThanToday')) {
      return `Birthday No Valid`;
    }
    return 'erro not register';
  }
}
