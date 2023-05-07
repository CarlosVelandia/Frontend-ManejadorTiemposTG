import { by, element } from "protractor";

export class ListarEtapas{

  private tablaEtapas = element.all(by.className("tablaEtapas"));
  private botonCrearEtapa = element.all(by.id("botonCrearEtapa"));
  private botonEditarEtapa = element.all(by.id("botonEditarEtapa1"));
  private botonEliminarEtapa = element.all(by.id("botonEliminarEtapa1"));
  private swal = element(by.className('swal2-title'));

  async contarEtapas() {
    return this.tablaEtapas.count();
  }

  async clickBotonCrearEtapa() {
    await this.botonCrearEtapa.click();
  }

  async clickBotonEditarEtapa() {
    await this.botonEditarEtapa.click();
  }

  async clickBotonEliminarEtapa() {
    await this.botonEliminarEtapa.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }


}
