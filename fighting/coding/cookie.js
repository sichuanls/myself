//操作cookie
var util={
	setCookie:function(name, value, expires, domain, path, sxecure){
		var cookie=encodeURIComponent(name)+'='+encodeURIComponent(value);  //转码对吗？为什么要转义
		if(expires instanceof Date) {
			cookie+= ";expires="+expires.toGMTString(); //GMT格式  假设输入是个标准date对象，需要转换  ？怎么转换
		}
		if(domain) {
			cookie+= ";domain="+domain; //分号还是逗号间隔？分号间隔！！
		}
		if(path) {
			cookie+= ";path="+path; //分号还是逗号间隔？分号间隔！！
		}
		if(sxecure) {
			cookie+= ';sxecure';  //输入是Boolean  只有通过SSL建立的链接才能访问，即https
		}
		document.cookie=cookie;
	},
	getCookie:function(name){//当前页面可用的所有键值对name-value
		var cookies=document.cookie, cookieName=encodeURIComponent(name)+'=', start=cookies.indexOf(cookieName), value=null;
		if(start !=-1){
			var end = cookies.indexOf(start, ';')
			if(end==-1) end = cookies.length;
			value=decodeURIComponet(cookies.slice(start+cookieName.length,end));
		}
		return value;
	},
	unset:function(name, domain, path, sxecure){
		this.setCookie(name,"", new Date(0),domain, path, sxecure);
	}
}

//操作localStorage
window.localStorage.setItem(name,value);  //window.localStorage或localStorage  同源策略
window.localStorage.getItem(name); //没有返回null
window.localStorage.removeItem(name);
window.localStorage.clear();

/*
两者区别：
（1）操作方式 cookie需要自行封装操作方法，后者有现成的比较方便
（2）数据容量大小，一个域名下cookie个数有限，尺寸大约4095B；localStorage每个源限制在几MB左右
（3）cookie每次都会伴随请求提交
（4）cookie有时效设置，storage如果不啊删除则永久存在
*/
/*
Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。

除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。

但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生
*/

//操作子cookie
