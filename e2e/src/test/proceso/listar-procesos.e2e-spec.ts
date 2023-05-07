import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarEtapas } from "../../page/etapa/listar-etapas.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";

describe("Listar procesos", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarEtapas: ListarEtapas;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarEtapas = new ListarEtapas();
  });

  it("Deberia listar procesos", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonProcesos();
    browser.sleep(300);
    //assert
    expect(0).toBe(listarEtapas.contarEtapas());
    browser.sleep(500);
  });
});
