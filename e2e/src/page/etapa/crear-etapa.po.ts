import { by, element } from "protractor";

export class CrearEtapa {
  private inputNombreEtapa = element(by.id("nombreEtapa"));
  private inputCodigo = element(by.id("codigo"));
  private inputDireccion = element(by.id("direccion"));
  private inputTelefono = element(by.id("telefono"));
  private botonCreaEtapa = element(by.id("guardarEtapa"));
  private swal = element(by.className('swal2-title'));


  async clickInputNombreEtapa() {
    await this.inputNombreEtapa.click();
  }
  async clickInputCodigo() {
    await this.inputCodigo.click();
  }

  async clickInputDireccion() {
    await this.inputDireccion.click();
  }
  async clickInputTelefono() {
    await this.inputTelefono.click();
  }

  async limpiarInputNombreEtapa() {
    await this.inputNombreEtapa.clear();
  }

  async limpiarInputCodigo() {
    await this.inputCodigo.clear();
  }

  async limpiarInputDireccion() {
    await this.inputDireccion.clear();
  }

  async limpiarInputTelefono() {
    await this.inputTelefono.clear();
  }

  async setInputNombreEtapa(nombreEtapa: string) {
    await this.inputNombreEtapa.sendKeys(nombreEtapa);
  }

  async setInputCodigo(codigo: string) {
    await this.inputCodigo.sendKeys(codigo);
  }

  async setInputDireccion(direccion: string) {
    await this.inputDireccion.sendKeys(direccion);
  }

  async setInputTelefono(telefono: string) {
    await this.inputTelefono.sendKeys(telefono);
  }

  async clickBotonGuardarEtapa() {
    await this.botonCreaEtapa.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }



}
