/**
 * 0-100 ta trickit ----->100 tk
 * 101-200 ta trickit ----> 90 tk 
 * 200 ta er beshi trickit----70 tk
 */

function discountedPrice(quantity){
    if(quantity<= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return  total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(204);
console.log(total);