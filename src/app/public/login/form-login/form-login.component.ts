import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  idenCard = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  ngOnInit() {}

  sendData() {
    if (this.password.valid && this.idenCard.valid) {
      console.log('ENVIO DE DATOS');
    } 
  }
}
