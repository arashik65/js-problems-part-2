
//number type check
function multiplay (num1 , num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
    return 'please provide a number';
  }

    const mult = num1 * num2 ;
     return mult;
    
}
const result = multiplay('5','seven');
// console.log(result);

//string type check
function fullName (first, second){
    if(typeof first!=='string'){
        return 'First name should be a strng';
    }
   else if (typeof second!== 'string'){
    return 'Second Name Should be a string';
   }
   const full =first + ' ' + second;
    return full;
}
const full = fullName('Ashikur', 'Rahman');
// console.log(full);

//object type check
function getPrice(product){
    if(typeof product!== 'object'){
        return 'please provide an object';
    }
    console.log(typeof product);
    const price = product.price;
    return price ;
}
// const price = getPrice({name: 'Brush', price:35, color: 'blue'});
const price = getPrice(5);
// console.log(price);

//array type check
function getSecond(numbers) {
    // console.log(typeof numbers); java script e array o ekti object tay array type of korse bole eta object dekhasse 
    if(Array.isArray(numbers) === false){
        return 'please provide an array';
    }
    const second = numbers[1];
    return second;
}
const second = getSecond([1,2,3,4,5]);
console.log(second);