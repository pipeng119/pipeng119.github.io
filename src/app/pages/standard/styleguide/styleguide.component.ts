import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleguide',
  template: `
    <markdown src="assets/markdown/standard/styleGuide.md"></markdown>
  `
})
export class StyleguideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
