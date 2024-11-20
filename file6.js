const products=[
    {id:1,name:'apple iphone 14 pro',price:1600},
    {id:2,name:'samsung aiux',price:1200},
    {id:3,name:'oppo note 11',price:1000},
];
products.map((product,index)=>{
    console.log(`product card:${index+1}`);
    console.log(`${product.id}`);
    console.log(`${product.name}`);
    console.log(`${product.price}`);

});



/*const numbers=[1,2,3,4,5,6,7,8,9];
const squreNumbers=numbers.map((number)=>{
return number * number;
});

console.log(squreNumbers);*/


/*const numbers=[1,2,3,4,5,6,7,8,9];
const squrenumbers=[];
numbers.forEach((number)=>{
    squrenumbers.push(number*number);
});
console.log(squrenumbers); */

/*const numbers=[1,2,3,4,5,6,7,8,9];
const squreNumbers=[];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    squreNumbers.push(numbers[index] * numbers[index]);
}
console.log(squreNumbers);*/



// TODO- Higher order built in function-forEach
/*const persons=['Alex','Tim','Cook','Arren','Warren'];
for (let index = 0; index < persons.length; index++) {
    const element = persons[index];
    console.log(persons[index]);
};
persons.forEach((person,i)=>{
    console.log(`${i}: ${person}`);

})*/


//.?Higher order function=> calculate function
//.?Callback function=>operation function

/*const calculate = (num1,num2,operation)=>{
    return operation (num1,num2);
};
const add =(num1,num2)=>{
    return num1+num2;
};
const sub=(num1,num2)=>{
    return num1-num2;
};
const multiply=(num1,num2)=>{
    return num1 * num2;
};
const divided=(num1,num2)=>{
    return num1/num2;
};
const mode =(num1,num2)=>{
    return num1 % num2;
};
let result= calculate(10,20,add);
console.log(result);
result=calculate(10,5,sub);
console.log(result);
result=calculate(10,5,multiply);
console.log(result);
result=calculate(10,5,divided);
console.log(result);
result=calculate(10,5,mode);
console.log(result);*/