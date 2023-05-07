import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Etapa } from '@etapa/shared/model/Etapa';
import { EtapaService } from '@etapa/shared/service/etapa.service';
import { Observable } from 'rxjs';
import { Proceso } from 'src/app/feature/proceso/shared/model/Proceso';
import { Usuario } from 'src/app/feature/usuario/shared/model/Usuario';
import { UsuarioService } from 'src/app/feature/usuario/shared/service/usuario.service';
import { ProcesoService } from '../../shared/service/proceso.service';

@Component({
  selector: 'app-crear-proceso',
  templateUrl: './crear-proceso.component.html',
  styleUrls: ['./crear-proceso.component.css']
})
export class CrearProcesoComponent implements OnInit {


  proceso:Proceso=new Proceso();
  public etapas:Observable<Etapa[]>;
  public usuarios:Observable<Usuario[]>;

  constructor(
    private router:Router,
    private service:ProcesoService,
    private serviceEtapa:EtapaService,
    private serviceUsuario:UsuarioService,
    protected swalService: SwalService,
    ) { }

  ngOnInit() {

    this.etapas = this.serviceEtapa.getEtapas();
    this.usuarios = this.serviceUsuario.getUsuarios();
  }

  guardarProceso(){
    this.service.createProceso(this.proceso).subscribe(
      () => {
        this.swalService.succes("Proceso creado correctamente");
        this.router.navigate(["procesos"]);
      },
      (error) => {
        this.swalService.danger(error.error.mensaje);
      }
    );
   }

}
