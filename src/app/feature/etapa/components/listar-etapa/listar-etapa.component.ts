import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Observable } from 'rxjs';
import { Etapa } from '../../shared/model/Etapa';
import { EtapaService } from '../../shared/service/etapa.service';

@Component({
  selector: 'app-listar-etapa',
  templateUrl: './listar-etapa.component.html',
  styleUrls: ['./listar-etapa.component.css']
})
export class ListarEtapaComponent implements OnInit {

  public etapas:Observable<Etapa[]>;

  constructor(private service: EtapaService, private router: Router,protected swalService: SwalService) { }

  ngOnInit() {
    this.etapas = this.service.getEtapas();

  }

  nuevoEtapa(){
    this.router.navigate(["etapas/crear"]);
  }

  editarEtapa(etapa:Etapa){
    this.service.etapa = etapa;
    this.router.navigate(["etapas/editar"]);
  }

  deleteEtapa(etapa:Etapa){
    this.service.deleteEtapa(etapa).subscribe(()=>{
    this.swalService.danger("Etapa eliminado correctamente");
    this.etapas = this.service.getEtapas();
  })
  }



}
