//var min=Math.min.apply(Math,arr); 快速获取数组最值

function trans(i,j){
	if(i!=j){
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
	}
}

var arr=[1,6,3,5,2,4];

//简单选择排序 复杂度(时间-平均 最好 最坏/空间）：n^2 n^2 n^2 1  不稳定[比如 8,3,8,1]
//每次选择最值，最值与组端交换  
for(var i=0,iLength=arr.length;i<iLength;i++){
	var min=i;
	for(var j=i+1;j<iLength;j++){
		if(arr[j]<arr[min]) {min=j;}
	}
	trans(i,min); 
}

//冒泡排序   n^2 n n^2 1  不稳定[比如 8,3,8,1]
//两两比较交换，每一次外循环获得最值放在一边。。 
for(var i=0,iLength=arr.length;i<iLength-1;i++){
	for(var j=i+1;j<iLength;j++){
		if(arr[i]>arr[j]) trans(i,j);  //交换位置减少了无序对，提升效率
	}
}

//插入排序  n^2 n n^2 1 
//要插入时，从当前元素的左边开始往前找（从后往前找），比当前元素大的元素均往右移一个位置
function sortInsert(array){  
  var i=1,j,len=array.length,key;  
  for(;i<len;i++){  
    j=i;  
    key=array[j];  
    while(--j>-1){  
      if(array[j]>key){  
        array[j+1]=array[j];  
      }  
      else  
      {  
         break;  
      }  
    }  
    array[j+1]=key;  
  }  
  return array;  
}

//快速排序 O(nlogn)	O(nlogn) O(n2) 	O(nlogn)  快速排序  http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
//二分  递归 每趟基准数定位，左边是比它小的数，右边比它大的数 http://developer.51cto.com/art/201403/430986.htm
快速排序之所比较快，因为相比冒泡排序，每次交换是跳跃式的。
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};

