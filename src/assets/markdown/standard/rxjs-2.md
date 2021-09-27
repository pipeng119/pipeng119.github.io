#### Rxjs使用建议





1. 现场测试环境更新
2. 确费家里测试环境连通



---

- `Observable`建议与`async`管道和OnPush模式一同使用。不推荐在组件当中手动订阅`Observable`并将其中的值存储在组件成员当中。

  例如常见的写法：

  ```typescript
  // demo.component.ts
  
  export class DemoComponent implements OnInit{
      maleUsers:User[];
      
      ngOnInit(){
      	this.userService.getUsers().subscribe(users=>{
              this.maleUsers = users.filter(x=>x.gender === "male")
          });
      }
  }
  ```

  

  ```html
  // demo.component.html
  <user-table [user]="maleUsers"></user-table>
  ```

  

  建议改为：

  ```typescript
  export class DemoComponent implements OnInit{
      maleUsers$: Observable<User[]>;
      constructor(private readonly userService:UserService){
          this.maleUsers$ = userService.getUsers().pipe(
          	map(users=>users.filter(user => user.gender === "male"))
          );
      }
  }
  ```

  

  ```html
  <user-table [user]="maleUsers$ | async"
  ```

  async管道能够自动执行markForChangeDectection以及取消订阅的操作，在onPush模式下，可以得到媲美自动挡的手感。

  

- `Subject/Observable`不建议与`Promise`、`async/await`混用

  例如以下代码：

  ```typescript
    public renewToken() : Subject<User> {
      if (!this.isRenewing) {
        this.isRenewing = true;
        this.renewToken$ = new Subject<User>();
        this.authService.renewToken()
          .then((user: User) => {
            this.isRenewing = false;
            this.renewToken$.next(user);
            this.renewToken$.complete();
          })
          .catch((err) => {
            this.isRenewing = false;
            this.renewToken$.error(err);
          });
      }
      return this.renewToken$;
    }
  ```

  该代码的功能是得到一个`Observable`，并且保证同一时间只会执行一个`authService.renewToken()`操作。

  那么这段代码用纯rxjs写可以简化成这样

  ```typescript
  constructor(){
      this.renewToken$ = defer(()=>authService.renewToken()).pipe(share());
  }
  public renewToken(): Observable<User> {
      return this.renewToken$;
  }
  ```

  这段代码干了这些事

  1. 使用defer将一个promise包装为冷模式Observable

  2. 把这个冷的Observable通过share变成热的

  这样就可以保证同一时间只有一个renewToken在进行

RxJs都是一种基于**约定**的异步逻辑，在混用的时候只是语法上会比较混乱。

但是`async/await`是将Promise的异步逻辑转换为同步逻辑，如果和RxJs混用的话容易导致代码的逻辑混乱，不利于维护。



---

Angualr框架当中，Angualr团队使用了大量的RxJs。若是在项目当中能够恰当的使用RxJs，可以让代码和框架的融合程度更高，无论是维护成本还是开发成本都能得到妥善降低。

但是，RxJS由于是基于异步思维来设计的，而且还有着高阶Observable、各种Operation等等需要开发者在高维分析数据流，在学习上有着不少的成本。