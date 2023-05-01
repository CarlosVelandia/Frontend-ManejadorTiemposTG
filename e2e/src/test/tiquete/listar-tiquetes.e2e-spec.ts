import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarParques } from "../../page/parque/listar-parques.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";

describe("Listar procesos", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarParques: ListarParques;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarParques = new ListarParques();
  });

  it("Deberia listar procesos", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonProcesos();
    browser.sleep(300);
    //assert
    expect(0).toBe(listarParques.contarParques());
    browser.sleep(500);
  });
});
