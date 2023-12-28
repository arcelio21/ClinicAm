import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { AuthUser } from '../model/AuthUser';
import { UserLogin } from '../model/UserLogin';
import { NotificationProcess } from 'src/app/shared/model/NotificationProcess';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../model/Token';
import {decodeJwt}  from 'jose';

@Injectable()
export class AuthService {
  readonly optionsHttp = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as const,
    responseType: 'json' as const,
    withCrdentials: true,
  };

  readonly URL: string = 'http://localhost:8082/api/v1/';

  private notificationAuth = new Subject<NotificationProcess>();
  getNotificationAuth = this.notificationAuth.asObservable();

  constructor(
    private httpClient: HttpClient,
  ) {}

  public authenticateUser(userLogin: UserLogin): Observable<AuthUser> {

    let userLoginFormatted = this.modifyIdenCardUser(userLogin);

    return this.httpClient
      .post<Token>(
        this.URL + 'auth/authenticate',
        userLoginFormatted,
        this.optionsHttp
      )
      .pipe(
        map(response => {
            let token: string = response?.body?.token || "";
            let userDecode:AuthUser = decodeJwt(token) as AuthUser;
            userDecode.token = token;

            this.notificationAuth.next({
              isSuccess: true,
              message: 'Credenciales Correctas',
            });

            return userDecode;
        })
      );
  }

  public notificationError(errorMessage: string): void {
    this.notificationAuth.next({
      isSuccess: false,
      message: errorMessage,
    });
  }

  private modifyIdenCardUser(userLogin: UserLogin): UserLogin {
    return {
      idenCard: userLogin.idenCard.replace(/-/g, ''),
      password: userLogin.password,
    };
  }
}
