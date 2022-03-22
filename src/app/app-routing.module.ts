import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/components/account-details.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',  
    component: BaseLayoutComponent,    
    loadChildren: () => import('./account-details/account-details.module').then(m => m.AccountDetailsModule),
    pathMatch: 'full'
  }
];

// const routes: Routes = [
//   {
//     path: '',  
//     component: BaseLayoutComponent,  
//     children: [
//       {path: '', component: AccountDetailsComponent },
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
