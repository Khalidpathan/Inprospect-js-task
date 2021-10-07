function fibonacci(n)
{
    var num1=0,num2=1;
    var sum=0;
    var temp;
    
    while(num1<=n)
    {
        sum +=num1;
        temp=num1+num2;
        num1=num2;
        num2=temp;
    }
    return sum;
}

var fibonacci_sum=fibonacci(10)
console.log("Sum of fibonacci Series=",fibonacci_sum)
