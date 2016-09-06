function trans(num){
	var unit=['','十','百','千','万'];
	 var n2c = ['零','一','二','三','四','五','六','七','八','九'];
	var str=''+num,length=str.length,i=length-1,re='',temp='';
	for(;i>=0;i--){
		if(str[i]!=0) temp= (n2c[parseInt(str[i])] + unit[length-1-i]);
		else temp='零';
		re=temp+re;
	}
	re=re.replace(/零{2,}/,'零');
	re=re.replace(/零+$/,'');
	return re;
}
trans(0);
trans(1);
trans(9);
trans(10);
trans(100);
trans(101);
trans(1000);
trans(1001);
trans(10000);
trans(10001);

function maximum(array){
    if(array.length<2){ return array;}
    var arr = array.join(",").split(","),   //将数组数字字符串化，用于字符串组合
        temp = [];

    function get(arr){
          var max=arr[0], //对比从数组第二位开始，默认最大是第一位。
              index=0,
              t
          for(var i=1, len=arr.length; i<len; i++){
                  t = arr[i]
                  if(+(t+max) > +(max+t)){
                          max = t;
                          index = i;
                  }
          }
          //最大值排在第一位
          temp.push(+max)
          //数组排除max
          arr.splice(index,1);
          //如果剩下的数组长度不等于零，继续检测剩下的数
          arr.length && get(arr);
    }
    get(arr);
    return +temp.join("");
}
undefined
maximum([31,331])