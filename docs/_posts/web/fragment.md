---
title: 零碎知识01
date:  2019-11-26
tag: [javascript,h5]
category: ['web', 'web/javascript']
author: dva
---
这个版块主要记录一些零碎但有必要记录的知识点
<!-- more -->

更新

## in, for in , for of 区别和联系
```javascript
const obj = {
    name: 'dva',
    age: 20
}
const prototype = {
    wife: 'lhj'
}
const arr = ['dva','20'];
Object.setPrototypeOf(obj, prototype); // 设置obj的原型对象是prototype 
prop in Object 
//in 操作符查看Object及其原型链中是否有指定的prop
0 in arr // => true
3 in arr // => false
'dva' in obj // => true

// for in 遍历对象以及从原型链中继承的可枚举的属性,不推荐遍历Array，因为for in 不能保证遍历的顺序
for (let i in obj) {
    console.log(i) // => name, age，wife
}
// Object.keys() 遍历对象可枚举(不含继承来的)的属性，并返回属性键名组成的数组
const keys = Object.keys(obj) // => ['name', 'age'] 
// Object.getOwnPropertyNames(obj) 类似于Object.keys

// for of 类似于for in,但是for of遍历有iterator接口(自身或者原型链上有Symbol.iterator属性的可视为i具有iterator接口)的数据结构，包括 Array，一些Array like(arguemtns对象，Nodelist对象)对象,Set, Map,字符串等都可以使用for of遍历。意味着对象原生是不可以使用for of遍历的
for (let i of obj) {
    console.log(i) // TypeError: obj is not iterable
}
for (let i of arr) {
    console.log(i) // => dva, 20
}
// 我们可以自定义obj的Symbol.iterator属性，以便其可以被for of遍历
const myObj = {
  name: 'dva',
  age: 20,
  [Symbol.iterator]() {
    let _first = true; //通过闭包存储_first变量
    return {
      next() {
        if(_first) {
          _first = false;
          return {value: 'hello', done: false}
        } else {
          return {value: undefined, done: true}
        }
      },
    }
  }
}
// 上面我们在对象自身属性中定义生成遍历器对象的函数，当然也可以定义在对象的原型中。
for (let i of myObj) {
  console.log(i) // => hello
}
// 事实上 for of 相当于以下做法的语法糖，执行遍历器对象的next方法，知道done为true
const iterator = myObj[Symbol.iterator]();

console.log(iterator.next()); // => {value: 'hello', done: false}
console.log(iterator.next());// => {value: undefined, done: true}

```

### H5零碎知识点

- 请求获得地理位置信息
```javascript
// 该成功回调函数传入的position表示获得的位置信息
const successF = (position) => {
    // 其中position.coords.latitude 和position.coords.longitude 代表当前位置经纬度。
}
// 该失败回调传入的error代表失败状态信息
const errorF = (error) => {
    
    // 通过 error.code 来判断何种原因出错 
      switch (error.code) {
        case error.TIMEOUT:
          console.log("A timeout occured! Please try again!"); // 超时
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("We can't detect your location. Sorry!"); // 位置信息不可用
          break;
        case error.PERMISSION_DENIED: // 用户禁止获得位置信息
          console.log("Please allow geolocation access for this to work.");
          break;
        case error.UNKNOWN_ERROR:  // 位置错误
          console.log("An unknown error occured!");
          break;
      }
}
// 请求获得位置时的参数
const options = {
    
     // 指示浏览器获取高精度的位置，默认为false
     enableHighAccuracy: true,
    // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
     timeout: 5000,
    // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
     maximumAge: 3000
}
//判断浏览器是否支持h5地理位置api
if (navigator.geolocation) {
    // 调用获取当前位置方法,该方法三个参数分别是，获取地理位置成功回调，失败回调，和获取地理位置的参数
    navigator.geolocation.getCurrentPosition(successF, errorF, options)
} else {
  console.log('浏览器不支持地理位置api')  
}
```

