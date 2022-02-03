import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from '../../environments/environment'
import { AccountDetailsComponent } from './components/account-details.component';
import { AccountDetailsEffects } from './effects/account-details.effects';
import * as fromAccountDetails from './reducers/account-details.reducers';
import { AccountDetailsRoutingModule } from './account-details-routing.module'

@NgModule({
    declarations: [AccountDetailsComponent],
    imports: [
        CommonModule,
        AccountDetailsRoutingModule,
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forFeature([AccountDetailsEffects]),
        StoreModule.forFeature('accountDetails', fromAccountDetails.reducer)
    ],
    exports: [AccountDetailsComponent]
})
export class AccountDetailsModule { }
