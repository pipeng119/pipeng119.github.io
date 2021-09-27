import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  template: `
    <markdown src="assets/markdown/standard/git/overview.md"></markdown>
  `,
})
export class GitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
