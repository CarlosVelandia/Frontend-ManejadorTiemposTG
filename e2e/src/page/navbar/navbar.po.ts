import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkUsuarios = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkEtapas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkProcesos = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));


      async clickBotonUsuarios() {
        await this.linkUsuarios.click();
    }
      async clickBotonEtapas() {
        await this.linkEtapas.click();
    }
    async clickBotonProcesos() {
      await this.linkProcesos.click();
    }
}
