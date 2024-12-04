import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';
import { environment } from 'src/environments/enviroment';
import { BusquedaPersona } from '../interfaces/busqueda-persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true  // Para enviar cookies o credenciales
  };

  constructor(public httpClient: HttpClient) { }

  public traerPersonaPorDocumento(persona: BusquedaPersona): Observable<Persona> {
    return this.httpClient.get<Persona>(`${environment.baseUrl}${environment.httpUrls.persona.getPersona(persona.documento, persona.tipo_documento)}`, this.httpOptions);
  }
}
