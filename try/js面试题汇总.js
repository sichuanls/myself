/**/
/*跨浏览器事件监听*/ 
//事件类型 click dbclick change select focus contextmenu keydown keypress keyup(捕获到的字符有区别)
var EventUtil={
	addHandler : function(node, type, handler){ //注册事件，添加侦听器 
		if(node.addEventListener){
			node.addEventListener(type,handler,false); //false-冒泡时触发 DOM2
		}
		else if(node.attachEvent){
			node.attachEvent('on'+type, handler); //默认冒泡时触发  IE
		}
		else{
			node['on'+type]=handler;  //DOM0
		}
	},
	removeHandler : function(node, type, handler){ //移除事件
		if(node.removeEventListener){
			node.removeEventListener(type,handler,false); 
		}
		else if(node.detachEvent){
			node.detachEvent('on'+type, handler); 
		}
		else{
			node['on'+type]=null;
		}
	},
	getEvent:function(event){ //获取事件对象
		return event?event:window.event;
	},
	getTarget:function(event){
		return event.target?event.target:event.srcElement;
	},
	preventDefault:function(event){ //阻止默认事件
		if(event.preventDefault){
			event.preventDefault();
		}
		else{
			event.returnValue=-1;
		}
	},
	stopPropagation:function(event){ //中止继续冒泡
		if(event.stopPropagation){
			event.stopPropagation();
		}
		else{
			event.cancelBubble=-1;
		}
		
	}
}
//调用
var node=document.getElementById('node');
var handler=function(e){
	var event = EventUtil.getEvent(e);
	var target = EventUtil.getTarget(event);
	//还可以获取更多数据 
	//event.type-事件类型 event.currentTarget-注册事件的元素  this总是等于currentTarget
	//event.eventPhase[1-捕获阶段 2-处于目标 3-冒泡]   event.button[1-左键 2-右键 3-左右都按下 4-中间键]
	//event.offsetX/offsetY  event.clientX/clientY  event.pageX/pageY  event.screenX/screenY
	EventUtil.preventDefault(event);
	EventUtil.stopPropagation(event);
	EventUtil.removeHandler(node,'click',handler)
};
EventUtil.addHandler(node,'click', handler);

//事件委托 多用于table和ul
eventUtil.addHandler(ul,'click', function(event){
	//event.target.id  event.target.dataset['shuju'] event.target.dataset.shuju 来判断
	//或者 event.target元素本身及其子元素操作
	event.target.style.backgroundColor='red';
});. 


/*ajax xhr XMLHttpRequest*/ 
var btn=document.getElementById('btn');
EventUtil.addHandler(btn,'click',upload);
function upload(){
	btn.disabled=true;
	var xhr=new XMLHttpRequest(),url='',data={};
	//url进行encodeURIComponent化
	url=encodeURIComponent(url);
	//data使用FormData()
	var form=new FormData();
	for(var item){
		form.append(item,data[item]);
	}
	//onreadystateChange 用很少
	xhr.onreadystateChange=function(event){
		if(readystate==4){  //readystate 0-未初始化 1-启动 2-发送 3-接收 4-完成
			//超时事件发生时，status不能再访问，否则报错
			try{
				if( (xhr.staus>=200 && res.staus<300) || res.staus==304){
					var result=JSON.parse(xhr.responseText);
					var headers=getAllResponseHeader();
					console.log(getResponseHeader('Content-Type'));
				}
			}
			catch(ex){
				//超时处理
			}
		}
	}
	xhr.onload=function(event){ //完成
		if( (xhr.staus>=200 && res.staus<300) || res.staus==304){
			var result=JSON.parse(xhr.responseText);
			var headers=getAllResponseHeader();
			console.log(getResponseHeader('Content-Type'));
		}
		else{
			//错误提示
		}
		btn.disabled = false;
		window.onbeforeunload=null;
	}
	xhr.onerror=function(){
		console.log('error');
		btn.disabled = false;
		window.onbeforeunload=null;
	}
	xhr.onprogress=function(event){ //接收
		if(event.lengthComputable){
			console.log(event.position, event.totaiSize);
		}
	}
	window.onbeforeunload = function(){
	    //正在上传中，刷新或关闭页面将导致操作无效，是否继续?
	};
	//其他事件 loadstart abort loadend
	xhr.open('post',url,true);//初始化 true-异步
	xhr.timeout=5000;
	xhr.ontimeout=function(){
		//超时处理
	}
	xhr.send(form); //发送 若无数据必填null
}

//拖动或点击获取/展示/上传文件
	//点击 <input type='file' onchange='changeFile()'> <div id='output'></div>
function changeFile(event){
    //获取文件名称 通过value-绝对路径字符串处理 或者file.name
    var files=EventUtil.getTarget(event).files; //files.length
    var type='default',reader=new FileReader();
    var name=files[0].name;//EventUtil.getTarget(event).value;  还有file[0].size
    if(/image/.test(files[0].type)){
    	reader.readAsDataURL(files[0]);
    }
    else if(/text/.test(files[0].type)){
    	reader.readAsText(files[0]);
    }
    
    reader.onload=function(){
    	if(type=='image'){
    		output.innerHTML="<img src=\" "+reader.result+" \"'>";
    	}
    	else if(type=='text'){
    		output.innerHTML=reader.result;
    	}
    };
    reader.onprogress=function(event){
    	if(event.lengthComputable){
    		console.log(loaded,total);
    	}
    };
    reader.onerror=function(){
    	//错误处理 
    	output.innerHTML='error';
    }
}

//拖动 <div id='dragTarget'></div>
var dragTarget=document.getElementById('dragTarget');
var dragHandle=function(event){
	EventUtil.preventDefault(event);
	if(event.type=='drap'){
		var files=event.dataTransfer.files;
		//可上传文件
	}
};
EventUtil.addHandler(dragTarget,'dragenter',dragHandle);
EventUtil.addHandler(dragTarget,'dragover',dragHandle);
EventUtil.addHandler(dragTarget,'drag',dragHandle);

//获取地理位置
navigator.geolocation.getCurrentPosition(function(position){
	console.log(position.coords.latitude,position.coords.longtitude);
},function(err){
	console.log(err.code,err.message);
})