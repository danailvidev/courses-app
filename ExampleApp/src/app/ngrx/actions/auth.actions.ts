import { Action } from '@ngrx/store';
export const GET_CURRENT_USER_DATA = 'GET_CURRENT_USER_DATA';
export const GET_CURRENT_USER_DATA_SUCCESS = 'GET_CURRENT_USER_DATA_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

export class LoginUserAction {
    readonly type = LOGIN_USER;
    constructor(public payload?: any) { }
}

export class LoginUserSuccessAction {
    readonly type = LOGIN_USER_SUCCESS;
    constructor(public payload?: any) { }
}

export class GetCurrentUserAction {
    readonly type = GET_CURRENT_USER_DATA;
    constructor() { }
}

export class GetCurrentUserSuccessAction {
    readonly type = GET_CURRENT_USER_DATA_SUCCESS;
    constructor(public payload?: any) { }
}

export class LogoutUserAction {
    readonly type = LOGOUT_USER;
    constructor(public payload?: any) { }
}

export class LogoutUserSuccessAction {
    readonly type = LOGOUT_USER_SUCCESS;
    constructor(public payload?: any) { }
}

export type Action
    = GetCurrentUserAction
    | LoginUserAction
    | LoginUserSuccessAction
    | LogoutUserAction
    | LogoutUserSuccessAction
    | GetCurrentUserSuccessAction;

