const isDog = true;
const text = isDog ? "pat, pat" : "find me a dog to pat!";
console.log("1)", text);

//2
const speedLimit = 50;
const yourSpeed = 80;
const speed =
    yourSpeed >= 50
        ? `you're going too fast!`
        : `You're driving below the speed limit, Oma`;
console.log("2)", speed);

//3
const age = 21;
const drinking = age <= 16 ? "serve butter beer" : "serve beer";
console.log("3)", drinking);

//4
const isStudent = 12;
const ticket = isStudent <= 14 ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log("4)", ticket);

//5
const okMarie = true;
const output = "cake" ? "Let them eat cake" : "Oh, bother";
console.log("5)", output);

//6
const num1 = 30;
const num2 = 939;
const num3 = 40.9;
const even1 = num1 ? num1 + " is even" : num1 + " is odd";
const even2 = num2 ? num2 + " is odd" : num2 + " is even";
const even3 = num3 ? num3 + " null" : num4 + " null";
console.log("6)", even1);
console.log("6)", even2);
console.log("6)", even3);
