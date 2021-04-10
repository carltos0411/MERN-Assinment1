let n = 21982;
var count = 0 ; 
while( n!= 0 )
{
    count++ ;
    n = parseInt(n/10) ; 
    
}
console.log("The total digits in number n is " + count) ;