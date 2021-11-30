import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgendamientosModule } from './modules/agendamientos/agendamientos.module';
import { CarsModule } from './modules/cars/cars.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { UsersModule } from './modules/users/users.module';
import {MenubarModule} from 'primeng/menubar';
import { AuthService } from './shared/services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    SharedModule,
    ButtonModule,
    LoginModule,
    CarsModule,
    AgendamientosModule,
    ServiciosModule,
    HomeModule,
    UsersModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
