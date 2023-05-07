import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarEtapas } from "../../page/etapa/listar-etapas.po";
import { EditarEtapa } from "../../page/etapa/editar-etapa.po";

describe("Editar Etapa", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarEtapas: ListarEtapas;
  let editarEtapa: EditarEtapa;
  const NOMBRE = "test etapa";
  const CODIGO = "78901";
  const DIRECCION = "Calle 95 # 45b - 32";
  const TELEFONO = "2365544";
  const ETAPA_EDITADO = "Etapa actualizado correctamente";
  const ETAPA_YA_EXISTE = "El codigo del etapa ya existe en el sistema";
  const NOMBRE_ACTUALIZAR = "Segundo Etapa";
  const CODIGO_ACTUALIZAR = "2456";
  const DIRECCION_ACTUALIZAR = "Carrera 12A # 22 - 14";
  const TELEFONO_ACTUALIZAR = "2278956";
  const tiempo= 500;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarEtapa = new EditarEtapa();
    listarEtapas = new ListarEtapas();
  });

  it("Debe editar el Etapa", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonEtapas();
    browser.sleep(tiempo);
    listarEtapas.clickBotonEditarEtapa();
    browser.sleep(tiempo);
    editarEtapa.clickInputNombre();
    editarEtapa.limpiarInputNombre();
    editarEtapa.setInputNombre(NOMBRE);
    browser.sleep(tiempo);
    editarEtapa.clickInputCodigo();
    editarEtapa.limpiarInputCodigo();
    editarEtapa.setInputCodigo(CODIGO);
    browser.sleep(tiempo);
    editarEtapa.clickInputDireccion();
    editarEtapa.limpiarInputDireccion();
    editarEtapa.setInputDireccion(DIRECCION);
    browser.sleep(tiempo);
    editarEtapa.clickInputTelefono();
    editarEtapa.limpiarInputTelefono();
    editarEtapa.setInputTelefono(TELEFONO);
    browser.sleep(tiempo);

    //act
    editarEtapa.clickBotonActualizarEtapa();

    //assert
    //const alerta = "El etapa ha sido editado";
    const alerta = editarEtapa.getTextoSwal();

    expect(alerta).toEqual(ETAPA_EDITADO);
    browser.sleep(tiempo);
  });

  it("Debe retornar un error que etapa ya existe ", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonEtapas();
    browser.sleep(tiempo);
    listarEtapas.clickBotonEditarEtapa();
    browser.sleep(tiempo);
    editarEtapa.clickInputNombre();
    editarEtapa.limpiarInputNombre();
    editarEtapa.setInputNombre(NOMBRE_ACTUALIZAR);
    browser.sleep(tiempo);
    editarEtapa.clickInputCodigo();
    editarEtapa.limpiarInputCodigo();
    editarEtapa.setInputCodigo(CODIGO_ACTUALIZAR);
    browser.sleep(tiempo);
    editarEtapa.clickInputDireccion();
    editarEtapa.limpiarInputDireccion();
    editarEtapa.setInputDireccion(DIRECCION_ACTUALIZAR);
    browser.sleep(tiempo);
    editarEtapa.clickInputTelefono();
    editarEtapa.limpiarInputTelefono();
    editarEtapa.setInputTelefono(TELEFONO_ACTUALIZAR);
    browser.sleep(tiempo);

    //act
    editarEtapa.clickBotonActualizarEtapa();

    //assert
    //const alerta = "El etapa ya existe en el sistema";
    const alerta = editarEtapa.getTextoSwal();

    expect(alerta).toEqual(ETAPA_YA_EXISTE);
    browser.sleep(tiempo);
  });
});
