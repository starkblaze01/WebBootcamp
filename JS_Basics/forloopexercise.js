console.log("Print all numbers between -10 and 19");

var count=-9;

for(var count=-9;count<19;count++){
    console.log(count);
}

console.log("Print all even numbers between 10 and 40");

for(var count=11;count<40;count++)
{   if(count%2===0)
    {
        console.log(count);
    }
}

console.log("Print all odd numbers between 300 and 333");

for(var count=301;count<333;count++)
{   if(count%2!==0)
    {
        console.log(count);
    }
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

for(var count=5;count<50;count++){
    if(count%5===0 && count%3===0){
        console.log(count);
    }
}