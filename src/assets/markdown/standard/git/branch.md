# 分支策略

### 目前项目开发使用git flow开发流程,结合gitlab的 Merge Request 的code review 

### Git-flow分支介绍

### master

【线上的分支】 - 是线上版本分支，也可以理解为随时可以发布的稳定版本，要求在每次版本封版后由主程序员合并release分支代码进来，开发人员不可以随意操作或者每次hotfix之后进行合并。该分支被保护，所有合并必须通过github的pr功能 经过codereivew和质量门控制之后进行合并。

### dev/develop

【开发集成分支】 - 包含待上线的新内容，是所有开发团队合并新功能的分支，那些功能都是经过独立测试的，只是未集成到统一进行测试。该分支也汇集所有已经完成的功能，并等待经过release分支测试通过后最终被整合到 master 分支中

### release

【上线分支】 - 当开发结束后用来提测并且为本次版本最终上线的分支，所有集成测试阶段的bug全部在此分支修复，测试结束后合并到 master 和 dev分支中。在该分支上不要再开发新功能

当准备将develop上的新内容发布到生产环境时，需要拉release分支。release分支可以隔离dev后续对本次上线的影响。当release拉出来后，不用担心其它的东西会合过来，只需要在这上面专注测试和修复bug。

### feature

【新功能开发分支】 - 开发新功能时以团队的dev分支为基础建立新的feature分支进行单独开发。当需要此功能的时候，只需要将该 feature 分支合并入 dev 分支，下次一并提测即可。

这样设计可以避免这个功能在尚未开发完成或者通过测试的时候混入发布的版本，而导致不可预知的不稳定。当然也可以同时开启多个 feature 分支进行不同新功能开发，在合适的时候合并提测即可。

### hotfix

【线上紧急bug分支】 - 用来修复线上的紧急bug，应由 master 拉出，并在修复完成后合并入 master 和 dev保证两分支的bug已修复。


### 常见的场景和操作规范

### 开发新功能

  1. 从dev拉一个feature分支——feat/1***(需求编号号)
  2. 在feature分支上做开发
  3. feature开发完成后，需要提交测试
     - 该feature的功能并不复杂，测试点不多，自测充分后可以直接完成feature
     - feature功能非常复杂，测试点也很多。这个时候不要马上完成feature，前期让QA直接在feature分支上测试，等测得比较稳定后再完成feature。因为功能复杂的feature，自测完成后肯定还是有很多问题，过早合到dev，dev将有很长一段时间不能上线，会影响到其它的发布。
  4. 完成feature将feature分支合并到dev，删除原分支。

### 上线
  - 团队dev会不断累积新内容等待上线，团队dev每完成一个功能可以合并到dev
  - 上线时，准备一个release分支，准备release分支时需要搞清楚这次上线新增的内容，列给QA，让QA有针对性的测试
  - 在打包机器上打包对应的release分支，部署到yingy7ong服务器让QA测试，发现bug直接在release上修改
  - release测试通过后，可以上线，将release合并到dev
  - 合并到master通过gitlab的Merge Request功能提交申请，通过合并后，删除该release分支
  - 线上部署的时候，从master打一个包，先部署到预发或者生产测试环境，在预发上简单的回归测试，没问题后发布到线上服务器，上线完成

### 紧急修复
  - 对于一些需要马上修改并尽快上线的内容，走`hotfix`分支
  - 从最新的master拉hotfix分支并在hotfix分支上修改
  - 在打包机器上打包对应的hotfix分支，部署到应用服务器给 QA 测试，发现bug直接在hotfix分支上修改
  - hotfix测试通过后，可以上线了，则将hotfix合并dev
  - 合并到master通过 Merge Request 提交申请 ，通过合并后 删除该hotfix原分支，master 分支打上 TAG

### 注意事项
  - 每一个流程完成后一定要记得合代码和推代码，不然会坑到后面的人
  - 及时在群里同步信息
  - release分支最好一天不超过一个，如果需要上线多次，可以合并到一起
  - 拉分支前记得pull新代码，pull 操作使用 git pull --rebase
  - <font color=red >禁止使用git push -f 提交代码</font>
  - 当我们想要对上一次的提交进行修改时，代码没有push 远程之前，我们可以使用git commit –amend命令
  - 如果出现某个bug 你在dev修复了，但是又想在master上修复 ，可以使用git cherry-pick 提取commit

### git交互式学习教程

  https://learngitbranching.js.org/?demo=&locale=zh_CN


