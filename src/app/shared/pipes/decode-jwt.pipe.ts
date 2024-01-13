import { Pipe, PipeTransform } from '@angular/core';
import {AuthUser} from "../../public/login/model/AuthUser";
import {decodeJwt} from "jose";

@Pipe({
  name: 'decodeJwt'
})
export class DecodeJwtPipe implements PipeTransform {

  transform(value:string): AuthUser {

    let userDecode:AuthUser = decodeJwt(value) as AuthUser;
    userDecode.token = value;

    return userDecode;
  }

}
