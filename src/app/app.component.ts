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

  }
}
