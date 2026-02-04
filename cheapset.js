
//minimum price
const phones = [
    { name: 'samsung' , price: 20000, camera: '12mp', color: 'black'},
    { name: 'xoami' , price: 18000, camera: '12mp', color: 'black'},
    { name: 'oppo' , price: 30000, camera: '12mp', color: 'black'},
    { name: 'iphone' , price: 100000, camera: '12mp', color: 'black'},
    { name: 'walton' , price: 31000, camera: '12mp', color: 'black'},
    { name: 'HTC' , price: 27000, camera: '12mp', color: 'black'},
]

function getCheapesetPhone(phones){

     let min  = phones [0];
    for(const phone of phones){
        if(phone.price < min.price){
            min= phone;
        }
    }
   return min;
}

const cheap = getCheapesetPhone(phones);
console.log('Cheapest min price phone is:' , cheap);



//maximum pice
const phones2 = [
    { name: 'samsung' , price: 20000, camera: '12mp', color: 'black'},
    { name: 'xoami' , price: 18000, camera: '12mp', color: 'black'},
    { name: 'oppo' , price: 30000, camera: '12mp', color: 'black'},
    { name: 'iphone' , price: 100000, camera: '12mp', color: 'black'},
    { name: 'walton' , price: 31000, camera: '12mp', color: 'black'},
    { name: 'HTC' , price: 27000, camera: '12mp', color: 'black'},
]

function getCheapesetPhone2(phones2){

     let max  = phones [0];
    for(const phone of phones2){
        if(phone.price > max.price){
            max= phone;
        }
    }
   return max;
}

const cheap2 = getCheapesetPhone2 (phones2);
console.log('Cheapest max price phone is:' , cheap2);





