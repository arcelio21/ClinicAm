import { createAction, props } from "@ngrx/store";
import { UserLogin } from "../model/UserLogin";
import { AuthUser } from "../model/AuthUser";

export const loginAction = createAction("[Login-Form-Login] LoginUser", props<{userlogin:UserLogin}>());

export const apiLoginAction = createAction("[API-Login-User] Validate User", props<{authUser:AuthUser}>());

export const apiLoginActionError = createAction("[API-Login-User] Error Authentication", props<{errorMessage:string}>());