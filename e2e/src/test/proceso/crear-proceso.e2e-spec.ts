import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { CrearProceso } from "../../page/proceso/crear-proceso.po";
import { ListarProcesos } from "../../page/proceso/listar-procesos.po";

describe("Crear Proceso", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarProcesos: ListarProcesos;
  let crearProceso: CrearProceso;
  const FECHA_COMPRA = "03-25-2021";
  const PROCESO_CREADO = "Proceso creado correctamente";
  const FECHA_COMPRA_LUNES= "03-29-2021";
  const DIA_LUNES="Los Lunes no se pueden vender procesos por mantenimiento del etapa";


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearProceso = new CrearProceso();
    listarProcesos = new ListarProcesos();
  });

  it("Debe crear el Proceso", () => {
  //arrange
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonProcesos();
    browser.sleep(1000);
    listarProcesos.clickBotonCrearProceso();
    browser.sleep(1000);
    crearProceso.clickInputIdUsuario();
    crearProceso.clickOpcionIdUsuario();
    browser.sleep(1000);
    crearProceso.clickInputinputIdEtapa();
    crearProceso.clickOpcionIdEtapa();
    browser.sleep(1000);
    crearProceso.clickInputFechaCompra();
    crearProceso.setInputFechaCompra(FECHA_COMPRA);
    browser.sleep(1000);

    //act
    crearProceso.clickBotonGuardarProceso();

    //assert
    //const alerta = "Proceso creado correctamente";
    const alerta = crearProceso.getTextoSwal();

    expect(alerta).toEqual(PROCESO_CREADO);
    browser.sleep(1000);
  });

  it("Debe retornar un error el dia lunes", () => {
    //arrange
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonProcesos();
    browser.sleep(1000);
    listarProcesos.clickBotonCrearProceso();
    browser.sleep(1000);
    crearProceso.clickInputIdUsuario();
    crearProceso.clickOpcionIdUsuario();
    browser.sleep(1000);
    crearProceso.clickInputinputIdEtapa();
    crearProceso.clickOpcionIdEtapa();
    browser.sleep(1000);
    crearProceso.clickInputFechaCompra();
    crearProceso.setInputFechaCompra(FECHA_COMPRA_LUNES);
    browser.sleep(1000);

      //act
      crearProceso.clickBotonGuardarProceso();

      //assert
      //const alerta = "Los lunes no se venden procesos";
      const alerta = crearProceso.getTextoSwal();
      expect(alerta).toEqual(DIA_LUNES);
      browser.sleep(1000);
    });

});
