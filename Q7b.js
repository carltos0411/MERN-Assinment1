let readline = require("readline-sync") ;
let n = parseInt(readline.question("Enter n : ")) ; 
let row = 1 ; 
while(row <= n )
{
    let col = 1 ; 
    while( col <= row )
    {
        process.stdout.write( col + " ") ;
        col++ ; 
    }
    process.stdout.write("\n");
    row++;
}
