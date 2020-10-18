import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'ng-devui';
import { HeaderModule } from './project-portal/header/header.module';
import { LeftNavModule } from './project-portal/left-nav/left-nav.module';
import { MainContentModule } from './project-portal/main-content/main-content.module';
import { FooterModule } from './project-portal/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HeaderModule,
    LeftNavModule,
    MainContentModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
