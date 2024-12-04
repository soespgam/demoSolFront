import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { HomeComponent } from './home/home.component';
import { ResumePersonaComponent } from './resume-persona/resume-persona.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'resumen',
    component: ResumePersonaComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule {

}
