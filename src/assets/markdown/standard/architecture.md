## 二、规范说明
  1.  约定 
     
       - 每个目录都必须有index.ts
       - 架构图中出现的问号(?)代表在较少文件的情况下，可以摒弃文件夹的组织方式
       - Repository与Serialize文件
          > Repository何时使用：
          - 存在 API 重复调用的问题
          - service 聚合多个API的问题
          - 调用划分不清晰

          > Service+Repository怎么使用:
          - service作为业务的缓冲层，在repository里与数据源如 API 沟通，存取更新数据完成持久化
          - repository里 数据原始数据经过normalize变成期望数据，期望的数据经过deserialize变成实体模型
          - 建议数据的Normalize操作和Serialize操作都在Repository里完成，如果Serialize过程复杂度较高，建议新建Serialize文件处理\


<table>
  <tr>
    <th>名词</th>
    <th>释义</th>
    <th>示例</th>
    <th>备注</th>
  </tr>
  <tr>
    <td>Repository</td>
    <td>处理数据源，例如HTTP API,LocalStorage,IndexDB等</td>
    <td>http.get('api/xxx')</td>
    <td></td>
  </tr>
  <tr>
    <td>Normalize</td>
    <td>数据的标准化或者格式化操作</td>
     <td>
      API返回结果
      <code>user: {id: 1, displayName: 'xxx', birthday: '2009-12-10'}`</code>,
      <br/>
      标准化为: <code>user: {id: 1,name: 'xxx', age: 11}</code>
    </td>
    <td>
      <ul>
        <li>JSON数据normalize后返回的还是JSON数据</li>
        <li>若数据源格式与期望的格式一致，可以不需要Normalize</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Serialize</td>
    <td>数据与业务实体的转化,比如JSON与Model的相互转化</td>
     <td>
      <code>deserialize(IUserDTO): User</code>,
      <br/>
      <code>serialize(User): IUserDTO</code>
    </td>
    <td>
      <ul>
        <li>deserialize 传入JSON格式数据，返回值是业务模型</li>
        <li>serialize传入业务模型，返回值是JSON格式的数据</li>
      </ul>
    </td>
  </tr>
</table>
<br/>

  2. 项目架构规范

<table>
<tr>
<th rowspan="6" class="special-th">
<img src="assets/images/architecture/general.png">
</th>
<th>类别</th>
<th>说明</th>
<th>备注</th>
</tr>
<tr>
<td>utils/</td>
<td>基础functions,工具集等</td>
<td>禁止依赖外部内容</td>
</tr>
<tr>
<td>domain-core/</td>
<td>项目的核心业务功能+基础建设</td>
<td>
<ul>
<li>仅可依赖Utils</li>
<li>存放通用服务,例如: 用户消息、Log、埋点、权限、登录、网络</li>
<li>存放 项目业务核心，例如: 用户模型、核心概念模型及相关服务</li>
</ul>
</td>
</tr>
<tr>
<td>shared/</td>
<td>项目的共享UI、共享Pipe、共享Directive</td>
<td>仅可依赖 Utils、 DomainCore</td>
</tr>
<tr>
<td>features/</td>
<td>业务特性模块</td>
<td>
<ul>
<li>仅可依赖Utils</li>
<li>feature内可依赖Utils、 DomainCore 和 Shared</li>
<li>feature与feature之间不存在相互依赖</li>
</ul>
</td>
</tr>
<tr>
<td>lazy-routing.ts/</td>
<td>特性模块懒加载注册文件</td>
<td>可选</td>
</tr>
</table> 
<br/>

  3. domain - 共享业务核心架构规范

<table>
<tr>
<th rowspan="6" class="special-th">
<img src="assets/images/architecture/domain.png">
</th>
<th>类别</th>
<th>说明</th>
<th>备注</th>
</tr>
<tr>
<td>models/</td>
<td>项目核心业务模型</td>
<td>
<ul>
<li>仅可依赖utils/和models/model文件</li>
<li><font color=red>禁止访问services/内容</font></li>
</ul>
</td>
</tr>
<tr>
<td>services/</td>
<td>项目核心业务service</td>
<td>
<ul>
<li>仅可依赖 utils/ 和 models/</li>
<li>repositories和serialize文件非必须，视业务复杂度而定</li>
</ul>
</td>
</tr>
<tr>
<td>index.ts</td>
<td>对外API</td>
<td>导出必要的Model、Service类</td>
</tr>
</table> 

<br/>

  4. shared - 共享UI架构规范

<table>
<tr>
<th rowspan="6" class="special-th">
<img src="assets/images/architecture/shared.png">
</th>
<th>类别</th>
<th>说明</th>
<th>备注</th>
</tr>
<tr>
<td>components/</td>
<td>业务中共享的组件</td>
<td>
<ul>
<li>可以是纯组件（如UI组件，也可以是带service的业务组件）</li>
</ul>
</td>
</tr>
<tr>
<td>pipes/</td>
<td>业务中共享的管道</td>
<td>
</td>
</tr>
<tr>
<td>directives</td>
<td>业务中共享的指令</td>
<td>
<ul>
<li>包含基础module声名如Angular的CommonModule</li>
<li>包含基础依赖Module的声名如NzZorroAntdModule</li>
</ul>
</td>
</tr>
<tr>
<td>index.ts</td>
<td>对外API</td>
<td>导出share.module.ts的ShareModule</td>
</tr>
</table> 

<br/>

  5. component - 架构规范

      <ul>
      <li>仅可依赖Uitls、DonmainCore、Shared</li>
      </ul>


<table>
<tr>
    <th rowspan="9" class="special-th">
    <img src="assets/images/architecture/component.png">
    </th>
    <th>类别</th>
    <th>说明</th>
    <th>备注</th>
</tr>
  <tr>
    <td>components/</td>
    <td>只在当前Component内嵌其他组件</td>
    <td>
      <ul>
      <li>可选</li>
      <li>架构同Component架构</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>models/</td>
    <td>只在当前Component涉及的业务模型</td>
    <td>可选</td>
  </tr>
  <tr>
    <td>services/</td>
    <td>只在当前Component使用的服务</td>
    <td>
    <ul>
    <li>可选</li>
    <li>repositories和serialize文件非必须，视业务复杂度而定</li>
    </ul>
  </td>
  </tr>
    <td>directives/</td>
    <td>只在当前Component使用到的directive类</td>
    <td>
    <ul>
    <li>可选</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td>pipes/</td>
    <td>	只在当前Component使用到的pipe类</td>
    <td>
    <ul>
    <li>可选</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td>xxx.view-obj.ts</td>
    <td>当前Component对应的ViewObject(视图对象)</td>
    <td>
      <ul>
        <li>可选</li>
        <li>component与ViewObject 一对一的关系</li>
        <li>属性方法等无法界定其所属职责范围，这种情况可以放置在ViewModel上</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>xxx.module.ts</td>
    <td>NgModule文件，旨在封装 component</td>
    <td>
      <ul>
        <li>可选</li>
        <li>设计上推荐 一个完整颗粒度component一个NgModule</li>
        <li>声明当前Component以及子非声明过的Component，Directive，Pipes</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>index.ts</td>
    <td>对外API</td>
    <td>	若存在xx.module.ts则导出其NgModule，若无则导出当前Component</td>
  </tr>
</table> 

