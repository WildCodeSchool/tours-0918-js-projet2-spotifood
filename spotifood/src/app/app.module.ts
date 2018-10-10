import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonService } from './common/common.service';

import { AppComponent } from './app.component';
import { ComparateurComponent } from './comparateur/comparateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparateurComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
