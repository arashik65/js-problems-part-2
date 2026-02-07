function add( num1 , num2){
    return num1 + num2 ;
}
function subtract (num1 , num2){
    return num1 - num2;
}
function multiplay (num1, num2){
    return num1 * num2 ;
}
function divide (num1 , num2){
    return num1 / num2 ;
}
function calculator( a, b, operator){
    if(operator === 'add'){
        const result = add(a,b);
        return result;
    }
    else if (operator === 'subtract'){
        return subtract(a,b);
    }
    else if (operator === 'multiply'){
        return multiplay(a,b);
    }
    else if(operator === 'divide'){
        return divide (a,b);
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'divide' operator is allowed ."
    }
}
const result = calculator(5, 7 , 'add');
console.log(result);