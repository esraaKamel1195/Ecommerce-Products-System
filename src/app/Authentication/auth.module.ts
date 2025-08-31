import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from '../Authentication/auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangedPasswordComponent } from './changed-password/changed-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ChangedPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ChangedPasswordComponent,
    ResetPasswordComponent,
  ],
})
export class AuthModule {}
