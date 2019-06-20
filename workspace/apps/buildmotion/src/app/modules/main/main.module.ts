import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

import { MainRoutingModule } from './main-routing.module';
import { SiteComponentsModule } from '../site-components/site-components.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
  HomeComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MainRoutingModule,
    RouterModule,
    SiteComponentsModule
  ]
})
export class MainModule { }
