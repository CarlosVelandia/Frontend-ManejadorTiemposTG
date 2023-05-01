import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarProcesos } from "../../page/proceso/listar-procesos.po";

describe("Eliminar Proceso", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarProcesos: ListarProcesos;
  const PROCESO_ELIMINADO = "Proceso eliminado correctamente";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarProcesos = new ListarProcesos();
  });

  it("Debe eliminar el Proceso", () => {
  //arrange
    page.navigateTo();
    browser.sleep(500);
    navBar.clickBotonProcesos();
    browser.sleep(500);

    //act
    listarProcesos.clickBotonEliminarProceso();
    browser.sleep(500);

    //assert
    //const alerta = "El proceso ha sido eliminado";
    const alerta = listarProcesos.getTextoSwal();
    expect(alerta).toEqual(PROCESO_ELIMINADO);
    browser.sleep(500);
  });
});
