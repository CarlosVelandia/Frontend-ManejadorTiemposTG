import { by, element } from "protractor";

export class ListarProcesos{

  private tablaProcesos = element.all(by.className("tablaProcesos"));
  private botonCrearProceso = element.all(by.id("botonCrearProceso"));
  private botonEditarProceso = element.all(by.id("botonEditarProceso3"));
  private botonEliminarProceso = element.all(by.id("botonEliminarProceso3"));
  private swal = element(by.className('swal2-title'));


  async contarProcesos() {
    return this.tablaProcesos.count();
  }

  async clickBotonCrearProceso() {
    await this.botonCrearProceso.click();
  }

  async clickBotonEditarProceso() {
    await this.botonEditarProceso.click();
  }

  async clickBotonEliminarProceso() {
    await this.botonEliminarProceso.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
