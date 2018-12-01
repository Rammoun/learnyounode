const process=require("process")
const fs=require("fs")

/*var txt=fs.readFile(process.argv[2]).toString();
txt=txt.split('\n')
console.log(txt.length-1)*/
fs.readFile((process.argv[2]).toString(), function (err, data) {
  if (err) throw err;
  console.log(data.toString().split('\n').length-1);
});