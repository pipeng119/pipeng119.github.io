import { DataService } from './../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { CancelSubject } from '../basic';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent extends CancelSubject implements OnInit, OnDestroy {

  public test1$: Subject<any> = new Subject();

  public test2$: Subject<any> = new Subject();

  public data$: any;

  constructor(private dataService: DataService) {
    super();
  }

  ngOnInit(): void {
    // this.data$ = this.dataService.getData()
    this.dataService.serviceData$.subscribe(res => {
      console.log('first',res)
    })
    this.test1$.subscribe(res => console.log(res))
    this.test2$.subscribe(res => console.log(res))
    this.testReplaySubject();

    this.dataService.shareTest().subscribe(console.log)
  }

  testReplaySubject(): void {
    // const num$ = new ReplaySubject(5);

    // num$.next(9)
    // num$.next(5)
    // num$.next(2)
    // num$.next(7)

    // num$.subscribe(res => console.log(res))
    const num$ = new BehaviorSubject(3);

    num$.next(9)
    num$.next(5)
    num$.next(2)
    num$.next(7)

    num$.subscribe(num => {
      // console.log(num) // 2,7
    })
  }

  ngOnDestroy(): void {
    this.cancelStream(this.test1$, this.test2$);
  }

  myEmit(): void {
    this.test1$.next('test1');
    this.test2$.next('test2');
  }

  myDestroy() {
    this.cancelStream(this.test1$, this.test2$);
  }

}
