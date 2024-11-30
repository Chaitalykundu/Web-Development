function loveCalculate() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("partnersname").value;
  
    let str = (a+b).toLowerCase();
    console.log(str);
  
    let sumOfAscii = frequencyOfCharacters(str);
  
    let n = str.length;
    let avg = n / 2;
  
    let percentage = (sumOfAscii / (avg*100)) ;
    
  //   percentage = parseInt(percentage);
  
    console.log(typeof percentage);
    
    let result = document.getElementById("result");
    result.textContent = percentage + " %";
    
    console.log(typeof result);
  }
  
  
  function frequencyOfCharacters(str){
  
      let n = str.length;
  
      const countFreq = {}
  
      for(let i of str){
          countFreq[i]=(countFreq[i] || 0) + 1;
      }
  
      const countFreqValue = Object.values(countFreq);
      console.log(countFreqValue);
      
      return countFreqValue;
  }
  
  function sumOfNums(num){
      const num = num.toString();
  
      let i=0, j=num.length -1;
  
      while(i<j){
          let d = perseInt(num[i] = perseInt[j]);
          if(d>=10){
              return d;
          }
          i++;
          j--;
      }
  }
  
  