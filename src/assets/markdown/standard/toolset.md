## 一、静态编码自动检查工具 
- 名称：xxxx-lint
- 功能简介: 包括项目ts代码规范化检查，自动修复可修复的编码问题
- 使用说明
  
  1. 安装 `npm i xxxx-lint`
  2. 修改`tslint.json`文件,全选替换为

  ```
    {
      "extends": "xxxx-lint",
      rules: {}
    }
  ```
  3. 执行检查 `npx xxxx-lint`
  4. 自动修复 `npx xxxx-lint-fix`
  
## 二、前端`bug`导出分析工具
...
