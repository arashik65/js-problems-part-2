const jim = 256;
const tim = 389;
const kim = 168;

if(jim > tim && jim > kim){
    console.log('jim is the ultimate boss');
}
else if (tim > jim && tim > kim){
    console.log('Tim is the boss');
}
else {
    console.log('kim is the kardashians boss');
}


//inside a function
function maxOfThree(num1, num2 , num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3 ;
    }
}

const maxCompare1 = maxOfThree(5,10,20);
const maxCompare2 = maxOfThree(30,40,50);
const maxCompare3 = maxOfThree(60,70,80);
const finalmax = maxOfThree(maxCompare1, maxCompare2, maxCompare3);
console.log(finalmax);


//using math function use kore max 

const max = Math.max(12, 1, 56, 65, 8, 1, 99);
console.log('max isuing Math.max', max);