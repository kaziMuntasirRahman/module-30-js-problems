const ara = (array) =>{
  let evenName =[];
  for(const i of array){
    if(i.length % 2 === 0){
      evenName.push(i);
    }
  } 

  return evenName;
}



console.log(ara(["Riaz", "Rishad", "Tafsir ", "Mehedi", "Hakim"]))git