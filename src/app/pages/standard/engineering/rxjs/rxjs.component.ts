import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  template: `
   <markdown src="assets/markdown/standard/rxjs-1.md"></markdown>`,
  styles: [
    `
      :host ::ng-deep table{
        width: 100%;
        overflow: hidden;

        tr{
          display: flex;
        }

        th,td {
          flex: 1;
          text-align: left;
        }
      }
    `
  ]
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
