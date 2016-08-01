/**
 * Created by tianxi on 16-6-19.
 */
function foo(x) {
  var tmp = 3;
  function bar(y) {
    console.log(x + y + (++tmp));
  }
  bar(10);
}
foo(2);

function strToJson(str){
  var json = (new Function("return " + str))();
  return json;
}

var data = '{"ring_id":"111111111","command":"2"}';
var str = "'"+data+"'";
var obj = strToJson(data);
console.log(data.ring_id);
console.log(data.command);

str=new String();
var arr=new Array();
str="11111&12";
arr=str.split('&');//注split可以用字符或字符串分割
for(var i=0;i<arr.length;i++)
{
  console.log(arr[i]);
}

function fn(n){
  console.log("value=" + n);
}
// setTimeout(fn(5), 6000);

var i = 10;
function remainTime(){
  if(i==0){
    console.log("valu======");
    return ;
  }
  i--;
  setTimeout(remainTime,1000);
}
// remainTime();


function fun1(which) {
  console.log(which);
}
fun1("sadfsd");
