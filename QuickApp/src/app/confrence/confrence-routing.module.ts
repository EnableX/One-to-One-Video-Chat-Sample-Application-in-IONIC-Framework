import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfrencePage } from './confrence.page';

const routes: Routes = [
  {
    path: '',
    component: ConfrencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfrencePageRoutingModule {}
