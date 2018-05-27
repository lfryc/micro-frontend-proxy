import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CustomElementsModule)
  .catch(err => console.log(err));

import Vue from 'vue/dist/vue.esm';
import {CustomElementsModule} from '../src/app/custom-elements.module';

Vue.config.ignoredElements = [
  'shared-topbar',
  'shared-sidebar'
];

const app = new Vue({
  el: '#app',
  data: {},
  template: `
    <div class="container">
      <shared-topbar></shared-topbar>
      <shared-sidebar></shared-sidebar>
      <main>Vue.js micro-frontend</main>
    </div>
  `
});
