var findKthPositive = function(arr, k) {
  let missing = [];
  let i=1;
  while(missing.length<k){
    if(arr.indexOf(i)===-1){
      missing.push(i)
    }
    i++
  }
  return missing[k-1]
};

console.log(findKthPositive([2,3,4,7,11], 5))
//[2,3,4,7,11], k=5;

//[1, 5, 6, 8, 9]