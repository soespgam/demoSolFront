import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


/* interface */
import { busquedaPersona } from 'src/app/interfaces/busqueda-persona.interface';
import { Persona } from 'src/app/interfaces/persona.interface';

/* service */
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formBusqueda = new FormGroup({
    tipo_documento: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)])
  });

  constructor(private personaService: PersonaService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public nuevaBusqueda(): busquedaPersona {
    return {
      documento: this.formBusqueda.get('documento')?.value!,
      tipo_documento: this.formBusqueda.get('tipo_documento')?.value!
    }
  }

  redirigirAResumen() {
    this.router.navigate(['/persona/resumen']);
  }


  public consultarPersona(): void {
    this.personaService.traerPersonaPorDocumento(this.nuevaBusqueda()).subscribe(
      {
        next: (res: Persona) => {
          localStorage.setItem('datoPersona', JSON.stringify(res));
          this.redirigirAResumen();
        },
        error: (error) => {
          console.log(error);
          alert(error.error);
        }
      }
    )

  }
}
