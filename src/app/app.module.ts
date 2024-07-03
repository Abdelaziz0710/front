// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent // Include RegisterComponent in declarations
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Include ReactiveFormsModule in imports
    AppRoutingModule // Include AppRoutingModule in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
