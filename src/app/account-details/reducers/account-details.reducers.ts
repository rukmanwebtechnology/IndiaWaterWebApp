import { AccountDetailsActionTypes, AccountDetailsActions } from '../actions/account-details.action';

export interface State {
    loading: boolean;
    accountDetails: any;
}

export const initialState: State = {
    loading: false,
    accountDetails: []
};

export function reducer(state = initialState, action: AccountDetailsActions): State {
    switch(action.type) {
        case AccountDetailsActionTypes.FectchAllAccountDetails:
            return {
                ...state,
                loading: true
            };
        case AccountDetailsActionTypes.FectchAllAccountDetailsSuccess:
            console.log(action.payload);
            return {
                ...state,
                loading: false
            };
        case AccountDetailsActionTypes.FectchAllAccountDetailsError:
            console.log(action.payload);
                return {
                    ...state,
                    loading: false
                };
        default:
            return state;
    }
}