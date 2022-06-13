function SumFromTo(num1,num2){
  let n1=Number(num1);
  let n2=Number(num2);
  let sum=0;
  let i;
  for(i=n1;i<=n2;i++){
    sum=sum+i;
  }
  console.log(sum);
}
SumFromTo('1','5');