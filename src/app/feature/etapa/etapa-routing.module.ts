import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEtapaComponent } from './components/crear-etapa/crear-etapa.component';
import { EditarEtapaComponent } from './components/editar-etapa/editar-etapa.component';
import { ListarEtapaComponent } from './components/listar-etapa/listar-etapa.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarEtapaComponent
      },
      {
        path: 'crear',
        component: CrearEtapaComponent
      },
      {
        path: 'editar',
        component: EditarEtapaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtapaRoutingModule { }
