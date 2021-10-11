import { DataService } from './../data.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CancelSubject } from '../basic';
import { pluck, share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent extends CancelSubject implements OnInit, OnDestroy {

  @Input() data: any;

  public test3$: Subject<any> = new Subject();

  public test4$: Subject<any> = new Subject();

  public routeEnd: any;
  constructor(private dataService: DataService) {
    super();
  }


  ngOnInit(): void {
    this.dataService.serviceData$.subscribe(res => {
      console.log('second', res)
    });

    this.shareTest();
  }

  ngOnDestroy(): void {
    this.cancelStream(this.test3$)
  }

  shareTest() {
    // 使用 subject 模拟 url 的变化
    this.routeEnd = new Subject<{ data: any, url: string }>();
    // 提取 url 并与后来订阅者共享
    const lastUrl = this.routeEnd.pipe(
      pluck('url'),
      shareReplay(1)
    );
    // 起始订阅者是必须的
    const initialSubscriber = lastUrl.subscribe(console.log);
    // 模拟路由变化
    this.routeEnd.next({ data: {}, url: 'my-path' });
    // 没有任何输出
    // const lateSubscriber = lastUrl.subscribe(console.log);
  }

  biu() {
    this.routeEnd.next({ data: {}, url: 'your-path' });
  }

}
