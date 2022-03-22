import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companyinfo-box',
  templateUrl: './companyinfo-box.component.html'
})
export class CompanyinfoBoxComponent implements OnInit {

  companyname: string = "";
  fYear: string = "";
  user: string = "";
  constructor() { }

  ngOnInit() {
    this.companyname = "Test Company";
    this.fYear = "2022-2023";
    this.user = "testuser";

    // this.companyname = DEFAULT_APP_DATA.UserInfo.CompanyIdName;
    // this.fYear = DEFAULT_APP_DATA.UserInfo.FYearIdName;
    // this.user = DEFAULT_APP_DATA.UserInfo.LoginId;
  }

}
