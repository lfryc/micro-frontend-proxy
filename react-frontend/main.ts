import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {CustomElementsModule} from '../src/app/custom-elements.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CustomElementsModule)
  .catch(err => console.log(err));


const sidebar = React.createElement('shared-sidebar');
const topbar = React.createElement('shared-topbar');
const main = React.createElement('main', [], ['React micro-frontend']);

ReactDOM.render(
  [topbar, sidebar, main],
  document.getElementById('app')
);
