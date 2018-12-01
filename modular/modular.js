const process=require("process")
/*const fs=require("fs")
const path = require('path');*/
const mod=require('./module')


var res=mod(process.argv);
//console.log(res)
res.map((el)=>(console.log(el)));