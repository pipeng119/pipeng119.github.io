## 风格规范
1. lint规范
2. 命名
   201.   实体命名使用有意义的英文单词，除前后缀和专有缩写名外，不能使用缩写;
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
   202.    class、interface、type、enum命名使用 PascalCase形式；
   203.    函数，方法，属性，变量，局部常量命名使用 camelCase形式;
   204.    全局常量命名使用ALL_CAPS形式；
      >原因: 风格统一，增强可读性

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
      205.    接口名使用前缀I，类型名使用前缀T
      >原因: 避免与类名成都，突出抽象含义
          
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
      206.    私有的、保护的属性和方法名加前缀_
      >原因: 避免与公有的属性和方法名冲突
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
          1.    传输数据类型后缀加DTO
          >原因: 标识传输数据，减少出错概率，增强可读性
          ```
          type TUserDTO = {
            id: number;
            name: string;
          }
          ```
     207. Promise和Observable类型的变量和属性名后加$
      >原因: 此类对象本身没有业务含义，避免占用业务实体名称;
      > 突出异步对象含义，减少被当成业务实体使用而导致的错误

3. 实体命名
   301. 一条声名语句只能声名1个变量
   >原因: 容易歧义，容易和解构赋值混淆

   ```
   
   // bad
   const age,name = '张三';

   // good
   const age: number;
   const name = '张三';
   ```

   302. 函数和方法定义时，需显示标明参数类型和返回值(包括void)
     
