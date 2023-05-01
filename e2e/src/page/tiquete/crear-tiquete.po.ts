import { by, element } from "protractor";

export class CrearProceso {
  private inputIdUsuario = element(by.id("idUsuario"));
  private inputIdParque = element(by.id("idParque"));
  private inputFechaCompra = element(by.id("fechaCompra"));
  private botonCreaProceso = element(by.id("guardarProceso"));
  private seleccionUsuario = element.all(by.id("usuarios"));
  private seleccionParque = element.all(by.id("parques"));
  private swal = element(by.className('swal2-title'));


  async clickInputIdUsuario() {
    await this.inputIdUsuario.click();
  }
  async clickInputinputIdParque() {
    await this.inputIdParque.click();
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

  async clickOpcionIdParque() {
    await this.getOpcionIdParque().click();
  }

  getOpcionIdUsuario() {
    return this.seleccionUsuario.first();
  }

  getOpcionIdParque() {
    return this.seleccionParque.first();
  }

  async clickBotonGuardarProceso() {
    await this.botonCreaProceso.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }

}
