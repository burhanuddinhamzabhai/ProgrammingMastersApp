import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppRootPageRoutingModule } from './app-root-routing.module';

import { AppRootPage } from './app-root.page';
import { HomePage } from '../home/home.page';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppRootPageRoutingModule,
  ],
  declarations: [AppRootPage]
})
export class AppRootPageModule {}
