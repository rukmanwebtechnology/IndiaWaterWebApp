import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { AccountDetailsActionTypes, AccountDetailsActions, FectchAllAccountDetailsSuccess
        , FectchAllAccountDetailsError } from '../actions/account-details.action';
import { AccountDetailsClient } from '../../services/apiservice.service';

@Injectable({
    providedIn: 'root'
  })
export class AccountDetailsEffects {
    @Effect()
    AccountsDetails$ = this.actions$.pipe(
        ofType(AccountDetailsActionTypes.FectchAllAccountDetails),
        switchMap((action) => this.accountDetailClient.getAll(action.payload)
        .pipe(
            switchMap((response: any) => of(new FectchAllAccountDetailsSuccess(response)))
            , catchError(error => of(
                new FectchAllAccountDetailsError({ errorMessage: error.message }))
            ))
        )
    );

    constructor(
        private accountDetailClient: AccountDetailsClient,
        private actions$: Actions<AccountDetailsActions>) {}
}