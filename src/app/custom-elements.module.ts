import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {SidebarComponent} from './sidebar/sidebar.component';
import {TopbarComponent} from './topbar/topbar.component';
import {SharedModule} from './shared.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  entryComponents: [
    SidebarComponent,
    TopbarComponent,
  ]
})
export class CustomElementsModule {

  constructor(injector: Injector) {
    customElements.define('shared-sidebar', createCustomElement(SidebarComponent, { injector }) as any);
    customElements.define('shared-topbar', createCustomElement(TopbarComponent, { injector }) as any);
  }

  ngDoBootstrap() {
  }
}
