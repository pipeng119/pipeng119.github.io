// 工具集
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolset',
  template: `
    <markdown src="assets/markdown/standard/toolset.md"></markdown>
  `,
  styles: [
  ]
})
export class ToolsetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
