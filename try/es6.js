console.log(typeof(0) == 'number');
console.log(typeof(NaN) == 'number');
console.log(NaN==NaN);
console.log(isNaN(NaN));
console.log(typeof(true) == 'boolean');
console.log(typeof('qa') == 'string');
console.log(typeof(undefined) == 'undefined');
console.log(typeof(null) == 'object');
console.log(typeof([]) == 'object');
console.log(typeof({}) == 'object');
console.log({} instanceof Object);
console.log(null == undefined);
function sum(){
	var sum1=0;
	Array.prototype.slice.call(arguments, 0).forEach(function(value){
	    if(typeof(value)=='number') sum1+=value;
	    if(typeof(value)=='string' && parseInt(value)) sum1+=parseInt(value);
	});
	return sum1.toFixed(2) ;
}
console.log(sum(0.1, 0.2));

Array.prototype.delateRepete=function(){
	var deleteArr=[], map=new Map(), deleteIndexs=[];
	var self=this;
	this.forEach(function(value,index){
	  	if(self.indexOf(value)!=self.lastIndexOf(value)){
		     if(deleteArr.indexOf(value)==-1) {
		        deleteArr.push(value);
		        map.set(value,index);
		     }
		    if(map.get(value)!=index){
		    	deleteIndexs.push(index);
		    }
		}
	});
	console.log(map);
	deleteIndexs.reverse();
	deleteIndexs.forEach(function(zz){
		self.splice(zz,1);
	});
	return deleteArr;
};

var aa=[1,2,3,2,3,4,6,3,9,7,8,9,9];
console.log(aa.delateRepete());
console.log(aa);


function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    tags=Array.prototype.slice.call(arguments,1);
   function compare(a,b){
return a-b;
    }
    tags.sort(compare);
    return tags;//返回已经排序的数组
}
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.info(result);



//defualt parameters
var link=function(width=50,height=0){
	console.log(width,height);
	console.log(`${width},height`); //反单引号`
};
link(10);

//解构赋值
var [a,b]=[1,2];
console.log(a);

//数组遍历 for of

//集合set 元素的唯一性  什么类型数据都可以放入 包括window...
var coll=new Set();
coll.add('1');
coll.add({a:1});
console.log(coll);
console.log([...coll]);
console.log(coll.size);
console.log(coll.has('1'));
coll.delete('1');
coll.clear();
//for(var key in coll) console.log(key);

//键值对map
var myMap=new Map();
myMap.set('a',1);
console.log(myMap.get('a'));