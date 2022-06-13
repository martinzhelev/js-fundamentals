function stringLength(input){
  let firstElement=input[0];
  let secondElement=input[1];
  let thirdElement=input[2];
  let firstLength=firstElement.length;
  let secondLength=secondElement.length;
  let thirdLength=thirdElement.length;
  let sumLen=firstLength+secondLength+thirdLength;
  let avgLen=sumLen/3;
  console.log(sumLen);
  console.log(Math.floor(avgLen));
}
stringLength(["pasta","5","22.3"]);