import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserLogin } from "../model/UserLogin";
import {AuthUser} from "../model/AuthUser";

export const loginStateFeature = createFeatureSelector<AuthUser>('LoginState');

export const loginUserSelector = createSelector(
  loginStateFeature,
  (loginState:AuthUser) => loginState
);
