import { AccountDetailsActionTypes, AccountDetailsActions } from '../actions/account-details.action';
import { AccountDetails_AccountDetails, AccountDetails_GetAllResponse } from '../../services/apiservice.service';

export interface State {
    loading: boolean;
    accountDetails: AccountDetails_AccountDetails[] | undefined;
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
            const adresponse: AccountDetails_GetAllResponse = action.payload;
            console.log(adresponse.accountDetails);
            return {
                ...state,
                accountDetails: adresponse.accountDetails,
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