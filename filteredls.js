const process=require("process")
const fs=require("fs")
const path = require('path');

/*var txt=fs.readFile(process.argv[2]).toString();
txt=txt.split('\n')
console.log(txt.length-1)/*
fs.readFile((process.argv[2]).toString(), function (err, data) {
  if (err) throw err;
  console.log(data.toString().split('\n').length-1);
});*/
//console.log(process.argv)
fs.readdir(process.argv[2],function (err, data) {
  if (err) throw err;
  //console.log(data);
  data.map((el)=>{
    if (path.extname(el)=='.md'){
      console.log(el)
    }
  })
  
});