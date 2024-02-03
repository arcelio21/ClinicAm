import {Component, OnInit} from '@angular/core';
import {loginUserSelector} from "../../../../public/login/state/login.selectors";
import {Store} from "@ngrx/store";
import {Authority} from "../../../../public/login/model/AuthUser";

@Component({
  selector: 'app-choice-type-user',
  templateUrl: './choice-type-user.component.html',
  styleUrls: ['./choice-type-user.component.css']
})
export class ChoiceTypeUserComponent implements OnInit{

  authUser = this.store.select(loginUserSelector);
  authorities!:Authority[];

  constructor(
    private store:Store
  ) {
  }

  ngOnInit(): void {
    this.authUser.subscribe({
      next:value => {
        this.authorities = value.authorities;
      }
    })
  }


}
