import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParqueService } from '@parque/shared/service/parque.service';
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
    ParqueService,
    UsuarioService
  ]
})
export class ProcesoModule { }
