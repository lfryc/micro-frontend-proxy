import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  template: `
    <h3><a href="http://localhost:4200">Angular</a></h3>
    <h3><a href="http://localhost:4201">Vue</a></h3>
    <h3><a href="http://localhost:4202">React</a></h3>
  `,
  styles: [`
      :host {
        grid-area: sidebar;
        background: #1c1733;
        color: #8f93d9;
      }
  
      a, a:active, a:visited {
        display: block;
        color: #8f93d9;
        text-decoration: none;
      }
  
      a:hover {
        color: white;
      }
    `],
  encapsulation: ViewEncapsulation.Native
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
