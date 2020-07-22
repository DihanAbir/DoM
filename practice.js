// =======================================practice start from here 

// function InchToFeat(inch){
//     var feet = inch/12;   
//     console.log("feet = " + parseInt(feet) +"\n" + "ïnch = "+ inch%12);
// }
// InchToFeat(58);
// InchToFeat(248);
// clock fundamental 


// var today = new Date();
// var day = today.getDay();
// console.log(day);
// var minute = today.getMinutes();
// var hour = today.getHours();
// var second = today.getSeconds();
// if ( hour > 12){
//     hour = hour%12;
// }
// console.log("Now the time is : " +hour+ ":" + minute+ ": "  + second + ";");
// var today = new Date();
// console.log(today);


// ================================array

// cars = ["toyota" ,"Lamborgini" ," Rolls-Royals"];
// console.log(cars[2]);
// cars[4] = "volksoyagone";
// console.log(cars);
// var privateCar = Array("hello");
// privateCar.push("its me man");
// privateCar.push("mamma");
// privateCar.push("hold");
// privateCar.push("hold1");
// privateCar.push("hold2");
// privateCar.push("hold6");
// privateCar.push("hold5");
// privateCar.push("hold4");   
// privateCar.push("hold3");
// console.log(privateCar);
// var remove = privateCar.splice(2,2);
// console.log(remove);
// for (var i=0 ; i<5 ; i++){
//     console.log("Name of the cars are : "+ privateCar[i] + "; \n");
// }

// privateCar.shift();
// console.log(privateCar  );
// Multidimentioan array 


//==================================== Calculate a leapYear 

// function leapYear(year){
//     if ( leapYear%4 == 0 && leapYear%100 != 0 || leapYear%400 == 0 ){
//         return true;
//     }
//     else
//     return "This is not a leapyaer"
// }
// leapYear(2020)

// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
// console.log(leapYear(2020))

//====================================find factorial num 

// function factorial(num){
//     calculatedNum = 1;

//     for(var i=1; i<num ; i++){
//         calculatedNum = i*calculatedNum;
//     }
//     return calculatedNum
// }

// console.log(factorial(5))
// function factorial(num){
//     if (num==0){
//         return [1]
//     }
//     else{
//         console.log( "/n" num*factorial(num-1))
//     }
//     return num
// }
// factorial(5)

// Random num generator using random method 
// console.log(Math.random(10));

// function randomNumGenerate(){
//     for ( var i=0 ; i<20; i++ ){
//         console.log(Math.floor(Math.random()*(10-5)+5));
//     }
// }
// randomNumGenerate()


// function reverseString(str){
//     var reverse = "";
//     for (i=0; i<str.length; i++){
//       var char = str[i];
//       reverse = char + reverse ;
//     }
//     return reverse;
//   }
  
//   var result = reverseString("Hello Alien vai brother.");
//   console.log(result);
//   console.log(reverseString('How are you?'));

// swap two number 

(function swap( numberOne , numberTwo ){
  console.log("before swaping two number : First Number = "+ numberOne + ", Second Number = " + numberTwo);
  var a = numberOne;
  var b = numberTwo;
  var temp ;
  temp = a;
  a = b;
  b = temp;
  console.log("After swaping two number : first number = "+ a + ", Second Number = " + b);
  
})(4,7);

