import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-frame',
  template: `
    <markdown src="assets/markdown/frame.md"></markdown>
  `,
  styles: [
    `
      :host ::ng-deep table{
        width: 100%;
      }

      :host ::ng-deep table tr:nth-child(1) td,
      :host ::ng-deep table tr:nth-child(2) td{
        background: #eee;
        text-align: center;
      }
      :host ::ng-deep td,:host ::ng-deep th{
        padding: 10px;
        border: 1px solid #000;
      }
    `
  ]
})
export class NgFrameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
