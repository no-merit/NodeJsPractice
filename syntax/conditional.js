let args = process.argv;
console.log(args[2]);
console.log(args[3]);

process.stdin.on("data",(data)=>{
  console.log(`입력한 값: ${data.toString().trim()}`);
});