// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


// Local Modules
import { AppConfigModule } from './app-config.module'
import { AppRoutingModule } from './app-routing.module'
import { AppStoreModule } from './app.store'

// Local Components
import { AppComponent } from './app.component';

// Local Services
import { AppService } from './app.service'

const components = []

const modules = [
  AppConfigModule,
  AppRoutingModule,
  AppStoreModule,
]

const providers = [
  AppService,
]
@NgModule({
  declarations: [
    AppComponent,

    ...components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    ...modules,
  ],
  providers: [
    ...providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
