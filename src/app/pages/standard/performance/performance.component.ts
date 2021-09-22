import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  template: `
    <markdown src="assets/markdown/standard/performance.md"></markdown>
  `,
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
