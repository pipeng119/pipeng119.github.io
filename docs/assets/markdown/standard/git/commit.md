# Commit 规范

## 一、 前言
  git每次提交代码，都要写Commit Message(提交说明),否则就不允许提交。但是，一般来说，commit message应该清晰明了，说明本次提交的目的。

  现阶段，自由发挥状态下的message可以说是风格迥异的，而通过标准格式的约束，message更加容易分析

## 二、 Git commit message 规范化的意义

  - 可读性高，不必深入看代码即可了解当前commit的作用。
  - 为 Code Reviewing做准备
  - 方便跟踪工程历史
  - 让其他的开发者在运行 git blame 的时候想跪谢
  - 可以直接生成 CHANGELOG
  - 提高项目的整体质量，提高个人工程素质

## 三、 Git commit message 规范

每次提交，Commit message 都包括三个部分: header（必须）、body（可选）、footer（可选）

```
基本示例
feat: refe #8 完成导航菜单
fix: remove broken link from docs
fix: log error when file loading or preprocessing fails
```

<br>

<table>
  <tr>
    <th>type</th>
    <th>scope</th>
    <th>subject</th>
  </tr>
  <tr>
    <td>feat: 新功能(feature) </td>
    <td>service: service range，常见场景: 修改了API名称或参数 </td>
    <td>简短描述，不超过50个字符。以动词开头，使用第一人称现在时，比如change，而不是changed或changes,第一个字母小写,结尾不加句号（.）</td>
  </tr>
  <tr>
    <td>fix:修补bug（推荐：带上 bug 号</td>
    <td>repository:repository range，常见场景: 修改数据 序列化或反序列化 </td>
    <td></td>
  </tr>
  <tr>
    <td>style:格式（不影响代码运行的变动）</td>
    <td>model:model range，常见场景: 业务变更或业务bug </td>
    <td></td>
  </tr>
  <tr>
    <td>refactor:重构（即不是新增功能，也不是修改bug的代码变动）</td>
    <td>view:view or viewModel range，常见场景: 页面UI元素变更</td>
    <td></td>
  </tr>
  </tr>
  <tr>
    <td>test:测试相关代码变动</td>
    <td>shareModule: shared module range</td>
    <td></td>
  </tr>
  <tr>
    <td>chore:构建过程或辅助工具的变动</td>
    <td>coreModule:  base module range</td>
    <td></td>
  </tr>
  <tr>
    <td>docs:    文档（documentation）</td>
    <td>*: global range</td>
    <td></td>
  </tr>
  <tr>
    <td>build:    构建过程属于外部依赖部分的修改，如CI </td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>revert:   撤销某次提交</td>
    <td></td>
    <td></td>
  </tr>
</table>

## 四、 参考

1. git commit 规范
   -  https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
2. git commit 工具
   - https://www.npmjs.com/package/commitizen 
