import { Injectable } from '@angular/core';
import { Proceso } from '../model/Proceso';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class ProcesoService {

  proceso: Proceso;
  endpointProcesos: "/procesos";

  constructor(protected http:HttpService) { }

  getProcesos(){
    return this.http.doGet<Proceso[]>(`${environment.endpoint}/procesos`);
  }

  createProceso(proceso:Proceso){
    return this.http.doPost<Proceso, boolean>(`${environment.endpoint}/procesos`,proceso);
  }

  deleteProceso(proceso:Proceso){
    return this.http.doDelete<Proceso>(`${environment.endpoint}/procesos/${proceso.id}`);
  }
}
