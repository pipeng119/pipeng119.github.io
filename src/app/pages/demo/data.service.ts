import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pluck, shareReplay } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public serviceData$;
  public routeEnd: any;
  constructor(private http: HttpClient) {

    this.serviceData$ = this.getData();
  }

  public getData() {
    // return this.http.get('assets/mock/data.json')
    return this.http.get('assets/mock/data.json')
      .pipe(shareReplay(1))
  }

  shareTest(): Observable<any> {
    // 使用 subject 模拟 url 的变化
    this.routeEnd = new Subject<{ data: any, url: string }>();
    // 提取 url 并与后来订阅者共享
    const lastUrl = this.routeEnd.pipe(
      pluck('url'),
      shareReplay(1)
    );
    return lastUrl
    // // 起始订阅者是必须的
    // const initialSubscriber = lastUrl.subscribe(console.log);
    // // 模拟路由变化
    // this.routeEnd.next({ data: {}, url: 'my-path' });
    // 没有任何输出
    // const lateSubscriber = lastUrl.subscribe(console.log);
  }
}
