function count(str) {
    var re={},length=str.length;
	for(var i=0;i<length;i++){
        if(str[i] && str[i]!=' ') if(re[str[i]]) re[str[i]]++; else re[str[i]]=1;
    }
    return re;
}
console.log(count('hello world'));

function cssStyle2DomStyle(sName) {
if(sName.indexOf('-')==0) sName=sName.slice(1);
 var arr=sName.split('-');
  var temp=arr.map(function(item, index){
        if(index==0) return item.toLowerCase();
        return item.slice(0,1).toUpperCase()+item.slice(1).toLowerCase();
    });
    return temp.join('');
}
console.log(cssStyle2DomStyle('-webkit-border-image '));

//构造函数、原型链
function obj(name){
	if(name){
		this.name=name;
	}
	return this;
}
obj.prototype.name="name2";
var a = obj("name1")
	b = new obj();
	console.log(a.name,b.name,this.a.name,window.a.name);

//对象和数组操作
/*
Object是包含属性和方法的对象， 可以是创建的对象或现有文档对象模型 (DOM) 对象。
Object.keys(object)的 返回值是 一个数组，其中包含对象的可枚举属性和方法的名称。
Array.filter(function)对数组进行过滤返回符合条件的数组。
Array.every  每一项都true才返回true，否则false
Array.some  只要有一项true就返回true，否则false
Array.forEach 每一项进行操作，没有返回值  类似for循环操作
Array.map 每一项进行操作，返回改变后的数组
newArr=arr.filter(function(item, index, array){
	return data[item]>=2;
});

var data = {a:1,b:2,c:3};
for(var i in data) {console.info(i);}
var arr=[2,5,8,9];//Object.keys(data)
var result_bool=arr.every(function(item, index, array){
	return item>2;
});
result_bool=arr.some(function(item, index, array){
	return item>8;
});

var newArr=arr.filter(function(item, index, array){
	return item>2;
});
arr.forEach(function(item, index, array){
	//arr[index]++;
});
var newArr=arr.map(function(item, index, array){
	return item++;
});
*/
// console.log(arr);
// console.log(result_bool);
// console.log(newArr);

//Array数组操作方法
//排序sort
var arr=[5,2,8,9];
arr.sort(compare);
function compare(a,b){
	//console.log(a,b);
	if(a>b) return -1;  //1表示a放后面，0不交换  
	else if(a<b) return 1;
	else return 0;
}
//console.log(arr);

//var arr=[{name:'a',num:{name:'a',num:5}},{name:'b',num:{name:'a',num:2}},{name:'c',num:{name:'a',num:8}},{name:'d',num:{name:'a',num:5}}];
// arr.sort(compare);
// function compare(a, b){
// 	console.log(a,b);
// 	if(a.num.num>b.num.num) return -1;  //1表示a放后面，0不交换
// 	else if(a.num.num<b.num.num) return 1;
// 	else return 0;
// }
// console.log(arr);


//join
console.log(arr.toString()); //默认逗号连接
console.log(arr.join(''));  //指定符号连接
//栈
console.log(arr.push(1, 1));  //数组后前端插入数据，返回新数组长度
console.log(arr);
console.log(arr.pop()); //返回最后一项，数组减一个
//队列 
console.log(arr.shift());//返回第一项，数组减一个
console.log(arr.unshift(1, 1)); //数组前端插入数据，返回新数组长度
console.log(arr);
//reverse反转数组
console.log(arr.reverse());

//concat 合并数组 复制原数组，新值添加到后端
var temp=[4,7];
console.log(arr.concat(9,9,temp)); 
arr=[1,2,3];
//slice([start,end) 截取数组部分 负数→倒数位置 结束位置小于起始位置，则返回空数组
console.log(arr.slice(0,1)); 
//splice(index,num,data)数组部分项 删除、插入、替换 (起始位置，删除项数，替换数据)
console.log(arr.splice(-5,1,8,8));
console.log(arr);

arr=[1, 2, 5, 8, 1, 1, 9, 9, 4, 7];
//位置方法 indexOf(findItem, start) lastIndexOf() 返回第一个符合===条件的所在位置，若没找到返回-1
console.log(arr.indexOf(1,1));
console.log(arr.lastIndexOf(9,-4));
console.log(arr.indexOf(10,-3));

//归并resduce reduceRight
arr=[1,2];
var sum=arr.reduce(
	function(prev, cur, index, array)
	{return prev+ cur;}
);
console.log(sum);
// var data = {a:1,b:2,c:3,name:1};
// Object.prototype.name1='name';
// for(var i in data) {console.info(i);}

//字符串操作
//获取特定位置的字符/字符编码
var str='abcdef';
console.log(str.charAt(0));
console.log(str.charCodeAt(str.length-1));
//同样具有拼接concat、位置indexOf方法
//去掉空格 trim trimLeft trimRight 带消协转换 toUpperCase tolowerCase
//创建对象 组合使用构造函数模式和原型模式

//截取字符串 slice(start,end) substr(start,num)  substring(start,end) 区别！！！
console.log(str.slice(-4,-2)); //负的参数都加上字符串长度，必须浅笑后大
console.log(str.substr(-1,2)); //负的第一个参数加上字符串长度，负的第二个参数转化为0
console.log(str.substring(4,-2)); //取两个数字之间的东东-无视先后顺序，负的第一个参数加上字符串长度，负的第二个参数转化为0 
//strings中的匹配！！！
//match(正则表达式/RegExp对象) 获取匹配的子串和开始下标
var text='cbt,boat,sat,fat';
var pattern=/.At/ig;
var matches=text.match(pattern);
if(matches){
	console.log(matches.index);
	console.log(matches[0]);
	console.log(pattern.lastIndex);
}

//search 返回第一个匹配子串的索引，未找到返回-1
console.log(text.search(pattern));
//replace(字符串/正则，替换数据/函数)替换
console.log(text.replace('at','bt')); //只替换第一个子串
console.log(text.replace(/.at/g,'bt')); //g全局替换
console.log(text.replace(/(.at)/g,'bt ($1)')); //定义捕获组，可通过$插入捕获数据
function replace_function(text1){  //更加精细化的替换
	return text1.replace(/(.at)/g,function(match, pos, originalText){
		   console.log(match, pos, originalText);
		switch(match){
			case'oat': return 'cc';
			case'sat': return 'dd';
			case'fat': return 'ee';
		}

	})
}
console.log(replace_function(text));
//split(字符串/正则，数组大小)分割字符串成数组
console.log(text.split(',',3)); 
console.log(text.split(/.at/)); 

//正则表达式！！！ g-全局 i-忽略大小写 -多行模式
//test(字符串) 返回true/false 目标字符串是否匹配某种模式
console.log(pattern.test(text)); 

//exec()捕获组   在设置全局的情况下，每次调用可查找新项
text='momdadsis';
pattern=/mom(dad(sis)?)?/gi;
matches=pattern.exec(text);
console.log(matches.index); 
console.log(matches.input); 
console.log(matches); 

console.log(3/2);
text='cat,bat,fat';//momdadsis
pattern=/.at/gi;//mom(dad(sis)?)?
matches=pattern.exec(text);
console.log(matches.index); 
console.log(matches.input); 
console.log(matches); 
console.log(pattern.lastIndex); 

matches=pattern.exec(text);
console.log(matches.index); 
console.log(matches.input); 
console.log(matches); 
console.log(pattern.lastIndex);


//创建对象 构造函数+原型
function Thing(name,type){
	this.name=name;
	this.type=type;
}
Thing.prototype.say=function(){
	console.log(this.name);
}
var thing1=new Thing('a','a1'),
	thing2=new Thing('b','b1');
//thing1.say();
//thing2.say();

//组合继承 原型链+借用构造函数
function Super(name){
	if(name) this.name=name;
	else this.name='name';
	this.type='type';
}
Super.prototype.say=function(){
	console.log(this.name);
}

function Sub(name, color){
	Super.call(this, name);
	this.color=color;
}
Sub.prototype = new Super();
Sub.prototype.say1=function(){
	console.log(Object.getPrototypeOf(this).name);
	console.log(Object.getPrototypeOf(this).type);
	console.log(this.name);
	console.log(this.type);
}
var sub=new Sub('a','blue');
sub.type='0';
sub.say1();
//sub.say();

var sub1=new Sub('b','blue');
sub1.type='1';
sub1.say1();

//函数申明提升  严格模式下，访问arguments.callee会报错
function func1(num){
	console.log(arguments.callee.caller);
	if(num==1) return 1;
	return num*arguments.callee(num-1);
}
var func2=func1;
func1=function(){
	return 0;
};
console.log(func2(3));
var func3=(function f(num){
	if(num==1) return 1;
	return num*f(num-1);
});
console.log(func3(3));

//作用域链(本质：指向变量对象的指针列表)  函数被调用时会创建爱你执行环境和作用域链  活动对象序位（全局对象在最后位）
//闭包-有权访问另一个函数作用域中的变量的函数   在另一函数内部定义的函数会将包含函数（外部函数）的活动对象添加到他的作用域链中 并可以访问，除非销毁匿名函数

//块级作用域
(function(){  //避免向全局作用域添加过多的变量和函数
	var zz=0;
	console.log(zz);
})();
