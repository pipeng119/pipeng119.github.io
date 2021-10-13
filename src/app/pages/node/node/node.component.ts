import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  template: `
    <markdown src="assets/markdown/node.md"></markdown>
  `,
  styles: []
})
export class NodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
