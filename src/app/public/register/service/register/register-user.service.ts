import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Token} from "../../../../shared/model/Token";
import {UserRegister} from "../../model/user-register";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DecodeJwtPipe} from "../../../../shared/pipes/decode-jwt.pipe";
import {AuthUser} from "../../../login/model/AuthUser";
import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterUserService {

  readonly optionsHttp = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as const,
    responseType: 'json' as const,
    withCrdentials: true,
  };

  constructor(
    private httpClient: HttpClient,
    private decodeJwt:DecodeJwtPipe
  ) { }

  public execute(user:UserRegister):Observable<AuthUser>{
    console.log(user);
    return this.httpClient.post<Token>(
      `${environment.URL}auth/register`,
      user,
      this.optionsHttp
    ).pipe(
      map(response =>{
        let token: string = response?.body?.token || "";
        //TODO BUSCAR LA FORMA DE NOTIFICAR REGISTRO CORRECTO
        return this.decodeJwt.transform(token);
      })
    );
  }


}
