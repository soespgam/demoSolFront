import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'persona',
    loadChildren: () => import('./pages/persona.module').then((m) => m.PersonaModule)
  }
  ,
  {
    path: '',
    redirectTo: '/persona/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
