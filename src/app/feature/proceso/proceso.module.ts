import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtapaService } from '@etapa/shared/service/etapa.service';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { CrearProcesoComponent } from './components/crear-proceso/crear-proceso.component';
import { ListarProcesoComponent } from './components/listar-proceso/listar-proceso.component';
import { ProcesoService } from './shared/service/proceso.service';
import { ProcesoRoutingModule } from './proceso-routing.module';

@NgModule({
  declarations: [
    CrearProcesoComponent,
    ListarProcesoComponent
  ],

  imports: [
    ProcesoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],

  exports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  providers: [
    ProcesoService,
    EtapaService,
    UsuarioService
  ]
})
export class ProcesoModule { }
