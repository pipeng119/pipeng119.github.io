## rxjs规范01

1. 【必须】组件销毁时取消订阅

    <table>
      <tr>
      <th>bad</th>
      <th>good</th>
      </tr>
      <tr>
      <td>

      ```js
      @Component()
      export class DemoComponent implements AfterViewInit{
        @ViewChild('target') target: ElementRef;
        ngAfterViewInit(): void{
          fromEvent(this.target.nativeElement,'scoll')
            .pipe(debounceTime(50))
            .subscribe(() => this.handleScroll())
        }
      }
      ```

      </td>
      <td>

      ```js
      // 可以考虑写个基类，在基类中封装个销毁流的方法，
      // 但凡订阅的过流的组件都要在销毁的生命周期中销毁对应的流
      // 且如果有shareReplay的话，takeUntil需要在shareReplay前
      @Component()
      export class DemoComponent implements AfterViewInit,OnDestroy{
        @ViewChild('target') target: ElementRef;

        private destroy$ = new Subject();

        ngAfterViewInit(): void{
          fromEvent(this.target.nativeElement,'scroll')
            .pipe(
              debounceTime(50),
              takeUntil(this.destroy$)
            )
            .subscribe(() => this.handleScroll())

        }

        ngOnDestroy(): void{
          this.destroy$.next();
          this.destroy$.complete();
        }
      }
      ```

      </td>
      </tr>
      
    </table>

2.  【必须】使用正确类型的Subject

    <table>
      <tr>
      <td>

      ```js
      // 一般情况: Subject
      const num$ = new Subject();
      num$.subscribe(num => 
        console.log(num)  // 9,5,2,7
      )

      num$.next(9)
      num$.next(5)
      num$.next(2)
      num$.next(7)
      ```
      </td>
      <td>

      ```js
        // 订阅晚于数据，但是需要历史数据，多个: ReplaySubject
        const num$ = new ReplaySubject(2);
        num$.next(9)
        num$.next(5)
        num$.next(2)
        num$.next(7)

        num$.subscribe( num => {
          console.log(num) // 2,7
        })

      ```

      </td>
      <td>

      ```js
        // 订阅晚于数据，且只需要最新的一条数据： BehaviorSubject 
        const num$ = new BehaviorSubject(0);
        num$.next(9)
        num$.next(5)
        num$.next(2)
        num$.next(7)

        num$.subscribe( num => {
          console.log(num) // 7
        })

      ```

      </td>
      </tr>

    </table>

3. 【必须】避免`subscribe`的嵌套
   > 原因: 降低复杂度，提高可读性
   
   > 知识点 switchMap concatMap mergeMap 

    <table>
      <tr>
      <th>bad</th>
      <th>good</th>
      </tr>
      <tr>
      <td>

      ```js
        getData()
          .subscribe( id => {
            getInfo(id)
              .subscribe(info => {
                // do something
              })
          })

      ```
      </td>

      <td>

      ```js
        getData()
          .pipe(
            switchMap(id => getInfo(id))
          )
          .subscribe(info => {
            // do something
          })
      ```

      </td>
      </tr>

    </table>

4. 【推荐】页面中使用的数据，可以直接使用async管道
      > 原因: 在OnPush策略下，不需要手动刷新；自动取消订阅，不用销毁    

    <table>
      <tr>
      <th>bad</th>
      <th>good</th>
      </tr>
      <tr>
      <td>

      ```js

        // bad
        @Component({
          //...
          changeDetection: ChangeDetectionStrategy.OnPush
        })
        export class DemoComponent implements OnInit, OnDestroy {
            //...
            public count: number;
            private _subscription: Subscription;
          
            constructor(private _cdr: ChangeDetectorRef) {}
        
            public ngOnInit(): void {
                this._subscription = interval(1000)
                    .subscribe(num => {
                        this.count = num;
                        this._cdr.markForCheck();
                    });
            }
            public ngOnDestroy(): void {
                this._subscription.unsubscribe();
            }
        }
      
      ```
      ```html
        <div>{{ count }}</div>
      ```

      ```html
        <!-- 防止多次订阅 -->
        <ng-container *ngIf="{data: data$ | async } as dataWrapper">
          <one [data]="dataWrapper.data?.one"></one>
          <one-void *ngIf="!dataWrapper.data?.one"></one-void>
          <two [data]="dataWrapper.data?.two"></two>
        </ng-container>
      ```
      </td>
      <td>

      ```js
        // good
        @Component({
          //...
          changeDetection: ChangeDetectionStrategy.OnPush
        })
        export class DemoComponent implements OnInit, OnDestroy {
            //...
            public count$: Observable<number>;
            public ngOnInit(): void {
                this.count$ = interval(1000);
            }
        
        }
      ```

      ```html
      <div>{{ count$ | async }}</div>
      ```

      ```html
      <!-- data$:Observable<any[]> -->
        <ng-container 
          [ngTemplateOutlet]="dataTpl" 
          [ngTemplateOutletContext]="{info: data$ | async}"
        >
        </ng-container>
        <ng-template #dataTpl let-person="info">
          <div *ngFor="let item of person">
            {{item.name}}
          </div>
        </ng-template>

      ```
      </td>
      </tr>
    </table>

5. 【推荐】重复数据避免多次请求
  - 注意：数据不会发生改变的接口才适用。 
<table>
  <tr>
  <th>不推荐写法</th>
  <th>推荐写法</th>
  </tr>
  <tr>
  <td>

  ```js
    // bad
    class DemoService {
      getData() {
        return this.http.get('');
      }
    }
      
    class DemoComponentA {
      constructor(private service: DemoService) {
        this.service.getData()
          .subscribe()
      }
    }
      
    class DemoComponentB {
      constructor(private service: DemoService) {
        this.service.getData()
          .subscribe()
      }
    }
  ```
  </td>
  <td>

  ```js
    // good
    class DemoService {
      data$;
      constructor() {
        this.data$ = this.getData();
      }
      getData() {
        return this.http.get('')
          .pipe(shareReplay(1));
      }
    }
    
    
    class DemoComponentA {
      constructor(private service: DemoService) {
        this.service.data$
          .subscribe()
      }
    }
    
    
    class DemoComponentB {
      constructor(private service: DemoService) {
        this.service.data$
          .subscribe()
      }
    }
  ```

  </td>
  </tr>

</table>
