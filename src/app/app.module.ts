import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent, LogoutComponent, RegisterComponent} from './auth';
import { SignedInLinksComponent, SignedOutLinksComponent } from './navbar';
import { CardListComponent, CardListItemComponent } from './dashboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
