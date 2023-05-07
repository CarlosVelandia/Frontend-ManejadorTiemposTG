import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearEtapaComponent } from './components/crear-etapa/crear-etapa.component';
import { EditarEtapaComponent } from './components/editar-etapa/editar-etapa.component';
import { ListarEtapaComponent } from './components/listar-etapa/listar-etapa.component';
import { EtapaRoutingModule } from './etapa-routing.module';
import { EtapaService } from './shared/service/etapa.service';

@NgModule({
  declarations: [
    CrearEtapaComponent,
    EditarEtapaComponent,
    ListarEtapaComponent
  ],
  imports: [
    EtapaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  exports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  providers: [EtapaService]
})
export class EtapaModule { }
