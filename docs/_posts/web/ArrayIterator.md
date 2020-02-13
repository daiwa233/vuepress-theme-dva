---
date: 2019-10-12
author: 'dva'
title: javascript中数组的迭代方法
tags: ['javascript']
category: [web,web/javascript]
---

  数组的迭代方法在项目中用的好的话就是神器。

数组的迭代方法首先要知道这些方法都会有一个回调函数，数组中的每一项都会调用回调函数,回调函数可以接受三个参数，绝大部分迭代方法的回调函数中三个参数分别是  ’数组中的每一项‘ ，’数组中每一项的索引‘， ’调用迭代方法的整个数组‘
<!-- more -->
 ## 1. Array.every()  Array.some() 

  every()和some()相似 ，都用于查询数组中的项是否满足某个条件，根据方法名的意思很好理解，`Array.every()`方法数组中的每一项都满足某个条件才返回true,否则返回false,用的不多。`Array.some()` 数组中的某一项满足某个条件，则返回true,常用。

  ```javascript 
   const arr = [1,2,3,4,5];
   const result = arr.every(function(value,index,array){
         return (value>2);
      });
   console.log(result);//false
          
   const result = arr.some(function(value,index,array){
              return (value>2);
      });
   console.log(result);//true
  ```
::: tip 提示
随便写点啥
:::
::: warning Note
随便写点啥
:::
::: danger 
随便写点啥
:::
::: details 
随便写点啥
:::
 ## 2. Array.find()  Array.findIndex()

  这两个方法会返回**满足回调函数中条件**的一项，`Array.find()`是返回哪一项，`Array.findIndex()`是返回那一项的索引。使用场景：当需要获得数组中某一满足条件的具体的项或者索引值进行操作

  ```javascript
  const arr = [
      {id:1,name:'dva1'},
      {id:2,name:'dva2'},
      {id:3,name:'dva3'}
  ];
  const item2 = arr.find((item) => item.id === 2)// =>item2: {id:2,name:'dva2'}
  const index2 = arr.findIndex((item) => item.id === 2) // => index2: 1
  ```

 ## 3. Array.map()

  该方法相当于对数组中的每一项映射，返回这些映射组成的新数组，即n => n。 所以说数组的`length`不变。
  ```javascript
  const users = ['dva', 'lhj', 'a', 'b']
  const BaseUrl = 'https://api.github.com/users/'
  const search = users.map(item => {
    return BaseUrl + item
  })// => search 是由给定用户名组成的搜索用户的api

  // 我们甚至可以直接在map中对这些api发起并发的异步请求 
  const details = Promise.all(
    users.map(item => {
      const url = BaseUrl + item;
    // 此处假设我们引入了axios
      return axios(url)
  })
  ) // => 此时得到的details是由返回的用户信息组成的数组
  ```
  

 ## 4. Array.reduce() Array.reduceRight
  `Array.reduce()`，汇总方法，即n => 1。首先该方法的回调和其他迭代方法回调的参数不太一样，回调函数可以有四个参数，‘前一个值’，‘当前值’，‘第二个参数项的索引’，和‘数组对象’。这个函数返回的每一个值都会作为 第一个参数传给下一项.
  下面通过一个简单的应用理解该方法。
  ```javascript
  const arr = [1,2,3,4,5];
  const result = arr.reduce((pre,cur,index,array) => {
                return pre +cur;
            });
  console.log(result);//15
    /* 此例中我们只给reduce()方法传入一个回调函数，所以第一次调用回调函数，pre=1，cur=2 ,index=1，
     * 第二次调用回调函数时，pre为第一次调用的返回值，此时pre=3，cur=3。依次类推
     * 特别注意的是，
     *  1.回调函数的第三个参数是第二个参数项的索引,
     *  2.每一次执行回调都会将上一次回调的返回值缓存，并传入下一个回调中。
     */
  ```
  `Array.reduce()` 还可以接受第二个参数，用于指定回调函数的第一个参数。上面的例子中，reduce()方法没有传入第二个参数，所以将数组的第一项作为回调的第一个参数。
  ```javascript
   /* 传入两个参数 */
  const arr = [1,2,3,4,5];
  const result = arr.reduce((pre,cur,index,array) => {
                return pre +cur;
            },10);
  console.log(result);//25
  /*传入的第二个参数定义pre的初始值。然后遍历和一个参数时一样。*/

  ```
  reduceRight()方法除了和reduce()方法遍历的方向不同，其它完全相同。从数组最后一项向第一项遍历
 ## 5. Array.filter()
  对数组中的每一项执行回调，根据回调中定义的规则对这些项进行过滤，返回满足条件的项组成的数组
  ```javascript
  const list = ['dva', 'ddd', 'lhj', 'bd'];
  const filterList = list.filter(item => {
    return item.includes('d'); // 过滤数组中包含 'd' 的项
  }) // => [ 'dva', 'ddd', 'bd' ] 

  ```
  值得注意的是，**这些迭代方法，当数组中有'空值'不会执行回调，undefined会执行**，下面以`Array.map()`为例进行分析
  ```javascript
        let a;
        const newarr = [1,2,3,,5,a]; // =>[ 1, 2, 3, <1 empty item>, 5 ]
        const result = newarr.map((value,index,array) => {
            alert('我执行了');//执行了5次
            return value*2;
        });
        console.log(result);// => [ 2, 4, 6, <1 empty item>, 10, NaN ]

  ```
 
  --------------------------
  冲鸭！！！

