function MathOperators(n1,n2,operator){
  let result;
  switch(operator){
    case '+': result=n1+n2; 
      break;
    case '-': result=n1-n2;
      break;
    case '*': result=n1*n2;
      break;
    case '/': result=n1/n2;
      break;
    case '%': result=n1%n2;
      break;
    case '**': result=n1**n2;
      break;
    default: console.log("invalid operator!");
  }
  console.log(result);
}
MathOperators(5,6,'+')