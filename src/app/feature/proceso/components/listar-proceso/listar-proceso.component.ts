import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Observable } from 'rxjs';
import { Proceso } from 'src/app/feature/proceso/shared/model/Proceso';
import { ProcesoService } from '../../shared/service/proceso.service';




@Component({
  selector: 'app-listar-proceso',
  templateUrl: './listar-proceso.component.html',
  styleUrls: ['./listar-proceso.component.css']
})
export class ListarProcesoComponent implements OnInit {

  public procesos:Observable<Proceso[]>;

  constructor(private service: ProcesoService, private router: Router, protected swalService: SwalService) { }

  ngOnInit() {
    this.procesos = this.service.getProcesos();
  }

  nuevoProceso(){
    this.router.navigate(["procesos/crear"]);
  }

  editarProceso(proceso:Proceso){
    this.service.proceso = proceso;
    this.router.navigate(["procesos/editar"]);
  }

  deleteProceso(proceso:Proceso){
    this.service.deleteProceso(proceso).subscribe(()=>{
    this.swalService.danger("Proceso eliminado correctamente");
    this.procesos = this.service.getProcesos();
   })
  }

}
