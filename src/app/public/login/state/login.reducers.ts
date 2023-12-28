import { createReducer, on } from "@ngrx/store"
import { apiLoginAction } from "./login.actions";
import { AuthUser } from "../model/AuthUser";

// const userLoginInitial:UserLogin ={
//   idenCard:"",
//   password:""
// }

// const initialState:LoginState ={
//   userLogin:userLoginInitial
// }

const initialState: AuthUser = {
  email: '',
  exp: 0,
  fechaNacimiento: '',
  fullName: '',
  iat: 0,
  sub: '',
  token: '',
  authorities:[]
};

export const loginReducer = createReducer(
  initialState,
  // on(loginAction, (currentState, action) => ({ ...currentState,userLogin:action.userlogin})),
  on(apiLoginAction,
    (currentState,action) => (action.authUser)
  )
);