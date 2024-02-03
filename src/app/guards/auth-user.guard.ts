import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {loginUserSelector} from "../public/login/state/login.selectors";
import {firstValueFrom} from "rxjs";

export const authUserGuard: CanActivateFn = async (route, state) => {

  const router: Router = inject(Router);
  const store: Store = inject(Store);

  try {
    const {token} = await firstValueFrom(store.select(loginUserSelector));

    if(token){
      return true;
    }else {
      await router.navigate(['/home'])
      return false;
    }


  } catch (ex) {
    console.log(ex)
    await router.navigate(['/home'])
    return false;
  }

};
