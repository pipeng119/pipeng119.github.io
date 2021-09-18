## 编码规范

1. 代码准确性
   1001. 【必须】避免this的错误使用

    <table>
      <tr>
      <th>错误做法</th>
      <th>正确做法</th>
      </tr>
      <tr>
      <td>

      ```js
      class MyClass {
          handle() {
            setTimeout(function() {
                this.myMethod(); //this引用错误
            }, 1000);
          }
        }
      ```

      </td>
      <td>

      ```js
      class MyClass {
        handle() {
          setTimeout(() => {
              this.myMethod(); //this指向MyClass实例
          }, 1000);
        }
      }
      ```

      </td>
      </tr>
      
    </table>

   1002. 【必须】避免把数组的map方法当forEach用

    <table>
      <tr>
      <th>错误写法</th>
      <th>正确写法</th>
      </tr>
      <tr>
      <td>

      ```js
        const myArray = [....];
        myArray.map((item) => {
          doSomething(item);
        });
      ```
      </td>
      <td>

      ```js
        const myArray = [....];
        myArray.forEach((item) => {
          doSomething(item);
      });
      ```

      </td>
      </tr>

    </table>
   1003. 【必须】避免错误的异步回调处理流程

    <table>
      <tr>
      <th>错误写法</th>
      <th>正确写法</th>
      </tr>
      <tr>
      <td>

      ```js
        getData() {
          const xhr = new XMLHttpRequest();
          let res;
          ···
          xhr.onreadystatechange = () => {
            if(isOk(xhr.state) {
              res = xhr.response;
            }
          }
          /*该result为undefined*/
          return res;
        }

      ```
      </td>

      <td>

      ```js
      /*把异步回调promise化*/
      const http =(api) => {
        return  new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onreadystatechange = () => {
            if(isOk(xhr.state) {
              resolve(xhr.response);
            }
          }
        });
      };

      async getData() {
        let result = await http('/api');
        return result;
      }

      getData();
      ```

      </td>
      </tr>

    </table>

   1004. [必须]避免使用尚未初始化对象的属性或方法

    <table>
      <tr>
      <th>错误写法</th>
      <th>正确写法</th>
      </tr>
      <tr>
      <td>

      ```js

        let obj = fetchObject();
        obj.doSomething();/*obj可能为null*/

      
      ```
      </td>
      <td>

      ```js
        let obj = fetchObject();
        if(obj) {
          obj.doSomething();//或者其他的判断处理逻辑
        }
      ```

      </td>
      </tr>

    </table>
   1005. [推荐]避免事件处理器未及时阻止事件传递(该规则请根据场景考虑是否采纳)
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
   1006. [必须]避免不再使用的事件处理器未进行清除

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

   1007. [必须]对象赋值导致其状态被意外修改

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
   1008. [必须]禁止不规范的使用三元表达式

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
   1009. 3
   1010. 4
   1011. 5
   1012. 6
   1013. 6
   1014. 78
   1015. 89
   1016. 
    


2. 代码设计
   2001. [推荐]组件中只包含与视图相关的逻辑，其它逻辑(比如数据操作,数据交互)都放到服务

    <table>
      <tr>
      <th>不推荐写法</th>
      <th>推荐写法</th>
      </tr>
      <tr>
      <td>

      ```js
        class MyComponent {
          doSomething() {
            const data = this.http...;
            ....
            this.prop = process(data);
            .....
          }
        }

      ```
      </td>
      <td>

      ```js
        class SomeService {
          ...
        }
          
        class MyComponent {
          doSomething() {
            this.prop = this.someService.getProp();
          }
        }
      ```

      </td>
      </tr>

    </table>

   2002. [推荐]视图逻辑放进组件类中而不要放在模板

    <table>
      <tr>
      <th>不推荐写法</th>
      <th>推荐写法</th>
      </tr>
      <tr>
      <td>

      ```html
        <div>
          ...
          <span>年龄：</span> 
          <span>{birthdate.getFullYear() - (new Date()).getFullYear()}</span>
          ...
        </div>

      ```
      </td>
      <td>

      ```html
        <div>
          ...
          <span>年龄：</span> <span>{age}</span>
          ...
        </div>
      ```
      ```js  
        class MyComponent {
          get age() {
            return birthdate.getFullYear() - (new Date()).getFullYear();
          }
        }
      ```

      </td>
      </tr>

    </table>

   2003. [推荐]为数据建立模型类，把数据操作封装在模型类中

    <table>
      <tr>
      <th>不推荐写法</th>
      <th>推荐写法</th>
      </tr>
      <tr>
      <td>

      ```js
      // user为JSON格式，user = {
      //  "firstName": "myFirstName",
      //  "lastName": "myLastName",
      //  "birthDate": "2019-08-02 12:00:00"}
      class MyComponent {
        ...
        setUser() {
          ...
          const user = this.service.getUserData();
          this.userFullName = `${user.firstName} ${user.lastName}`;
          const userBirthDate = new Date(user.birtDate);
          this.userAge = userBirthdate.getFullYear() - (new Date()).getFullYear();
          ...
        }
        ...
      }

      ```
      </td>
      <td>
      
      ```js  
      class User {
        public get fullName (): string {
          return `${this.firstName} ${this.lastName}`;
        }
        public get age(): number {
          return this.birthdate.getFullYear() - (new Date()).getFullYear();
        }
        private firstName: string;
        private lastName: string;
        private birthDate: Date;
      }
        
      class MyComponent {
        ...
        setUser() {
          ...
          this.user = this.service.getUser();
          ...
        }
        ...
      }
      ```

      </td>
      </tr>

    </table>

   2004. 3
   2005. 4
   2006. 5
   2007. 6
   2008. 7
   2009. 8
   2010. 
