import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";


const io = readline.createInterface({  input, output });


const result:string = await new Promise((rs,rj) =>{
    io.question("Enter your name: ", (answer) => {
    io.close()
    rs(answer)
})
    
})
console.log(`hello world Mr ${result}`);