import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from '../state/login.actions';
import { UserLogin } from '../model/UserLogin';
import { Observable, Subject, Subscription, debounceTime, ignoreElements, tap } from 'rxjs';
import { loginUserSelector } from '../state/login.selectors';
import { AuthService } from '../service/Auth.service';
import { Router } from '@angular/router';
import { NotificationProcess } from 'src/app/shared/model/NotificationProcess';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit, OnDestroy {

  click$ = new Subject<void>();

  idenCard = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  notification$ = this.authService.getNotificationAuth.pipe(
    tap((notification) => {
      if (notification.isSuccess) {
        this.router.navigate(['/selectUser']);
      } else {
        this.processNotification(notification);
      }
    }),
    ignoreElements()
  );

  private notificationSuscribe!:Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.notificationSuscribe=this.notification$.subscribe();

    this.click$.pipe(
      debounceTime(2000)
    ).subscribe(
      ()=>{
        if (this.password.valid && this.idenCard.valid) {
          let userLogin: UserLogin = {
            idenCard: this.idenCard.value ?? '',
            password: this.password.value ?? '',
          };

          this.store.dispatch(loginAction({ userlogin: userLogin }));
        }
      }
    );
  }

  sendData() {
    this.click$.next();
  }

  processNotification(notification: NotificationProcess) {
    console.log(notification.message);
    //todo Crear card de notificacion de error de validacion
  }

  ngOnDestroy(): void {
    this.notificationSuscribe.unsubscribe();
  }
}
