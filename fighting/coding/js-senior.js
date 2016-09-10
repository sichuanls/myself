//js高级技巧
/**
 * 函数绑定
 */
//js bind函数(ECMA原生提供)  改变上下文，返回改变后的函数，并且注意bind传入参数的注入影响
var b=1;
var a={b:2};
function zz(e,f,g){
	console.log(this.b,e,f,g);
}
var newf=zz.bind1(a,'33');
newf('44');  //输出 2,33,44,undefined

//实现
Function.prototype.bind1=function(){
	var that=this,obj=arguments[0],arg=Array.prototype.slice.call(arguments,1);
	return function(){
		var arr=Array.prototype.slice.call(arguments);
		return that.apply(obj, arg.concat(arr));
	}
}
或者
var bind=function(fn, obj){
	return function(){
		return fn.apply(obj,arguments);
	}
}
function zz(e,f){
	console.log(this.b,e,f);
}
var a={b:2};
var newf=bind(zz, a, 'p');
newf('q'); //输出2,,'q',undefined

/**
 *函数柯里化
 *创建已经设置好以讴歌或多个参数的函数  有点类似bind函数，不同的是bind函数绑定环境到对象上，而函数柯里化需要函数执行
 */
function curry(fn){
	var arg=Array.prototype.slice.call(arguments,1);
	return function(){
		var arr=Array.prototype.slice.call(arguments);
		return fn.apply(null, arg.concat(arr));
	};
}

/**
 *函数节流
 *DOM操作需要更多内存和时间，连续高频率的操作(resize,scroll)可能会导致浏览器挂起和崩溃，
 *使用定时器进行节流，使执行函数必须间隔一段时间才执行。若前一次的延时未执行，则清除之前的，替换
 *函数节流技术的意义在于在用户察觉范围外，降低函数调用的频率，从而提升性能。
 *可用在下拉加载，避免反复请求
 *注意setTimeout内部的函数作用环境默认是在window！！！所以若需要改换语境，则传入context
 */
function throttle(method, context){
	clearTimeout(method.tId);
	method.tId=setTimeout(function(){
		method.call(context);
	},100);
}
function resize(){
	console.log(window.outerWidth, window.innerWidth);
}
window.onresize=function(){
	throttle(resize);
}
function resize(){
	console.log(window.outerWidth, window.innerWidth);
}
window.onsroll=function(){
	throttle(resize);
}

/**
 *模块化
 */

var a=1;
console.log(a);
var a;
console.log(a);
/**
 *单例模式+私有变量
 */
//模块模式-返回对象字面量，都是object的实例
var aa=function(){
	var name=1;
	function addname(){
		name++;
		return name;
	}
	return {
		pro:name,
		method:function(){
			return addname();
		}

	};
}();
console.log(aa.pro);
aa.method();

//增强模式-返回固定对象类型的结果
var aa=function(){
	var obj=new Array();
	obj.push(0);
	obj.add=function(item){
		obj.push(item);
	};
    obj.getCount=function(){
		return obj.length;
	};
	return obj;

}();
console.log(aa.add(1));
aa.getCount();
//应用：管理组件


