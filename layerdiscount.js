 /**
  * first 100 ta--->100
  * 101to200------> 90
  * above200------>70
  */

 function layerDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;


     if(quantity <= 100){
    const total = quantity * first100Price;
    return total;
 }
 else if(quantity <= 200){
   const first100Total = 100* first100Price;
   const remainingQuantity = quantity - 100;
   const remaningTotal = remainingQuantity * second100Price;
   const total = first100Total + remaningTotal ;
   return total;
 }
 else {
   const first100Total = 100 * first100Price;
   const second100Total = 100 * second100Price ;
   const remainingQuantity = quantity - 200;
   const remaningTotal = remainingQuantity * above200Price ;
   const total = first100Total + second100Total + remaningTotal
   return total;


 }



 }


 const total = layerDiscountedTotal(500);
 console.log(total);