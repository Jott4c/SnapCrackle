function snapCrackle (maxValue) {
    let result = []
    for (i = 1 ; i <= maxValue ; i++){
        if(i % 2 !== 0 && i % 5 === 0){
            result.push('SnapCrackle')
        }else if ( i % 2 !== 0 ){
            result.push('Snap')
        }else if (i % 5 === 0){
            result.push('Crackle')
        } else {
            result.push(i)
        }
    }return result.join(', ')
}



function snapCracklePrime (maxValue){
    let result = []
    for (i = 1 ; i <= maxValue ; i++){
     if(isPrime(i)){
        if(i % 2 !== 0 && i % 5 === 0){
            result.push('SnapCracklePrime')
        }else if ( i % 2 !== 0 ){
            result.push('SnapPrime')
        }else if (i % 5 === 0){
            result.push('CracklePrime')
        } else {
            result.push('Prime')
        }
     }else{ 
        if(i % 2 !== 0 && i % 5 === 0){
            result.push('SnapCrackle')
        }else if ( i % 2 !== 0 ){
            result.push('Snap')
        }else if (i % 5 === 0){
            result.push('Crackle')
        } else {
            result.push(i)
        }}
    }return result.join(', ')
}


function isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1 ;
  };

  console.log(snapCrackle(10))