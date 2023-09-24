// var fruits = ['apple', 'banana', 'orange'];
// var index = fruits.indexOf('banana');
// fruits[1] = 'mango';
// fruits.pop('orange');
// fruits.push('watermelon')
// console.log( index );
// console.log(fruits);

// var me = 85;
// var tom = 66; 
// var jane = 95 ; 
// var peter = 56 ;
// var john = 40 ; 
// var person = john ;

// if (person >= 80 ){
//     console.log( 'you get A gread in exam ');
// }
// else if (person >= 60 ){
//     console.log("you get B grade in exam ");

// }
// else if ( person >= 50 ){
//     console.log('you get C grade in exam ');
// }
// else if ( person >= 40  ){
//     console.log("you get D grade in exam ");
// }
// else if ( person >= 39){
//      console.log("you get F grade in exam")
// }
// else{
//     console.log('you are fail in the exam')
// }

// var number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// for( var i = 0; i < number.length; i++ ){
//     var numbers = number[i]
//     console.log(numbers)
// }

// var num = 113;
// var num2 = 79;
// var num3 = 44;
// if (num > num2){
//     if(num > num3){
//         console.log(num)
//     }
//     else{
//         console.log(num3)
//     }
// }
// else{
//     if(num2 > num3){
//         console.log(num2)
//     }
//     else{
//         console.log(num3)
//     }
// }

// var sid1 = 9;
// var sid2 = 8;
// var sid3 = 9;
// if(sid1 = sid2){
//     if(sid1 = sid3){
//         console.log(sid1, sid3)
//     }
//     else{
//         console.log(sid1, sid2)
//     }
// }
// else{
//     if(sid2 = sid3){
//         console.log(sid2, sid3)
//     }
    
// }
// if(sid1 == sid2 || sid1 == sid3 || sid2 == sid3){
//     console.log('tik ase');
// }
// else{
//     console.log('tik nai')
// }
// var time = 1;
// while( time <= 39){
//     console.log("ajke amar mon valo nei", time);
//     time++;
// }

// var i = 1;

// for ( var i=1; i>10; i++){

// };

// console.log(i);




// var marks = [ 13, 15, 14, 20, 18];

// for(var i=0; i<marks.length; i++){

//  if(marks[i] >=15){

//  continue;

//  }

//  console.log(marks[i]);

// };

// var i = 5;

// for (; i < 5; i++) {

//  console.log(i);

// }

// var are = [ 10 , 39 , 29 , 49 , 57 ]
//  are.unshift(1000);
// are.shift();
// are.includes[29]
// console.log(are);
// console.log(are.slice(2,4)) ;

// var hello = ["Nigeria", "Ghana", "Rwanda"];
// hello.unshift('kenya');
// hello.shift();
// console.log(hello);

// const countries = ["Ghana", "Nigeria", "Rwanda"];

// countries.splice(1, 0, 'Kenya');

// console.log(countries);

// const countries = ["Ghana", "Nigeria", "Rwanda"];

// let newCountries = [].concat("Mali", countries, "Kenya");

// console.log(newCountries); 

// var my = ["Ghana", "Nigeria", "Rwanda"];
// var myn = [].concat("Mali", my, "Kenya");
// console.log(myn);


// let text = "Hello world!";
// let result = text.substring(1, 4);
// console.log(result);


// function buyShinggara(price , money, quantiti ){
//     console.log('mama singgara deo ar koto hoise rekhe bakita back koro' );
//     var total = price * quantiti;
//     if(total < money){
//         var totalPrice = price * quantiti;
//         var backMoney = money - totalPrice;
//         console.log('mama tumi tk back paba ' , backMoney);
//     }
//     else if(total > money){
//         var totalPrice = price * quantiti;
//         var giverMoney = money - totalPrice;
//         console.log('mama aro tk dite hobe ', giverMoney );
//     }
//     else{
//         console.log('mama tumi to ar tk paba na ');
//     }
// }


// var shinggaraPrice = 5;
// var needNUM = 20;
// var moneyGive = 1000;
// buyShinggara(shinggaraPrice , moneyGive, needNUM );



// var chart = {
//     book: 12,
//     pen : 33,
//     pc : 34,
//     toys : 35,  
// }
// chart.book= 525;
// console.log(chart);
// chart["book"] = 654;
// console.log(chart);
// var books = "book";
// chart[books]= 154;
// console.log(chart);
// var penCart = chart.pen;
// console.log(penCart);
// var penCart2 = chart["pen"];
// console.log(penCart2);
// var charts = Object.keys(chart);
// console.log(charts);
// var chartsVelu = Object.values(chart);
// var books = Object.keys(chart);
// console.log(books);
// var bookS = Object.values(chart);
// console.log(bookS);


// var bag = {
//     book : 4,
//     pen : 3,
//     notebook : 9, 
//     pencile : 3,
//     waterPort : 1 ,
//     galss : 2
    
// }

// var valu = Object.values(bag);
// console.log(valu);

// var key = Object.keys(bag);
// console.log(key);

// for (var i = 0; i < key.length; i++){
//     var valuse = key[i];
//     var keyse = bag[valuse];

//     console.log(valuse,  keyse);
// }

// for ( var valuName in bag){
//     var keys = bag[valuName];
//     console.log(valuName, keys);
// }

// function year( num ){
//     const number = num % 4;
//     if(number === 0 ){
//         return 'lipi year' ;
//     }
//     else{
//         return "normal year ";
//     }
// }

// const num = 16;
// const ans = year (num);
// console.log(ans);

// function oddNumber (number){
//     let numbers = nu
// }

// const word = "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.";
// const serceh = 'svg';
// const serches = serceh.toLowerCase();
// const upWord = word.toLowerCase();
// const get = upWord.includes(serches);
// console.log(get);

//------------------------------------------------------

// function num (num1 , num2 , num3){

//     const num4 = num.max(num1 , num2, num3);
//     console.log(num4);
// }

// num(10, 20, 30);

// var arrr = [10, 20, 50, 60, 50];
// var max = Math.max(arrr);
// const array = [3, 20, 23, 40, 34, 10];
// const bigNumber = Math.max(...array);
// console.log(bigNumber);





// const num = [ 10, 20, 20, 3,20, 30, 10, 3, 50,60, 10,3,]

// function unicname (num){
//     const unicName = [] ;
//     for( let i = 0; i < num.length; i++ ){
//         const Name = num[i];
//         if(unicName.includes(Name) === false){
//             unicName.push(Name);
//         }
//     }
//     return unicName;
// }


// const ansName = unicname(num);
// console.log(ansName);




// for (let i = 0; i<= 50; i++){
//     if (i )
//     console.log(i , 'Eva apu ' );
// }



// const phones = [
//     { name: "oppo" , camera:  33, price: 100000},
//     { name: 'oppo' , camera:  13, price: 200000},
//     { name: 'oppo' , camera:  33, price: 300000},
//     { name: 'oppo' , camera:  33, price: 1100000},
//     { name: 'poco' , camera:  33, price: 2100000},
//     { name: 'oppo' , camera:  33, price: 1200000},
//     { name: 'oppo' , camera:  33, price: 10000},
//     { name: 'oppo' , camera:  33, price: 1200000},
//     { name: 'oppo' , camera:  33, price: 110000},
//     { name: 'oppo' , camera:  33, price: 1060000},
// ];


// // function chapPhone (phones){
// //     let chapest = phones[0];
// //     for(let i = 0; i<phones.length; i++){
// //         const phone = phones[i]; 
// //         if(phone.price < chapest.price){
// //             chapest = phone
// //         }
// //     }
// //     return chapest;
// // }

// // const buyingPhone = chapPhone(phones);
// // console.log (buyingPhone);




// function bestprice (phonies){
//     let prc = phonies[0];
//     for(let i = 0; i < phonies.length; i++){
//         let phone = phonies[i];
//         if( phone.price < prc.price){
//             prc = phone;
//         }
//     }
//     return prc;
// };

// const buyPhone = bestprice(phones);
// console.log(buyPhone);





// let sum=0; 

// for( let i = 0; i<=3;i++){ 

// sum = sum + i; 

// }



// function cubeNumber(number , cube) {
//     if (typeof number === 'number'){
//         return number ** cube ; 
//     }
//     else{
//         return NaN ;
//     }
// }

// // const input = cubeNumber(10 , 3);


// function matchFinder(firstString, secondString) {
//     
//     if (typeof firstString === 'string' && typeof secondString === 'string' ) {
       
//         return true;
//     } 
        
//     // if (firstString.includes(secondString)) {
      
//     //   return true;
//     // } 
//     // else {
      
//     //   return false;
//     // }
//   }
  
//  

// function matchFinder(input) {
//     if (typeof input !== 'string' || input.includes('double') || input.includes('any')) {
//         return 'Small amount of money'; 
//     }
//     const secondString = 'yourSecondString';
//     const found = input.localeCompare(secondString, undefined, {
//         sensitivity: 'base',
//       }) === 0;
//       return found;  

// }

// const match = matchFinder('yourFirstString')
// console.log(match);

