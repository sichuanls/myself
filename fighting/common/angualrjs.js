/**
 * 特征 Web应用程序框架
 * 数据绑定: 模型和视图组件之间的数据自动同步
 * 控制器:业务处理
 * 服务: AngularJS配有多个内置服务，例如 $http 可作为一个XMLHttpRequest请求。
		 这些单一对象在应用程序只实例化一次。
		 “分离 - 关注”，每个服务负责一个特定任务。服务注入之后，控制器、过滤器可以调用它们。
		 两种方法来创建服务：factory、service
 * 过滤器:
 * 指令:指令是关于DOM元素标记(如元素，属性，CSS等等)。
        这些可以被用来创建作为新的，自定义部件的自定义HTML标签。AngularJS设有内置指令(如：ngBind，ngModel...)
 * 模板:这些符合从控制器和模型信息的呈现的视图。这些可以是单个文件(如index.html)，或使用“谐音”在一个页面多个视图。
 * 路由: 它是切换视图的概念。
 * 模型视图：而是更接近于MVVM(模型 - 视图 - 视图模型)。AngularJS团队将它作为模型视图。
 * 依赖注入: 减轻组件的依赖，使依赖可配置。这有助于使组件可重复使用，维护和测试。
 			 值 - value；工厂 - factory；服务 - service；提供者 - provider；常量 - constant
 */

/**
 * 优点
 * MVVM-视图和数据处理逻辑分离，方便管理
 * 数据绑定功能
 * 依赖注入
 * 服务Services “分离 - 关注”，每个服务负责一个特定任务。服务注入之后，控制器、过滤器可以调用它们。
 * 可重用的组件
 * 可进行单元测试- karma-运行控制框架,提供以不同环境*chrome来运行单元测试 ;jasmine是一个行为驱动开发的测试框架,describe/it/expect/beforeEach/afterEach
	   提供angular-mock.js的测试工具类来提供模块定义,加载,注入等.
	   端到端测试-E2E测试中我们将一堆组件合起来然后检查全过程是否如我们预想的那样运运作
 */

/**
 * 缺点 大而笨重
 * 双向数据绑定是一把双刃剑。随着组件增加，项目越来越复杂，双向数据绑定带来性能问题。
 	 Angular的实现方法被叫做“Dirty-checking（脏检查机制）”，通过跟踪数据的改变再动态更新用户界面（UI）。
     在Angular的作用域中任何操作的执行都会引发Dirty-checking，随着绑定数量的增加性能就会越低。
     双向数据绑定的另一个问题是，如果页面上有许多拥有动态数据的组件，这意味着也会有很多的数据来源，如果管理不好会让人感觉混乱不堪。
 * Angular自成一体。如果你使用的其它JavaScript库也需要改变数据就必须用Angular的$apply函数去封装。
     或者如果它是一个工具库，你就需要把它转换成一个服务。似乎其它JavaScript库都必须经过改动才能和Angular进行交互操作。
 *
 */

/**
 * React优点
 * 模块化UI组件
 * 单向数据流
 * 工作原理
 * 单页面JS应用程序的最大缺陷在于对搜索引擎的索引有很大限制。React可以在服务器上预渲染应用再发送到客户端。
 * React与其它框架/库兼容性好
 * React+Redux
 */


/**
 * angular工作原理
 * 加载html，然后解析成DOM；
 * 加载angular.js脚本，创建全局对象rootScope
 * AngularJS等待DOMContentLoaded事件的触发；
 * 扫描HTML，寻找ng-app指令，根据这个指令确定应用程序的边界；
 * 使用ng-app中指定的模块配置$injector；使用$injector创建$compile服务和$rootScope；
 * 使用$compile服务编译DOM并把它链接到$rootScope上；
 * 执行控制器函数
 * Scope/comile/link
 * 呈现通过控制器模型数据来自填充的视图。
 */

/**
 * 脏值检测 http://www.cnblogs.com/xuezhi/p/4897831.html
 * 
*/

/**
 * 自定义指令 AngularJS应用程序引导过程中找到匹配的元素，使用compile() 和link() 方法处理元素。
 * http://www.bubuko.com/infodetail-694161.html
 * http://www.jb51.net/article/58229.htm
 */
