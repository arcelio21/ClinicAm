import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validateDateLessThanToday } from '../../utils/CustomValidator';
import {RegisterUserService} from "../../service/register/register-user.service";
import {UserRegister} from "../../model/user-register";
import {IdentificationCardPipe} from "../../pipes/identification-card.pipe";
import {formatDate} from "@angular/common";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { apiLoginAction } from 'src/app/public/login/state/login.actions';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
  providers:[IdentificationCardPipe]
})
export class FormRegisterComponent implements OnInit {
  sectionForms: number = 1;

  personalData = this.formBuilder.group({
    personal: this.formBuilder.group({
      idencard: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      contact:['',[Validators.required,Validators.minLength(7),Validators.maxLength(8)]]
    }),
    address: this.formBuilder.group({
      province: [0, [Validators.required, Validators.min(1)]],
      district: [0, [Validators.required, Validators.min(1)]],
      village: [0, [Validators.required, Validators.min(1)]],
      specificAddress: [''],
    }),
    dataAccount: this.formBuilder.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        birthday: ['',[Validators.required, validateDateLessThanToday]],
      }
    ),
  });

  constructor(private formBuilder: FormBuilder,
              private registerService:RegisterUserService,
              private idenCardPipe:IdentificationCardPipe,
              private store:Store,
              private router:Router) {}

  ngOnInit() {}

  nextSectionFor(value: number) {
    this.sectionForms = value;
  }

  sendData(){

    let userRegister = this.mapperDataUser();

    if(userRegister){
      this.registerService.execute(userRegister).subscribe({
        next: (value)=>{
          console.log(value);
          this.store.dispatch(apiLoginAction({authUser:value}));
          this.router.navigate(['/home']);
        },
        error: (err)=>{
          console.log(err);
        }
      });
      return;
    }
    console.log("DATA NOT VALID")
  }

  private mapperDataUser():UserRegister| null{
    if(!this.personalData){
      return null;
    }

    let _idenCard = this.personalData.value.personal?.idencard|| "";
    let _name = this.personalData.value.personal?.name|| "";
    let _lastName = this.personalData.value.personal?.lastName || "";
    let _contact = this.personalData.value.personal?.contact || '';
    let _idVillage = this.personalData.value.address?.village || 0;
    let _specificAddress = this.personalData.value.address?.specificAddress || "";
    let _email = this.personalData.value.dataAccount?.email || "";
    let _password = this.personalData.value.dataAccount?.confirmPassword || "";
    let _birhtday = new Date(this.personalData.value.dataAccount?.birthday|| "");
    return {
      idenCard: this.idenCardPipe.transform(_idenCard),
      name: _name,
      lastName: _lastName,
      contact:_contact,
      idVillage: _idVillage,
      direcSpecific: _specificAddress,
      email:_email,
      password:_password,
      birthday:formatDate(_birhtday,'yyyy-MM-dd', 'en-US'),
      roles:[
        {
          id:2
        }
      ]
    };
  }
}
