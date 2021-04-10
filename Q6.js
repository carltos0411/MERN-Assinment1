let n = 9735 ; 
let temp = n ; 
let reverse  = 0 ; 
while(temp != 0 )
{
    reverse =  parseInt(reverse*10) +  parseInt(temp%10) ; 
    temp = parseInt(temp/10) ;
}
console.log("the reverse of a number " + n + " is " + reverse ) ;