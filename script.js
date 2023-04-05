// Q1
function add(num1, num2, call) {
  let sum = num1 + num2;
  call(sum);
}
function result(show) {
  console.log(`The result is: ${show}`);
}
add(12, 2, result);

// Q2:-

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
        console.log("4");
        setTimeout(() => {
          console.log("5");
          setTimeout(() => {
            console.log("6");
            setTimeout(() => {
              console.log("7");
            }, 7000);
          }, 6000);
        }, 5000);
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

// Q3
// console.log('Q3')
const displayNum = (dealy, func) => {
  return  new Promise((resolve, reject )=>{
    if(func){
      setTimeout(()=>{
        resolve(func());

      },dealy)
    }
    else{
      reject('Enter a number');
    }
  })
}
let count=0;
displayNum(0,()=>console.log('number printed'))
.then(()=>{
  return displayNum(1000,()=>console.log(++count))
})
.then(()=>{
  return displayNum(2000,()=>console.log(++count))
})
.then(()=>{
  return displayNum(3000,()=>console.log(++count))
})
.then(()=>{
  return displayNum(4000,()=>console.log(++count))
})
.then(()=>{
  return displayNum(5000,()=>console.log(++count))
})
.then(()=>{
  return displayNum(6000,()=>console.log(++count))
})
.then(()=>{
  return displayNum(7000,()=>console.log(++count))
})
.catch(err => console.log(err));


// Q4:-


function myPromise(marks){
  return new Promise((resolve,reject)=>{
    if(marks>80){
      resolve('first class');
  }
  else{
      reject('Promis rejected');
  }
  
  })
}
myPromise()
.then(result => console.log(result))
.catch(err => console.log(err));

myPromise(89)
.then(result => console.log(result))
.catch(err => console.log(err));

// Q5

function myFunction(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}

function callMe() {
  console.log('I am callback function');
}
myFunction('rushi', callMe);

// Q6
function hellFunc(alpha, dealy, callBack){
  setTimeout(() => {
      console.log(alpha);
      callBack()
  },dealy);
}
function callHell(){
  hellFunc("R", 2000, () => {
      hellFunc("U", 3000, ()=> {
          hellFunc("S", 1000, ()=> {
              hellFunc("H", 6000, ()=> {
                  hellFunc("I", 5000,()=>{})
              })
          })
      })
  })
}
callHell();

// Q7
function displayName(latters, delay){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('fuction run successfully');
      console.log(latters);

    },delay)
  })
  
}
function calldisplayName(){
  displayName('Name printing started',1000)
  .then(()=> displayName('R',1000))
  .then(()=> displayName('u',2000))
  .then(()=> displayName('s',3000))
  .then(()=> displayName('h',4000))
  .then(()=> displayName('i',5000))
}
calldisplayName();

// Q8
function displayName2(latters, delay){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('fuction run successfully');
      console.log(latters);

    },delay)
  })
  
}
async function calldisplayName2(){
  displayName2('Name printing started using await',1000)
  await displayName('R',3000)
  await displayName('u',2000)
  await displayName('s',1000)
  await displayName('h',4000)
  await displayName('i',2000)
}
calldisplayName2();

// Q9
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 10000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 11000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  },12000);
});

Promise.all([promise1, promise2, promise3])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });


