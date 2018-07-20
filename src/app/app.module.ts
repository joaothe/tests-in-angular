import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { AlertMessageButtonComponent } from './alert-message-button/alert-message-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertMessageButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
