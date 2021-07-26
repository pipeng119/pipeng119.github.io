import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: '<markdown src="assets/markdown/overview.md"></markdown>'
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
