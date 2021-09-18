import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  template: `
    <markdown src="assets/markdown/standard/code.md"></markdown>
  `,
  styles: [
    `
      :host ::ng-deep table{
        width: 100%;

        tr{
          display: flex;
        }

        th,td {
          flex: 1;
        }
      }
    `
  ]
})
export class CodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
