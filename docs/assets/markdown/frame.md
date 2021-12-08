# Angular 与 四层架构模式
<table>
  <tr>
    <td colspan="6">
    <strong>Angular与四层架构模式</strong>
    </td>
  </tr>
  <tr>  
    <td colspan="3"><strong>四层架构</strong></td>
    <td colspan="3"><strong>Angular实现</strong></td>
  </tr>
  <tr>  
    <td>层级</td>
    <td>职责</td>
    <td>内容</td>
    <td>逻辑区域</td>
    <td>实例化区域</td>
    <td>活动区域</td>
  </tr>
  <tr>
    <td rowspan="5">表现层</td>
    <td rowspan="2">UI展现</td>
    <td>视图样式、拍板、布局</td>
    <td>CSS样式</td>
    <td rowspan="5">angular内部<br/>静态配置于NgModule和注解元数据</td>
    <td rowspan="5">angular内部</td>
  </tr>
  <tr>
    <td>视图内容模版</td>
    <td>HTML模版</td>
  </tr>
  <tr>
    <td rowspan="3">UI逻辑</td>
    <td>处理展示数据，更新视图内容</td>
    <td rowspan="2">Component</td>
  </tr>
  <tr>
    <td>响应用户操作</td>
  </tr>
  <tr>
    <td>控制视图路由，跳转</td>
    <td>Routing</td>
  </tr>

  <tr>
    <td>应用层</td>
    <td>用例逻辑</td>
    <td>用例编排</td>
    <td>Service(应用服务)</td>
    <td>依赖注入</td>
    <td>
      推荐在Component和其他应用服务活动
      <br/>
      禁止在其他区域活动
    </td>
  </tr>

  <tr>
    <td rowspan="2">领域层</td>
    <td rowspan="2">领域业务逻辑</td>
    <td>业务编排</td>
    <td>Service(应用服务)</td>
    <td>依赖注入</td>
    <td>
      推荐在应用服务和其他领域服务
      <br/>
      允许在Component区域活动
      <br/>
      禁止在其他区域活动
      <br/>
    </td>
  </tr>
  <tr>
    <td>业务模型</td>
    <td>Class(领域模型)</td>
    <td>
      推荐在应用服务和模型工厂实例化
      <br/>
      允许在领域服务和Component实例化
    </td>
    <td>
      推荐在应用服务,领域服务和其他业务模型活动
      <br/>
      推荐在Component只读(转为DTO)活动，允许可写活动
      <br/>
      禁止在其他区域进行写操作活动
    </td>
  </tr>

  <tr>
    <td rowspan="7">基础设施层</td>
    <td rowspan="4">数据持久化</td>
    <td>业务模型管理</td>
    <td>Service(仓库服务)</td>
    <td>依赖注入</td>
    <td>
      推荐在应用服务和领域服务，其他仓库服务活动
      <br/>
      允许在Component活动
      <br/>
      禁止其他区域活动
    </td>
  </tr>
  <tr>
    <td>模型实例化</td>
    <td>Class(模型工厂)</td>
    <td>
      推荐在仓库服务实例化
      <br/>
      允许在领域服务，应用服务和Component实例化
      <br/>
      禁止在其他区域实例化
    </td>
    <td>
      推荐在仓库服务活动
      <br/>
      允许在领域服务，应用服务和Component活动
      <br/>
      禁止在其他区域活动
    </td>
  </tr>
  <tr>
    <td>模型序列化</td>
    <td>Class(序列化器)</td>
    <td>
      推荐在仓库服务实例化
      <br/>
      允许在应用服务实例化
      <br/>
      禁止在其他区域实例化
    </td>
    <td>
      推荐在仓库服务活动
      <br/>
      允许在应用服务活动
      <br/>
      禁止在其他区域活动
    </td>
  </tr>
  <tr>
    <td>底层持久化</td>
    <td>Service(HttpClient等)</td>
    <td>依赖注入</td>
    <td>
      推荐在仓库服务活动
      <br/>
      允许在应用服务，领域服务，Component活动
      <br/>
      禁止在其他区域活动
    </td>
  </tr>

  <tr>
    <td>框架服务</td>
    <td>HttpClient，Router，ActivedRoute等等angular服务</td>
    <td>Service(angular服务)</td>
    <td>依赖注入</td>
    <td>推荐在其他非领域服务和Component活动</td>
  </tr>
  <tr>
    <td>其他服务</td>
    <td>log服务，第三方系统服务等等</td>
    <td>Service(其他服务)</td>
    <td>依赖注入</td>
    <td>其他服务和Component活动</td>
  </tr>
  <tr>
    <td>基础库</td>
    <td>数据结构，算法，基础API等等基础库</td>
    <td>基础库</td>
    <td>any</td>
    <td>any</td>
  </tr>
</table>
