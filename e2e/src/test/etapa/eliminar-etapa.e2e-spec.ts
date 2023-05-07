import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarEtapas } from "../../page/etapa/listar-etapas.po";

describe("Eliminar Etapa", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarEtapas: ListarEtapas;
  const ETAPA_ELIMINADO = "Etapa eliminado correctamente";
  const tiempo= 500;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarEtapas = new ListarEtapas();
  });

  it("Debe eliminar el Etapa", () => {
  //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonEtapas();
    browser.sleep(tiempo);

    //act
    listarEtapas.clickBotonEliminarEtapa();
    browser.sleep(tiempo);

    //assert
    //const alerta = "El etapa ha sido eliminado";
    const alerta = listarEtapas.getTextoSwal();

    expect(alerta).toEqual(ETAPA_ELIMINADO);
    browser.sleep(tiempo);
  });
});
