import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {route} from './app.route';
import {AuthGuard} from './auth.guard';

import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { PythonComponent } from './python/python.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {myPipe} from '../app/custom.pipe';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    PythonComponent,
    LoginComponent,
    DashboardComponent,
    myPipe,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
