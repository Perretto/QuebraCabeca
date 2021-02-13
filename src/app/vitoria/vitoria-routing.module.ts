import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitoriaPage } from './vitoria.page';

const routes: Routes = [
  {
    path: '',
    component: VitoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitoriaPageRoutingModule {}
