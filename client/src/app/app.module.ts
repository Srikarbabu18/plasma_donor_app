// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { PlasmaDonationComponent } from './plasma-donation/plasma-donation.component';
import { DonationTableComponent } from './donation-table/donation-table.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    PlasmaDonationComponent,
    DonationTableComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AdminGuard,
    UserGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
