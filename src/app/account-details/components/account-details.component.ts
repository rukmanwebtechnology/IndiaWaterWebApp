import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { FectchAllAccountDetails } from '../actions/account-details.action'
import { AccountDetails_GetAllRequest
  , Queries_FilterExpression, Queries_FilterOperator, IQueries_FilterExpression
, IAccountDetails_GetAllRequest, IQueries_Filter, Queries_Filter } from '../../services/apiservice.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    let data: IQueries_FilterExpression = {
      filterColumnName: 'LoginId',
      filterOperator: Queries_FilterOperator.GreaterThan,
      filterValues: ['2']
    };
    const filterExpressions: Queries_FilterExpression[] = [];
    filterExpressions.push(new Queries_FilterExpression(data));
    const queryFilter: IQueries_Filter = { filterExpressions: filterExpressions };
    let getAllRequest: IAccountDetails_GetAllRequest = {
      filter: new Queries_Filter(queryFilter)
    };

    this.store.dispatch(new FectchAllAccountDetails(new AccountDetails_GetAllRequest(getAllRequest)));
  }

}
