import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../service/Auth.service';
import {
  apiLoginAction,
  apiLoginActionError,
  loginAction,
} from './login.actions';
import { catchError, concatMap, map, of, tap } from 'rxjs';

@Injectable()
export class LoginEffects {
  constructor(private action$: Actions, private authservice: AuthService) {}

  authenticate$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginAction),
      concatMap((act) =>
        this.authservice.authenticateUser(act.userlogin).pipe(
          map((auth) => {
            return apiLoginAction({ authUser: auth });
          }),
          catchError(() => of(apiLoginActionError({ errorMessage: 'Usuario No Validado' })))
        )
      )
    )
  );

  //HACER EFFECTS PARA ERROR Y SUCCESS
  error$ = createEffect(()=>
      this.action$.pipe(
        ofType(apiLoginActionError),
        tap((act) => this.authservice.notificationError(act.errorMessage))
      ),{dispatch:false}
  );
}
