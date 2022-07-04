// very easy
var myNum = 22;
var myNum2 = 89;
var difference = myNum2 - myNum;
console.log(`The difference between ${myNum2} and ${myNum} is ${difference}.`)


//easy
var name1 = "Aline";
var name2 = "Adeline";

if (name1.length > name2.length){
    console.log(`${name1}'s name is longer than ${name2}'s name by ${name1.length - name2.length} characters.`)
} else if (name1.length < name2.length){
    console.log(`${name1}'s name is shorter than ${name2}'s name by ${name2.length - name1.length} characters.`)
} else{
    console.log(`${name1}'s name is the same length as ${name2}'s name.`)
}