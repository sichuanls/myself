//跨浏览器绑定事件监听
var EventUntil={
	addHandler:function(ele, type, handler){
		if(ele.addEventListener){
			ele.addEventListener(type, handler, false);
		}
		else if(ele.attachEvent){
			ele.attachEvent('on'+type, handler);
		}
		else ele['on'+type]=handler;
	},
	removeHandler:function(ele, type, handler){
		if(ele.removeEventListener){
			ele.removeEventListener(type, handler, false);
		}
		else if(ele.dettachEvent){
			ele.dettachEvent('on'+type, handler);
		}
		else ele['on'+type]=null;
	},
	getEvent:function(event){
		return event?event:window.event;
	},
	getTarget:function(event){
		return event.target||event.srcElement;
	},
	preventDefault:function(event){
		if(event.preventDefault) event.preventDefault();
		else event.returnValue=false;
	},
	stopPropagation:function(event){
		if(event.stopPropagation) event.stopPropagation();
		else event.cancelBubble=true;
	}

};

//事件委托  通过target识别

//XHR   进度事件 loadstart、progress、error、abort、load、loadend
//注意流程顺序 new xhr → on事件 →open → 头部、超时 → send
var xhr= new XMLHttpRequest();
xhr.onload=function(){  //收到响应后，xhr对象的属性被自动填充 responseText保存数据的主体、responseXML、status、statusText
	//最好先检查状态 200-成功 304-资源没有修改
	if((xhr.staus>=200 &&xhr.staus<300) || xhr.staus==304) console.log(xhr.responseText, xhr.status);
	else console.log('failed:'+ xhr.status);
};
	//获取响应的头部
	xhr.getResponseHeader("myHeader");
	xhr.getAllResponseHeaders();

//其他属性 readyState(0-未初始化 1-启动 2-发送 3-接收 4-完成) 对应事件readystatechange  ——DOM0级方法
xhr.onprogress=function(event){  //返回event对象， lengthCoputable-bool-是否可用标志位；position-已接收的字节数 ；totalSize-总共的字节数
	if(event.lengthCoputable){
		console.log(event.position, event.totalSize);
	}
};
xhr.open("get", "url", true); //启动一个请求，准备发送 xhr.open(请求类型, URL, 是否异);
xhr.setRequestHeader("myHeader","myHeader");//设置请求头部信息
xhr.setRequestHeader("Content-Type","application/x-www-form-urencodeed");
xhr.overrideMimeType('text/plain');//重写服务器返回的MIME类型
xhr.timeout=1000; //超时设定 ms单位  IE8唯一支持？ 注意-超时后请求会终止，终止后访问status会报错
xhr.ontimeout=function(){
	console.log('timeout');
};
xhr.send(null); //发送请求xhr.send(主体数据);   无数据时必须传入null！
//Get请求 使用最多 URL必须经过encodeURIComponent()编码 名-值 &
function handlerUrl(url, name, value){
	url+= (url.indexOf('?')==-1?'?':'&');
	url+=encodeURIComponent(name)+'='+encodeURIComponent(value);
	return url;
}
//Post 可提交更多数据，但请求资源小号较多、请求速度较慢

//FormData 序列化表单  不用设置头部类型为表单，xhr可以自动识别
var data=new FormData(document.forms[0]); //获取表单方法很多 通过id、name等
data.append('','');//添加键值对

//跨域技术
/*
 *CORS(Cross-Origin Requset Sharing)  使用自定义的HTTP头部让浏览器和服务器进行沟通 Origin、Access-Control-Request-Method 对应响应中的Access-Control-Request-Origin等..
 //其他-利用DOM中可以跨域的功能，绕开xhr实现  
 *图像Ping 图像加载可以跨域 Ping单向通信、只能Get请求、无法访问响应文本  常用于跟踪在线广告的曝光次数
 	var img=new Image(); img.onload=img.onerror=function(){console.log('Done');} img.src='croUrl';
 *jsonp(json with padding) 填充式JSON = 回调函数+数据 动态script元素  可以双向通信，访问响应的json文本  但不起请求的域是否安全？jsonp的请求失败难以鉴定
	var script=document.createElement('script'); script.src='croUrl';//[croUrl示例 ..?callback=handle];
	   document.body.inserBefore(script,document.firstChild); function handle(response){console.log(response);}
 *
*/

//函数绑定 原生bind函数
//示例
var handle={
	message:'ok',
	action:function(event){
		console.log(this.message);
	}
};
//var btn=document.getElementById('btn');
//EventUntil.addHandler(btn,'click',handle.action.bind(handle))  //如果没有bind，则执行环境是元素btn；bind之后执行环境是handle
//原理 类似 function bind(func, context){ return function(){ return func.apply(context,arguments);
//}}

//函数柯里化 创建已经设置好了一个或多个参数的函数
function curry(fn)
{
	//Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组；
	var args=Array.prototype.slice.call(arguments,1); //arguments是执行环境-类数组的对象 类似{length:2,0:'first',1:'second'}，1是slice的传入参数
	return function(){
		var innerArgs=Array.prototype.slice.call(argumens,1);
		var finalArgs=args.concat(innerArgs);
		return fn.apply(null, finalArgs);
	}
}
//函数节流  mouxi8e代码不可以在没有间断的情况连续重复执行,比如浏览器size的变化
function throttle(method, context){
	clearTimeOut(method.tId);
	method.tId=setTimeOut(function(){
		method.call(context);
	}, 1000);
}
var resize=function(){
	console.log('q';)
}
// window.onresize=function(){
// 	throttle(resize);
// }