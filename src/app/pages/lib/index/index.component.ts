import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-index',
  template: `
    <markdown src="assets/markdown/lib.md"></markdown>
  `,
  styles: []
})
export class NodeIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
