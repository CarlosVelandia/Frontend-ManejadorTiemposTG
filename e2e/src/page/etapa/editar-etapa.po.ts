import { by, element } from "protractor";

export class EditarEtapa {
  private inputNombre = element(by.id("nombreEtapa"));
  private inputCodigo = element(by.id("codigo"));
  private inputDireccion = element(by.id("direccion"));
  private inputTelefono = element(by.id("telefono"));
  private botonActualizarEtapa = element(by.id("actualizarEtapa"));
  private swal = element(by.className('swal2-title'));


  async clickInputNombre() {
    await this.inputNombre.click();
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

  async limpiarInputNombre() {
    await this.inputNombre.clear();
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

  async setInputNombre(nombreEtapa: string) {
    await this.inputNombre.sendKeys(nombreEtapa);
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

  async clickBotonActualizarEtapa() {
    await this.botonActualizarEtapa.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }



}
