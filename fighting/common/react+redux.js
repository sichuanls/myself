/**
 * React
 * http://www.ruanyifeng.com/blog/2015/03/react.html
 * JSX 基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析
 * 组件 React.createClass this.props.name this.props.children  this.refs.[refName]
 * 状态驱动  用户互动，导致状态变化，从而触发重新渲染 UI（render再次运行）
 * getInitialState  this.state  this.setState
 * 组件的生命周期 Mounting、Updating、Unmounting  componentDidMount
 * 组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。
 */

var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);

//组件
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);

/**Redux 
 http://cn.redux.js.org/docs/basics/DataFlow.html
 * 单一数据源:整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
 * State 是只读的:惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
 * 使用纯函数来执行修改,为了描述 action 如何改变 state tree ，你需要编写 reducers。
 * Action 是把数据从应用,传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
 * reducer指明应用如何更新 state。Action 只是描述了有事情发生了这一事实.
 *  Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
 * 严格的单向数据流  https://segmentfault.com/a/1190000003895970
 * Middleware提供的是位于 action 被发起之后，到达 reducer 之前的扩展点   记录日志/崩溃报告
 * Redux 的灵感来源于 Flux。Redux 并没有 dispatcher 的概念。原因是它依赖纯函数来替代事件处理器。
 */