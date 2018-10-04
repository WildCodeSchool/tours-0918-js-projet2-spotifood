import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComparateurComponent } from './comparateur/comparateur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComparateurComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ScrollDispatchModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
