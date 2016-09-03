/*XHR 
XMLHttpRequest
Ajax
Asynchronous JavaScript+XML
*/
var xhr=new XMLHttpRequest();
xhr.upload
 uploadFile: function(url,data){
             var fd = new FormData(),
                 xhr = new XMLHttpRequest(),
                 p;
            var type = data.picType;

             for( p in data){
                 fd.append(p,data[p]);
             }
             xhr.upload.addEventListener("progress",function(){
                 du.showHint("上传中");
                 page.submit_btn.disabled = true;
             });
             xhr.addEventListener("load",function(evt){
                data = JSON.parse(evt.target.responseText);
                if(data.code == 200){
                    du.showSuccess("上传成功");
                    setTimeout(function(){
                        window.location.href = '/admin/square/headpic/list?picType=' + type;
                    },200);
                }else{
                    du.showError(data.message);
                    page.submit_btn.disabled = false;
                }
                window.onbeforeunload =null;
             });
             xhr.addEventListener("error",  function(){
                 du.showError('上传失败');
                 page.submit_btn.disabled = false;
                 window.onbeforeunload =null;
             });
             window.onbeforeunload = function(){
                 return "正在上传中，刷新或关闭页面将导致操作无效，是否继续？";
             };
             xhr.open("POST", url,true);
             xhr.setRequestHeader("csrfToken",e._$get('csrfToken').value);
             xhr.send(fd);
         },