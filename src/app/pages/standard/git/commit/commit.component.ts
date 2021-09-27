import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit',
  template:`
    <markdown src="assets/markdown/standard/git/commit.md"></markdown>
  `,
  styles: [
    `
      :host ::ng-deep td,:host ::ng-deep th{
        padding: 10px;
        border: 1px solid #000;
      }
    `
  ]
})
export class CommitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
