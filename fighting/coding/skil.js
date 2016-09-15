
/**
 * 数据转换！！！
 * undefined null number string boolean object
 * typeof 注意小写！  多了一个function 另外null返回object
 */
//Boolean转换 undefined null→false number（0/NaN→false，其他true) string(''false)  object(true)   注意[]→true
//！先Boolean转换，再取非
//!!获得真正对应的布尔值
/**
 * 数字 十进制10 八进制012 十六进制0x12 科学计数60e3 1e-3 浮点型计算不精准 01+0.2==0.3错误！！ 要么toFixed(1) 标准四舍五入
 *特殊 NAN Infinity Number.MAX_VALUE Number.MIN_VALUE isNaN
 * NAN 不是数字 产生 0/0或者不能转换成数字时 isNaN  Number('r')→NaN
 * 数字转换(返回值10进制) Number() Number('12r')→NaN ""→0 "12.3"→12.3 "012"→12【前导0自动忽略】 "0x12"→18 null→0 undefined→NaN true→1  对象 valueOf toString()
 * parseInt() true→1 Number('12r')→12 ""→NaN "12.3"→12 其他一致 parseInt(待转换,基数)
 * parseFloat() true→1 "0x12"→0
 * [].valueOf()→[]  [].toString()→"" [1,2].toString()→"1,2" 尽量返回整数
 * 一元加减操作符都先Number()转换
/

function len(num) {
    var str = num.toString();
    var index = str.indexOf('.');
    return index == -1 ? 0 : str.length - index - 1;
}
 
function solution(a, b) {
    var length = Math.pow(10, len(a) +len(b));
    return a * length * b / length;
}
 
console.log(solution(0, 0.001));
console.log(solution(0.001, 0.001));
console.log(solution(3, 0.001));
console.log(solution(1000, 0.001));

/**
 *逻辑与或不会强制转换结果成Boolean
 * || 短路操作 只有在第一个为false，才会返回第二个
 * 1||2→1 0||1→1 0||null→null  第一个操作数是对象，返回第一个
/**
 * && 短路操作 只有在第一个为true，才会返回第二个
 * 1&&2→2 0&&1→0 0&&null→0  第一个操作数是对象，返回第二个
 */

// 3/2=1.5  3.5%3=0.5

/**相等==   true转换成1 undefined/null不能转换 有一个操作数为NaN返回false
 * true:null==undefined '5'==5 true==1
 * false:NaN==NaN undefined==0 true==2  'NaN'==NaN
 */

//单行写一个评级组件：
"★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);

/**
 * 关于Math
 * Math.max() Math.min(2,1,3) 
 * 四舍五入 .ceil() .round() .floor()
 * .random() [0,1)
 */
//生成start-end整数的随机数
function random(start,end){
	return Math.floor((Math.random()*(end-start+1)+start));
}

//求数组中的最小值
function min(arr){
	return Math.min.apply(Math, arr);
}
//生成6位的数字验证码
console.log(Math.random().toString().slice(-6));

//多零大整数  60e3 

//提高遍历性能
for(var i = 0, a; a = arr[i++];) {
    console.log(a);
}

/**
 *正则表达式  贪婪匹配  ()子匹配或者捕获组  ()/1刚才的引用
 *常用 .匹配除换行符\n之外的任意字符 \w单词 \d数字 \s任何空白字符，包括空格、制表符、换页符等等 [ \f\n\r\t\v]
 **0次以上 +一次以上 ？0或1次 {3} {3,4} {3,}  [a,b] [a-b]
 *转义 \. \' \" \[]
 *reg=/^\d{4}-\d{7}$/gim;   reg.test(str)
 *var matches=reg.exec()  matches.index .input matches.[0]  一般[0]是匹配的完整字串，[1]之后才是捕获组 注意区别reg.lastIndex   
 *matches=str.match(reg) matches.[0] matches.index
 *var index=str.search(reg);
 *str.replace(reg, part、function(match,pos,orininalText){}
 */
//Object.prototype.toString.call([]).match(/\s(.*)\]$/)[0].toLowerCase();
//html输入转义

//统计字符串中相同字符出现的次数。
var arr = 'abcdaabc';

var info = arr
    .split('')
    .reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});
console.log(info); //{ a: 3, b: 2, c: 2, d: 1 }


var arr = 'abcdaabc',p={};
info = arr
    .split('')
    .reduce(function(pre, next){
    	pre&&(p[pre] = 1);
    	p[next]++ || (p[next] = 1);
    });



var wai=0,li=0,num=0;
for(var i=0;i<5;i++){
    wai++;
	for(var j=0;j<5;j++){
		if(i==1&&j==1) {
			break;  //只能跳出内部当次循环（j递增之前就要退出）,且彻底退出内部循环
			//continue //跳出内部当次循环（j退出之前,递增）,继续内部下次循环 5,24
		}
		li++;
	}
}
console.info(wai,li);  //5 21

var a=9;
switch(a){
	case 1:
	console.log(1);
	case 2:
	console.log(2);
	break;
	default:
	console.log(3);
}

//将n维数组破开成一维(string-array)
var foo0 = [1, [2, 3], [4, 5, [6,7,[8]]], [9], 10];
 
var foo1 = foo0.join(',').split(',');

console.log(foo1);

var result=a&&b||c;
//等效于 result=a?b:c;

function type(o){
	return Object.prototype.toString.call(o).match(/^\[.*\s(.*)\]$/)[1].toLowerCase();
}
function a(){

}
var aa=new a();
type(aa);

 [] + {};//'[object Object]' 两个对象相加，先valueOf()再toString()，得到不是对象的结果  相加时有一方是字符串，则进行字符串相加。
 {} + [];//0  {}被解析成空的代码块，所以实际上是+[]

 //字符串首字母大写 
//for循环  
function titleCase(s) {  
    var i, ss = s.toLowerCase().split(/\s+/);  
    for (i = 0; i < ss.length; i++) {  
        ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);  
    }  
    return ss.join(' ');  
}  

 //边界 \b  
 str.toLowerCase().replace(/\b(\w+)\b/gi,function(item){
 	return item[0].toUpperCase()+item.slice(1);
 });

 //正则+replace  
function titleCase2(s) {  
    return s.toLowerCase().replace(/\b([\w|']+)\b/g, function(word) {  
        //return word.slice(0, 1).toUpperCase() + word.slice(1);  
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());  
    });  
}


