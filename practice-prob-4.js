const twoArray = (array1, array2) =>{
  let newArray = [];
  newArray.push(...array1, ...array2);

  return Math.max(...newArray);
}


console.log(twoArray([7,4,-22,1], [1, 7, 11, 7, 2]));