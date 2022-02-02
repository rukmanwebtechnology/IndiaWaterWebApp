import { Action } from '@ngrx/store';

export enum AccountDetailsActionTypes {
    FectchAllAccountDetails = '[Account Details] fetch all records',
    FectchAllAccountDetailsSuccess = '[Account Details] fetch all records success response',
    FectchAllAccountDetailsError = '[Account Details] fetch all records error response'
}

export class FectchAllAccountDetails implements Action {
    public readonly type = AccountDetailsActionTypes.FectchAllAccountDetails;
    constructor(public payload: any) {}
}

export class FectchAllAccountDetailsSuccess implements Action {
    public readonly type = AccountDetailsActionTypes.FectchAllAccountDetailsSuccess;
    constructor(public payload: any) {}
}

export class FectchAllAccountDetailsError implements Action {
    public readonly type = AccountDetailsActionTypes.FectchAllAccountDetailsError;
    constructor(public payload: any) {}
}

export type AccountDetailsActions = FectchAllAccountDetails | FectchAllAccountDetailsSuccess
            | FectchAllAccountDetailsError;