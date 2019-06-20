import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    MainLayoutComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    MainLayoutComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SiteComponentsModule { }
