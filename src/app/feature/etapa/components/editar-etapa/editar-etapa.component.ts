import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SwalService } from "@core/services/swal.service";
import { Etapa } from "../../shared/model/Etapa";
import { EtapaService } from "../../shared/service/etapa.service";

@Component({
  selector: "app-editar-etapa",
  templateUrl: "./editar-etapa.component.html",
  styleUrls: ["./editar-etapa.component.css"],
})
export class EditarEtapaComponent implements OnInit {
  etapa: Etapa;

  constructor(
    private router: Router,
    private service: EtapaService,
    protected swalService: SwalService
  ) {
    this.etapa = this.service.etapa;
  }

  ngOnInit() {}

  actualizarEtapa(etapa: Etapa) {
    this.service.updateEtapa(etapa).subscribe(
      () => {
        this.swalService.succes("Etapa actualizado correctamente");
        this.router.navigate(["etapas"]);
      },
      (error) => {
        this.swalService.danger(error.error.mensaje);
      }
    );
  }
}
