import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from './root-reducer';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { FooterComponent } from './layout/components-layout/footer/footer.component';
import { SidebarComponent } from './layout/components-layout/sidebar/sidebar.component';
 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Routes, RouterModule } from '@angular/router';
import { NgReduxModule } from '@angular-redux/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/components-layout/header/header.component';
import { CompanyinfoBoxComponent } from './layout/components-layout/header/elements/companyinfo-box/companyinfo-box.component';
import { SearchBoxComponent } from './layout/components-layout/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './layout/components-layout/header/elements/user-box/user-box.component';
import { FormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    
    BaseLayoutComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    CompanyinfoBoxComponent,
    SearchBoxComponent,
    UserBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    NgbModule,
    NgReduxModule,
    FormsModule,
    NgxTypeaheadModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([]),
    RouterModule.forChild([])
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,       
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,           
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
