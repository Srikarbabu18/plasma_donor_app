import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { PlasmaDonationComponent } from './plasma-donation/plasma-donation.component';
import { DonationTableComponent } from './donation-table/donation-table.component';
import { LandingPageComponent } from './landing-page/landing-page.component'; // Import the LandingPageComponent

const routes: Routes = [
  { path: 'admin/register', component: AdminLoginComponent, canActivate: [AdminGuard] },
  { path: 'user/login', component: UserLoginComponent, canActivate: [UserGuard] },
  { path: 'donate-plasma', component: PlasmaDonationComponent },
  { path: 'donation-table', component: DonationTableComponent },
  { path: '', component: LandingPageComponent }, // Add the landing page route

  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
