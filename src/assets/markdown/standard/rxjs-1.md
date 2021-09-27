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
  // 可以考虑写个基类，在基类中封装个销毁流的方法，但凡订阅的过流的组件都要在销毁的生命周期中销毁对应的流
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

2.    【必须】使用正确类型的Subject

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

4.    【推荐】页面中使用的数据，可以直接使用async管道
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
1.    【推荐】避免事件处理器未及时阻止事件传递(该规则请根据场景考虑是否采纳)
<table>
  <tr>
  <th>错误写法</th>
  <th>正确写法</th>
  </tr>
  <tr>
  <td>

  ```js
    //场景假设： 点击button只想触发button点击事件
    let button = document.querySelect('#button');
    button.addEventListener('click', function(e) {
      ...//click事件向上冒泡，导致上层元素触发click事件，非作者所期望
    }, false);
  ```
  </td>
  <td>

  ```js
    let button = document.querySelect('#button');
    button.addEventListener('click', function(e) {
      ...
      e.stopPropagation();//如果场景不想click事件向上冒泡，导致上层元素触发click事件
    }, false);
  ```

  </td>
  </tr>

</table>
1.    【必须】避免不再使用的事件处理器未进行清除

<table>
  <tr>
  <th>错误写法</th>
  <th>正确写法</th>
  </tr>
  <tr>
  <td>

  ```js
    class MyComponent {
      ...
      ngOnInit() {
        ...
        setInterval(() => {
          //比如发送log，定时提醒用户等等，销毁MyComponent没有清除该定时器，导致统计等不确定性错误
          doSomething();
        }, time);
        ...
      }
      ...
    }
  ```
  </td>
  <td>

  ```js
  class MyComponent {
    ...
    ngOnInit() {
      ...
      this.timer = setInterval(() => {
        doSomething();//比如发送log，定时提醒用户等等
      }, time);
      ...
    }
    ...
    ngOnDestroy() {
      clearInterval(this.timer);//销毁MyComponent清除该定时器
    }
    ...
  }
  ```

  </td>
  </tr>

</table>

1.    【必须】对象赋值导致其状态被意外修改

<table>
  <tr>
  <th>错误写法</th>
  <th>正确写法</th>
  </tr>
  <tr>
  <td>

  ```js
    const attrs = obj.getAttrs();
    doSomething(attrs);//如果attrs被修改了，可能导致obj的状态也被修改了，引发bug
  ```
  </td>
  <td>

  ```js
    const attrs = clonedeep(obj.getAttrs());//返回克隆版的attrs
    doSomething(attrs);
  ```

  </td>
  </tr>

</table>
1.    【必须】禁止不规范的使用三元表达式

<table>
  <tr>
  <th>错误写法</th>
  <th>正确写法</th>
  </tr>
  <tr>
  <td>

  ```js
    var k = a ? (b ? (c ? d : e) : (d ? e : f)) : f ? (g ? h : i) : j;
  ```
  </td>
  <td>

  ```js
    var k = a
      ? (b
          ? (c ? d : e)
          : (d ? e : f)
      )
      : f
          ? (g ? h : i)
          : j;
  
  ```

  </td>
  </tr>

</table>
1.    3
2.    4
3.    5
4.    6
5.    6
6.    78
7.    89
8.    



