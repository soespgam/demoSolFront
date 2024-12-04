import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonaRoutingModule } from './persona-routing.module';

/* components */
import { HomeComponent } from './home/home.component';
import { ResumePersonaComponent } from './resume-persona/resume-persona.component';

@NgModule({
  declarations: [
    HomeComponent,
    ResumePersonaComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PersonaModule { }
