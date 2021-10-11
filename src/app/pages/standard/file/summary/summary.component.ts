import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  template: `
   <markdown src="assets/markdown/standard/files/summary.md"></markdown>
    `,
  styles: []
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
