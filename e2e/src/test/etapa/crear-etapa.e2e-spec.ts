import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { CrearEtapa } from "../../page/etapa/crear-etapa.po";
import { ListarEtapas } from "../../page/etapa/listar-etapas.po";

describe("Crear Etapa", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarEtapas: ListarEtapas;
  let crearEtapa: CrearEtapa;
  const NOMBRE = "test etapa";
  const CODIGO = "987654";
  const DIRECCION = "Calle 1 # 2-3";
  const TELEFONO = "456789";
  const ETAPA_CREADO = "Etapa creado correctamente";
  const ETAPA_YA_EXISTE = "El nombre del etapa ya existe en el sistema";
  const tiempo= 500;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearEtapa = new CrearEtapa();
    listarEtapas = new ListarEtapas();
  });

  it("Debe crear el Etapa", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonEtapas();
    browser.sleep(tiempo);
    listarEtapas.clickBotonCrearEtapa();
    browser.sleep(tiempo);
    crearEtapa.clickInputNombreEtapa();
    crearEtapa.setInputNombreEtapa(NOMBRE);
    browser.sleep(tiempo);
    crearEtapa.clickInputCodigo();
    crearEtapa.setInputCodigo(CODIGO);
    browser.sleep(tiempo);
    crearEtapa.clickInputDireccion();
    crearEtapa.setInputDireccion(DIRECCION);
    browser.sleep(tiempo);
    crearEtapa.clickInputTelefono();
    crearEtapa.setInputTelefono(TELEFONO);
    browser.sleep(tiempo);

    //act
    crearEtapa.clickBotonGuardarEtapa();

    //assert
    //const alerta = "El etapa ha sido creado";
    const alerta = crearEtapa.getTextoSwal();

    expect(alerta).toEqual(ETAPA_CREADO);
    browser.sleep(tiempo);
  });

  it("Debe retornar un error que etapa ya existe ", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonEtapas();
    browser.sleep(tiempo);
    listarEtapas.clickBotonCrearEtapa();
    browser.sleep(tiempo);
    crearEtapa.clickInputNombreEtapa();
    crearEtapa.setInputNombreEtapa(NOMBRE);
    browser.sleep(tiempo);
    crearEtapa.clickInputCodigo();
    crearEtapa.setInputCodigo(CODIGO);
    browser.sleep(tiempo);
    crearEtapa.clickInputDireccion();
    crearEtapa.setInputDireccion(DIRECCION);
    browser.sleep(tiempo);
    crearEtapa.clickInputTelefono();
    crearEtapa.setInputTelefono(TELEFONO);
    browser.sleep(tiempo);

    //act
    crearEtapa.clickBotonGuardarEtapa();

    //assert
    //const alerta = "El etapa ya existe en el sistema";
    const alerta = crearEtapa.getTextoSwal();

    expect(alerta).toEqual(ETAPA_YA_EXISTE);
    browser.sleep(tiempo);
  });
});
