import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfrencePageRoutingModule } from './confrence-routing.module';

import { ConfrencePage } from './confrence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfrencePageRoutingModule
  ],
  declarations: [ConfrencePage]
})
export class ConfrencePageModule {}
