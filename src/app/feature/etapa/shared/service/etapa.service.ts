import { Injectable } from '@angular/core';
import { Etapa } from '../model/Etapa';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';



@Injectable()
export class EtapaService {

  etapa: Etapa;
  endpointEtapas: "/etapas";

  constructor(protected http:HttpService) { }

  getEtapas(){
    return this.http.doGet<Etapa[]>(`${environment.endpoint}/etapas`);
  }
  createEtapa(etapa:Etapa){
    return this.http.doPost<Etapa, boolean>(`${environment.endpoint}/etapas`,etapa);
  }
  updateEtapa(etapa:Etapa){
    return this.http.doPut<Etapa, boolean>(`${environment.endpoint}/etapas/${etapa.id}`,etapa);
  }
  deleteEtapa(etapa:Etapa){
    return this.http.doDelete<Etapa>(`${environment.endpoint}/etapas/${etapa.id}`);
  }
}
