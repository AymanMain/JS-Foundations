const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"



let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
console.log(text);
console.log(part);

let str = "Apple, Banana, Kiwi";
let part1 = str.substr(7,15);
console.log(part1);

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
  }

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
const choice = select.value;

if (choice === "sunny") {
    para.textContent =
    "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
} else if (choice === "rainy") {
    para.textContent =
    "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
} else if (choice === "snowing") {
    para.textContent =
    "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
} else if (choice === "overcast") {
    para.textContent =
    "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
} else {
    para.textContent = "";
}
}
