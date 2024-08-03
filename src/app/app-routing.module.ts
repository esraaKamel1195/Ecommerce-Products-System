import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrongPageComponentComponent } from './wrong-page-component/wrong-page-component.component';

const routes: Routes = [
  { path:'**',component: WrongPageComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
