import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch',
  template: `
    <markdown src="assets/markdown/standard/git/branch.md"></markdown>
  `,
})
export class BranchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
