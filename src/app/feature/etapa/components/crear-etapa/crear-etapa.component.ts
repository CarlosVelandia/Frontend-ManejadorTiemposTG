import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Etapa } from '../../shared/model/Etapa';
import { EtapaService } from '../../shared/service/etapa.service';

@Component({
  selector: 'app-crear-etapa',
  templateUrl: './crear-etapa.component.html',
  styleUrls: ['./crear-etapa.component.css']
})

export class CrearEtapaComponent implements OnInit {

  etapa:Etapa=new Etapa();
  constructor(
    private router:Router,
    private service:EtapaService,
    protected swalService: SwalService
    ) { }

  ngOnInit() {
  }

  guardarEtapa(){
    this.service.createEtapa(this.etapa).subscribe(()=>{
      this.swalService.succes("Etapa creado correctamente");
      this.router.navigate(["etapas"]);
  },
  (error) => {
    this.swalService.danger(error.error.mensaje);
  })
  }

}
