function longestWord(word) {
    var sentence = word.split(' ');
      let sum =0
      let longest ='';
      for (let i=0; i <sentence.length;i++){
      let characters = sentence[i];
        if (characters.length >= sum) {
        sum = characters.length;
          longest =characters;
        }
      }return longest
    }
    console.log(longestWord('The dog jumped over the shipyard fence'))
    function shortestWord(word){
    var sentence =word.split(' ');
      let sum = 5996
      let longest = ' ';
      for (let i =0; i< sentence.length;i++){
        let characters = sentence[i];
      if (characters.length <= sum){
        sum = characters.length;
        longest = characters;
      }
      }return longest;
    }
    console.log(shortestWord('The dog jumped over the shipyard fence'))
    
    
    function wordLengths(word){
    var sentence =word.split(' ');
      let arr =sentence.map(w => w.length);
      let sum =0
      for (let i=0;i<arr.length; i++) {
      sum =sum+ arr[i]
      }return sum
    }
    console.log(wordLengths('The dog jumped over the shipyard fence'))
