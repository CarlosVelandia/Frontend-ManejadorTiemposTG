import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProcesoComponent } from './components/crear-proceso/crear-proceso.component';
import { ListarProcesoComponent } from './components/listar-proceso/listar-proceso.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarProcesoComponent
      },
      {
        path: 'crear',
        component: CrearProcesoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesoRoutingModule { }
