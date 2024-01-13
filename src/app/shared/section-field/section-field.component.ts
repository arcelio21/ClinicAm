import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TypeMessageInput } from '../model/TypeMessageInput';

@Component({
  selector: 'app-section-field',
  templateUrl: './section-field.component.html',
  styleUrls: ['./section-field.component.css'],
})
export class SectionFieldComponent {
  @Input()
  nameInput: string = '';

  @Input()
  valueLabel: string = '';

  @Input()
  typeInput: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  control!: FormControl;

  @Input()
  messageError!:string;

  messageInput: TypeMessageInput = TypeMessageInput.SUCCESS;

  messageLayout:boolean=false;
  messageInfo:string="";

  @Input()
  pattern="";

  showMessage() {

    if(this.messageLayout===false){
      this.messageLayout = true;
    }

    if (this.control.valid) {
      this.messageInput = TypeMessageInput.SUCCESS;
      this.messageInfo = 'Informacion Correcta';
    } else {
      this.messageInput = TypeMessageInput.ERROR;
      this.messageInfo = this.getMessage();
    }
  }

  private getMessage():string{
    if(this.control.hasError("required")){
      return "Información es requerida";
    }

    if (this.control.hasError('minlength')) {
      return `Cantidad necesaria de caracteres: ${this.control.errors?.['minlength'].requiredLength}`;
    }

    if(this.control.hasError('pattern')){

      if(this.messageError){
        return this.messageError;
      }

      return `Formato no valido`;
    }

    if (this.control.hasError('passwordNotEqual')) {
      return `Mismatched passwords`;
    }

    if (this.control.hasError('dateLessThanToday')) {
      return `Birthday No Valid`;
    }
    return "erro not register";
  }
}
