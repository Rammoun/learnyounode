const process=require("process")
const fs=require("fs")
const path = require('path');
const promisify = require('util').promisify;
const readdirP = promisify(fs.readdir);


/*var txt=fs.readFile(process.argv[2]).toString();
txt=txt.split('\n')
console.log(txt.length-1)/*
fs.readFile((process.argv[2]).toString(), function (err, data) {
  if (err) throw err;
  console.log(data.toString().split('\n').length-1);
});*/
//console.log(process.argv)
/*const list=(arr)=>{  
  var filter=[];
  fs.readdir(arr[2],function (err, data) {
    if (err) throw err;
    //console.log("this is data"+data);
    else {data.map((el)=>{
      if (path.extname(el)==='.md'){
        filter.push(el); //console.log(el)
      }
    })}
    //console.log(filter.length+'\n'+filter+'***'+filter[1])
  });
  return filter;
}*/
module.exports=function list(arr){  
  var filter=[];
  fs.readdir(arr[2],function (err, data) {
    if (err) throw err;
    //console.log("this is data"+data);
    else {data.map((el)=>{
      if (path.extname(el)==='.md'){
        filter.push(el); //console.log(el)
      }
    })}
    //console.log(filter.length+'\n'+filter+'***'+filter[1])
  });
  return filter;
}





// const list=(arr)=>{  
//   var filter=[];
//   var data=fs.readdirSync(arr[2])
//     //console.log("this is data"+data);
//     /*filter=*/data.map((el)=>{
//       if (path.extname(el)=='.md'){
//         filter.push(el);
//       }
//     })
//   //});
//   //console.log(filter)
//   return filter;
// }

// module.exports.list=list;