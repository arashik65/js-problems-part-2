const prices =[20000, 16000, 50000, 100000, 1200, 30000, 35000];
function getMin(numbers){
    let min = numbers[0];
    for(num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapset one is' , cheap);