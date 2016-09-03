//es6 
//let vs const  有块级作用域

console.log(typeof a);
let e=7;
if(true){
	let a=e;
	//let a=1;
	const b=2;
	var c=3;
	console.log(a);
}

//console.log(a,b,c);

function bar(x = 2, y = x) {
  return [x, y];
}

bar();

function func(arg) {
  var arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}

function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  //f();
}());

'use strict';
if (true)
  {function f1() {}}

http://service.weibo.com/share/share.php?url=https%3A%2F%2Fx.163.com%2Flive%2Fpc%2Findex.html%23%2Fm%2Fchannel%3Fid%3D163281604360482&type=1&appkey=2757117820&title=%E6%88%91%E6%AD%A3%E5%9C%A8%E7%BD%91%E6%98%93%E9%9D%92%E6%9E%9C%E7%9B%B4%E6%92%AD%E8%A7%82%E7%9C%8B%20%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%20%E7%BD%91%E6%98%93%E5%92%96%E5%95%A1%E5%90%A7%E5%B1%95%E5%8C%BA3%20%E7%9A%84%E7%B2%BE%E5%BD%A9%E7%9B%B4%E6%92%AD%EF%BC%8C%E5%BF%AB%E6%9D%A5%E5%9B%B4%E8%A7%82%E5%90%A7!&pic=https%3A%2F%2Fnos.netease.com%2Fsmartcamera-public%2F163281604360482_cover_img_1470134333.h264%3Fvframe%3D1&ralateUid=5397496869&language=zh_cn&dpc=1&width=32&height=32
http://service.weibo.com/share/share.php?url=https%3A%2F%2Fx.163.com%2Flive%2Fpc%2Findex.html%23%2Fm%2Fchannel%3Fid%3D163281601314542&type=1&appkey=2757117820&title=%E6%88%91%E6%AD%A3%E5%9C%A8%E7%BD%91%E6%98%93%E9%9D%92%E6%9E%9C%E7%9B%B4%E6%92%AD%E8%A7%82%E7%9C%8B%20%E7%BE%8A%E6%AF%9B%E6%AF%A1%E6%89%8B%E5%B7%A5%20%E7%9A%84%E7%B2%BE%E5%BD%A9%E7%9B%B4%E6%92%AD%EF%BC%8C%E5%BF%AB%E6%9D%A5%E5%9B%B4%E8%A7%82%E5%90%A7!&pic=https%3A%2F%2Fnos.netease.com%2Fsmartcamera-public%2F163281601314542_cover_img_1470134249.h264%3Fvframe%3D1&ralateUid=5397496869&language=zh_cn&dpc=1&width=32&height=32