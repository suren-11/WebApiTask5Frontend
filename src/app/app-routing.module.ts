import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicBaseComponent } from './public-base/public-base.component';

const routes: Routes = [
  {
    path: 'login', component: PublicBaseComponent,
    loadChildren: () => import('../app/public-base/public-base.module').then(m => m.PublicBaseModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
