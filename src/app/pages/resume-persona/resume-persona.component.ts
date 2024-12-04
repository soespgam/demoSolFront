import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-resume-persona',
  templateUrl: './resume-persona.component.html',
  styleUrls: ['./resume-persona.component.css']
})
export class ResumePersonaComponent implements OnInit {
  persona:any;

  constructor(private router: Router) {
   }


  ngOnInit(): void {
    this.traerDatoPersona();
  }

  public traerDatoPersona(){
    this.persona = JSON.parse(localStorage.getItem('datoPersona')!);
    console.log(this.persona)
  }

  redirigirAHome() {
    this.router.navigate(['/persona/home']);
    localStorage.removeItem('datoPersona');
  }
}
