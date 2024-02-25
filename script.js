// // let d = [30,40,50,60,70];
// // let b = d;
// // b = [23,4,5]
// // // console.log(d);
// // // console.log(b);


// // let obj = {name : "mahin"}
// // let obj2 = obj;
// // obj2 = {name : "antor"}
// // // console.log(obj)
// // // console.log(obj2)



// let a =  "0";

// if(a){
//     console.log("Truthy value")
// }else{
//     console.log("Falsy value")
// }

// const nameMAHUN= [3434]
// // console.log(nameMAHUN)


// // closoure
// function closoure(){
//     let x = 0;
//    function naem (){
//         x++;
//         return x;

// }
// naem()
// }
// // let clo1 = closoure();
// // let clo2 = closoure();
// // let clo3 = closoure();
// // let clo4 = closoure();
// // clo1()
// // clo1()
// // clo1()
// // clo1()
// // clo1()
// // console.log(clo1())
// // console.log(clo4())

// // console.log(closoure());



// let n = 49;
// let b = n;
// n = 29;
// console.log(b, n);


// let onf333 = {name : "mahin"};
// // let onf4444 = onf333;
// //     onf4444 = {age : 34}; 
// // // console.log(onf333, onf4444)

// // const objects = {
// //     name : "mahin",
// //     age : 54,
// //     acount : "bl"
// // }
// // // console.log(objects)
// // let {name, ...rest} = objects;
// // // console.log(name)
// // // console.log(rest)



// // pass by value 
// let a = 32;
// let b = a + 3;
// a = 10;
// // console.log(a, b)




// // undefined
// let und;
// // console.log(und)

// function second (a,b){
//     let total  = a + b

// }
// // console.log(
// // // second()
// // // )

// // function third (a){
// //     console.log(a)
// // }
// // // third()
// // let aaa = true;
// // console.log(aaa)


// function argumentA(a,b){
//     if(a > 10 || b < 3){
//         return 
//     }
// //     return a + b
// // }
// // console.log(
// // argumentA(4, 1)
// // )


// // const obj = {
// //     naem : "majin",
// //     age :34,
// //     hello : "wow:"
// // }
// // // console.log(obj.ban)
// // let array = [1,3]
// // delete array[1]

// // // console.log(array)


// // scope 
// let aaaa = true;
// function scopes(aaaa){
//     if(aaaa){
//         const scope = 23;
//     }
// console.log(scope)

// }
// // scopes(aaaa)


// // closure
// function clousers (){
//  let clo = 10;
//  return function (){
//     clo += 10;
//     return clo;
//  }   
// }
// let clou = clousers()

// // console.log(clou())

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//    return name; // use variable declared in the parent function
//   }

//   console.dir(displayName())
// }
// init();


// function makeSizer(size) {
//     return function () {
//         document.body.style.fontSize = `${size}px`;
//     };
// }

// const size12 = makeSizer(12);


function call1() {
    console.log("Callback function 1")
}


function Callback(c) {

}

// Callback(call1)




function gritingHandelar(naem) {
    console.log("Good morning", naem)
}
function gritingHandelar2(naem) {
    console.log("Good morning", naem)
}


function goodEvening(naem) {
    console.log("Good evening", naem)

}


function gretting(grettingHandelar, name) {
    grettingHandelar(name)
}



// gretting(gritingHandelar, "mahin")
// gretting(gritingHandelar2, "Ali ki mora")
// gretting(gritingHandelar2, "Ali ki mora")
// gretting(goodEvening, "sakila")


1/ tell the difference between primitive and not-primitive data types in javascript ?
2/ What are the truthy and falsy values? Give me some examples.
3/ What is the difference beteen null and undefind ?
4/ what are the differences between double equal and tripel equla ?
5/ what is scope in javascript?
6/Define block scope and global scope?
7/ What is hoisting in javascript?
8/ How to use the javacript Callback function?
9/Explain closure in javascript ?
10/ Wxplain passed by value and passed by regerence?