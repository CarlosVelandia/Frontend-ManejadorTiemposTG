import { NavbarPage } from "../../page/navbar/navbar.po";

import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarEtapas } from "../../page/etapa/listar-etapas.po";

describe("Listar etapas", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarEtapas: ListarEtapas;
  const tiempo= 500;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarEtapas = new ListarEtapas();

  });

  it("Deberia listar etapas", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    //act
    navBar.clickBotonEtapas();
    browser.sleep(tiempo);
    //assert
    expect(2).toBe(listarEtapas.contarEtapas());
    browser.sleep(tiempo);
  });
});
