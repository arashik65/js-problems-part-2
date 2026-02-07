function wordFrequency(sentence){
   let words = sentence.split(" ");
   let wordCount = {};
//   console.log(words);
   for(let word of words){
    // console.log(word);
    let wordLowerCase = word.toLowerCase();
    if(wordCount.hasOwnProperty(wordLowerCase)){
        wordCount[wordLowerCase]++;
    }
    else{
        wordCount[wordLowerCase]= 1;
    }
    
   }
   return wordCount;
}
let output =wordFrequency('I love JS and I love coding and js is fun FUN');
console.log(output);