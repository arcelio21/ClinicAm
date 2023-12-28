import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserLogin } from "../model/UserLogin";

export const loginStateFeature = createFeatureSelector<UserLogin>('LoginState');

export const loginUserSelector = createSelector(
  loginStateFeature,
  (loginState:UserLogin) => loginState
);