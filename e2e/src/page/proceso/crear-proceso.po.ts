import { by, element } from "protractor";

export class CrearProceso {
  private inputIdUsuario = element(by.id("idUsuario"));
  private inputIdEtapa = element(by.id("idEtapa"));
  private inputFechaCompra = element(by.id("fechaCompra"));
  private botonCreaProceso = element(by.id("guardarProceso"));
  private seleccionUsuario = element.all(by.id("usuarios"));
  private seleccionEtapa = element.all(by.id("etapas"));
  private swal = element(by.className('swal2-title'));


  async clickInputIdUsuario() {
    await this.inputIdUsuario.click();
  }
  async clickInputinputIdEtapa() {
    await this.inputIdEtapa.click();
  }

  async clickInputFechaCompra() {
    await this.inputFechaCompra.click();
  }

  async setInputFechaCompra(fechaCompra: string) {
    await this.inputFechaCompra.sendKeys(fechaCompra);
  }

  async clickOpcionIdUsuario() {
    await this.getOpcionIdUsuario().click();
  }

  async clickOpcionIdEtapa() {
    await this.getOpcionIdEtapa().click();
  }

  getOpcionIdUsuario() {
    return this.seleccionUsuario.first();
  }

  getOpcionIdEtapa() {
    return this.seleccionEtapa.first();
  }

  async clickBotonGuardarProceso() {
    await this.botonCreaProceso.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }

}
