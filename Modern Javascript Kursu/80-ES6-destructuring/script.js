//Desructuring

//Desructuring assignment
var a,b,rest;
a=10;
b=20;
[a,b]=[15,25];
console.log(a);
console.log(b);
[a,b,...rest] = [100,200,40,50,60];
console.log(a);
console.log(b);
console.log(rest);
({a,b} = {a:10,b:20});
console.log(a);
console.log(b);
({a,b,...rest}={a:10,b:20,c:30,d:40,e:50});
console.log(a);
console.log(b);
console.log(rest);


//Array Desructuring
const arrConfig=['localhost','8080','900'];
// //ES5
// var server=arrConfig[0];
// var port=arrConfig[1];
// var timeout=arrConfig[2];
// console.log(server,port,timeout);

//ES6
// const [server,port,timeout]=arrConfig;
// console.log(server,port,timeout);

//Object Desructuring
const objConfig={
    server:'localhost',
    port:8080,
    timeout:900
};
// var server=objConfig.server;
// var port=objConfig.port;
// var timeout=objConfig.timeout;
 const {server,port,timeout}=objConfig;
// console.log(server,port,timeout);
 let {timeout:t}=objConfig;
 console.log(timeout);
 console.log(t);
const objConfig2={
    server:'localhost',
    port:8080,
    timeout:500
};
// let {server,port,timeout=900}=objConfig2;
// console.log(server,port,timeout);//timeout değeri 500 kalır eğer objConfig2 de timeout diye bir değer olmasaydı 900 olarak alınırdı.

const day=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const[,,wed,,fri]=day;
console.log(wed,fri);