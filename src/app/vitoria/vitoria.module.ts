import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VitoriaPageRoutingModule } from './vitoria-routing.module';

import { VitoriaPage } from './vitoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitoriaPageRoutingModule
  ],
  declarations: [VitoriaPage]
})
export class VitoriaPageModule {}
