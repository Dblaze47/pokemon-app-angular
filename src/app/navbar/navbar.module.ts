import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignedInLinksComponent } from './signed-in-links/signed-in-links.component';
import { SignedOutLinksComponent } from './signed-out-links/signed-out-links.component';



@NgModule({
  declarations: [SignedInLinksComponent, SignedOutLinksComponent],
  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
