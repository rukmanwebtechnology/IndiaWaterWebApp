import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { Router } from '@angular/router';
//import { DEFAULT_APP_DATA } from 'src/config/default/app-data';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {

  companyname: string = "";
  fYear: string = "";
  user: string = "";

  constructor(public globals: ThemeOptions, private router: Router) {
  }

  ngOnInit() {
    this.companyname = "Test Company";
    this.fYear = "2022-2023";
    this.user = "testuser";
    
    // this.companyname = DEFAULT_APP_DATA.UserInfo.CompanyIdName;
    // this.fYear = DEFAULT_APP_DATA.UserInfo.FYearIdName;
    // this.user = DEFAULT_APP_DATA.UserInfo.LoginId;
  }

  logout(){
    //localStorage.setItem("userinfo",  null);
    this.router.navigate(['login']);
  }

  changecompany(){
      this.router.navigate(['loginstep2']);
  }
}
