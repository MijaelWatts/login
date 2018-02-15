import { BrowserModule }              from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule }                  from '@ng-bootstrap/ng-bootstrap';
// import { TabsModule }				  from 'ngx-bootstrap/tabs';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './body/login.component';
import { FooterComponent } from './footer/footer.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
    // TabsModule.forRoot()
  ],
  schemas:[ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }