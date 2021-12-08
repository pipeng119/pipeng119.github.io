import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: '<markdown src="assets/markdown/overview.md"></markdown>',
  styles: [
    `
      :host ::ng-deep {

        table{
          width: 100%;
        }

        td,th{
          padding: 10px;
          border: 1px solid #000;
        }
      }
    `
  ]
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
