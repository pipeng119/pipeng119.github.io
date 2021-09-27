import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release',
  template: `<markdown src="assets/markdown/standard/git/release.md"></markdown>`,
})
export class ReleaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
