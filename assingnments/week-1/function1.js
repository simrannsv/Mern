//Write a function that recieves 3 number arguments and returns the big number

function largest(a,b,c)
{
    if( a>b && a>c )
    {
        return a;
    }
    else if(b > c && b >a )
    {
       return b;
    }
    else{
        return c;
    }
}
let large=largest(10,20,30)
console.log(large)

