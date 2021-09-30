## 风格规范
1. lint规范
2. 命名
   201.   【推荐】实体命名使用有意义的英文单词，除前后缀和专有缩写名外，不能使用缩写;
    > 原因: 增强可读性，便于后续维护迭代
      ```
          // bad
          class Btn {
            ...
          }
            
          const btn: Btn; 
            
          ===========
          
          //good
          class Button {
          ...
          }
            
          const button: Button;
      ```
   202.    【必须】class、interface、type、enum命名使用 PascalCase形式；
   203.    【必须】函数，方法，属性，变量，局部常量命名使用 camelCase形式;
   204.    【必须】全局常量命名使用ALL_CAPS形式；
      > 原因: 风格统一，增强可读性

          ```
            // good
            class MyClass{

            }

            interface IMyInterface{

            }

            type TMyType = {

            }

            enum Direction {
              Up,
              Down,
              Left,
              Right
            }

            function testFn() {
              ...
            }

            const myArr: string[];
            export const MY_ARR: string[] = [];
          ```
      205.    【必须】接口名使用前缀I，类型名使用前缀T
      > 原因: 避免与类名成都，突出抽象含义
          
          ```
          // bad
          interface Student{
            ...
          }

          let student: Student

          // good
          interface IStudent{

          }

          let student: IStudent
          ```
      206.    【推荐】私有的、保护的属性和方法名加前缀_
      > 原因: 避免与公有的属性和方法名冲突
          ```

          // good
          class Student{
            protected _study(): string{}
          }

          class ChenseStudent extends Student{
            public study(){
              '三字经' + this._study();
            }
          }
          ```
      207.    【推荐】传输数据类型后缀加DTO
          > 原因: 标识传输数据，减少出错概率，增强可读性
          ```
          type TUserDTO = {
            id: number;
            name: string;
          }
          ```
     208. 【推荐】Promise和Observable类型的变量和属性名后加$
      > 原因: 此类对象本身没有业务含义，避免占用业务实体名称;
      > 突出异步对象含义，减少被当成业务实体使用而导致的错误

3. 实体定义
   301. 【必须】一条声名语句只能声名1个变量
   > 原因: 容易歧义，容易和解构赋值混淆

   ```
   
   // bad
   const age,name = '张三';

   // good
   const age: number;
   const name = '张三';
   ```

   302. 【必须】函数和方法定义时，需显示标明参数类型和返回值(包括void)
    > 原因: 风格统一，增强可读性
    > 使用多态的场景需要显示的指明类型

    ```
    
    // bad
    function str() { // 看完细节才知道返回值的类型
      return student
    }

    // good
    function str(): Student{
      return student
    }

    function str(): void{
      return student
    }

    ```

   304. 【必须】类成员需要显示的标明可访问性修饰符
    > 原因: ts默认成员为public，但其他语言可能不是，比如c#
    > 避免将所有成员都默认成public，破坏封装

    ```
    // bad
    class Student{
      name: string;
    }

    // good
    class Student{
      public name: string;
    }

    
    ```

4. 缩进
   401. 【必须】使用2个空格进行缩进
    > 原因: 风格统一，增强可读性
5. 代码行
   501. 【必须】每行一条语句，并用分号结束；
   502. 【必须】每行限制120个字符长度；
   503. 【必须】链式方法调用，第二个方法开始，每个方法独占一行并相对第一行缩进；
   > 原因: 风格统一，增强可读性

    ```
    // bad
    user.name = '张三';user.age = 18;
    user.toString().call();

    // good
    user.name = '张三';
    user.age = 18;
    user.toString()
      .call();

    ```

6. 代码块结构
   
     601.   【推荐】代码块内部不要定义类、接口、函数，但可以定义箭头函数

      ```
      // bad
      ···
      {
        class Student{
          
        }

        function sing(){}
      }
      ···

      // good
      class Student{
          
        }
      ···

        const sing = () => {}

        
      ···

      ```

      602.   【推荐】单个代码块考虑限制在 75 行之内，类结构可适当放宽

7. 类结构
   701.      【必须】 类内部分别从上到下分为静态属性区，静态方法区，实例属性区，construtor区，实例方法区;
   702.      【必须】同区需要按照public->protected->private进行排序
   703.      【推荐】属性及方法间空一行

    ```
    
    //bad
    class Study {
      public constructor(name: string) {
      ...
      }
      static public count(): number {
      ...
      }
      private _name: string;
      public id: number;
      public phone: string;
      public get name(): string {
      ...
      }
      public setPhone(phone: string) {
      ...
      }
      private onPhoneChange() {
      ...
      }
      
    }

    //good
    class Study {
      static public maxId: number;//静态属性区
      
      static public count(): number {//静态方法区
      ...
      }
      public id: number;//实例属性区
      
      public phone: string;
      
      private _name: string;
      
      public constructor() {//construtor区
      ...
      }
      
      public get name(): string {//getter/setter方法
      ...
      }
      
      public onChange() {//回调方法
      }
      
      public setPhone(phone: string) {//普通方法
      ...
      }
    }
    ```
8.   【推荐】单文件应限制在400行代码内

  