import { Component, OnInit } from '@angular/core';
import { AccountDetailsClient, AccountDetails_GetAllRequest
  , Queries_FilterExpression, Queries_FilterOperator, IQueries_FilterExpression
, IAccountDetails_GetAllRequest, IQueries_Filter, Queries_Filter } from './services/apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IndiaWaterWebApp';

  constructor(private accountDetailService: AccountDetailsClient) {}

  ngOnInit() {
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
debugger;
    const response = this.accountDetailService.getAll(new AccountDetails_GetAllRequest(getAllRequest));
    response.subscribe((resdata) => console.log(resdata));
  }
}
