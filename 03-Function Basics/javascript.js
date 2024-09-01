// 1
let add7=(a)=>a+7;
console.log(add7(3));

// 2
let multiply=(num1,num2)=>num1*num2;
console.log(multiply(9,6));

// 3
function capitalize(text){
    const lower = text.toLowerCase();
    const firstLetter = lower.slice(0,1);
    const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
    const result = capitalized;
    return result;
};
console.log(capitalize("saDIO manE"));

// 4
let lastLetter=(letter)=>{return res=letter.slice((letter.length)-1,letter.length);}
console.log(lastLetter("abcd"));
