const square = (array) =>{
  let sum = 0;
  for(const i of array){
    sum+=i*i;
  }
  return sum/array.length;
}


console.log(square([1,2,3,4,5]));