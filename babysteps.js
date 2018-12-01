const process=require("process")

/*{process.argv.filter((el,i) =>{
  if(el=='--title'){title=process.argv[++i]}
  }
  )};*/
  var sum=0;
var args=process.argv.filter((el,i)=>{
  if (i>1){return el}
  
})
args.map((el)=>{sum=sum+Number(el)})
  console.log(sum)

