## 性能规范

### 一、概述
性能是一个很大的主题。作为前端开发人员，前端性能清单是你在项目中应该检查或者至少需要注意的性能要点的详尽列表

### 性能测试工具
如下是可以用来测试或监控网站或者应用程序性能方面的工具
 1. Chrome扩展程序 [Checkbot](https://www.checkbot.io/)
 2. Chrome扩展程序 [Lighthouse](https://developers.google.com/web/tools/lighthouse/#devtools/)

### 二、清单

1. Fonts
2. Images
   201. 【必须】图像优化——在保证压缩后的图片符合产品要求的情况下，将图像进行优化 
   > 原因: 优化的图像在浏览器中加载速度更快，消耗的数据更少
   >> 原因: 尽可能尝试使用css3效果(而不是用小图像替代) 尽可能使用字体图片 使用SVG使用编译工具并指定85以下的级别压缩

   202. 【必须】图像格式——适当选择图像格式
   > 原因: 确保图片不会减慢网站速度
   >> 原因: 使用Lighthouse识别哪些图像可以使用下一代图片格式(jpeg 2000m jpeg xr webp).比较不同的格式。

   203.  【推荐】 使用矢量图像 VS 栅格/位图：可以的话，推荐使用矢量图像而不是位图图像
   > 原因: 矢量图像（SVG）往往比图像小，具有响应性和完美缩放功能。而且这些图像可以通过CSS进行动画和修改操作

3. HTML
   301.   【必须】尽量避免使用iframe的数量 
4. CSS
   401. 【必须】避免在使用嵌入或者内联css 
   > 原因: 因为将内容与设计分开是一种很好的做法。它还可以提高代码的可维护性并使站点可访问性更强。对于性能来说，它只是减少了HTML页面的文件大小和加载时间
5. 性能
   501. 【必须】 JS压缩：所有JavaScript文件都要被压缩，生产环境中删除注释、空格和空行（在HTTP/2仍然有效果）
   > 为何？删除所有不必要的空格、注释和空行将减少JavaScript文件的大小，并加快网站的页面加载时间，提升用户体验 
   >> 如何？使用工具，在构建或部署之前自动缩小文件
   502. 【必须】 非阻塞JS：使用defer属性或使用async来异步加载JavaScript文件
   > 为何？JavaScript阻止HTML文档的正常解析，因此当解析器到达script标记时（特别是在内），它会停止解析并且执行脚本。如果您的脚本位于页面顶部，则强烈建议添加async和defer，但如果在标记之前加载，没有太大影响。但是，使用这些属性来避免性能问题是一种很好的做法
   >> 如何？添加async（如果脚本不依赖于其他脚本）或defer（如果脚本依赖或依赖于异步脚本）作为script脚本标记的属性。 如果有小脚本，可以在异步脚本上方使用内联脚本
   参考: https://developers.google.com/speed/docs/insights/BlockingJS 

        https://varvy.com/pagespeed/defer-loading-javascript.html
   503.   【必须】 拆分包加载：通过分包加载，减少首次加载所需时间

    参考: 
      - Vendor splitting 根据库文件拆分模块，例如 React 或 lodash 单独打包成一个文件
      - Entry point splitting 根据入口拆分模块，例如通过多页应用入口或者单页应用路由进行拆分
      - Dynamic splitting 根据动态加载拆分模块，使用动态加载语法 import() ，实现模块按需加载
  
   504. 【必须】 使用 tree shaking减少JS大小：通过构建工具分析 JavaScript 代码并移除生产环境中用不到的 js 模块或方法  

    参考: 
      -  https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/

   505. 【推荐】 JS分析：检查Javascript文件中的性问题
    > 为何？Javascript复杂性可能会降低运行时性能，识别这些可能的问题对于提供流畅的用户体验来说至关重要
    > 如何？使用Chrome开发者工具中的时间轴工具来评估脚本事件，并找到性能问题事件 

     参考: 
      - [Speed Up JavaScript Execution  |  Tools for Web Developers  |  Google Developers](https://developer.chrome.com/docs/devtools/evaluate-performance/) 
      - [JavaScript Profiling With The Chrome Developer Tools — Smashing Magazine](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)
      - [How to Record Heap Snapshots  |  Tools for Web Developers  |  Google Developers](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/)
      - [Chapter 22 - Profiling the Frontend - Blackfire](https://blackfire.io/docs/php/training-resources/book/21-frontend-profiling)
