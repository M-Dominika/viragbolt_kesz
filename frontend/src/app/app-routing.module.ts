import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ArukComponent } from './aruk/aruk.component';
import { MegrendelesComponent } from './megrendeles/megrendeles.component';

const routes: Routes = [
  { path: "", component: IndexComponent},
  { path: "aruk", component: ArukComponent},
  { path: "megrendeles", component: MegrendelesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }