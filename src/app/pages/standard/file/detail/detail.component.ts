import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `<markdown src="assets/markdown/standard/files/detail.md"></markdown>`,
  styles: []
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
