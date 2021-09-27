import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CancelSubject } from '../basic';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent extends CancelSubject implements OnInit, OnDestroy {

  public test3$: Subject<any> = new Subject();

  public test4$: Subject<any> = new Subject();

  constructor() {
    super();
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.cancelStream(this.test3$)
  }

}
