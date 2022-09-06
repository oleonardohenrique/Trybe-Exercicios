// && AND

const currentHour = 1;

let message;

if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!"
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}
console.log(message)

// || OR

let weekDay = "Sábado"

if (weekDay === "Segunda-feira" || weekDay === "Terça-feira" || weekDay === "Quarta-feira" || weekDay === "Quinta-feira" || weekDay === "Sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na trybe :D")
}
else {
    console.log("FiINALMENTE, descanso merecido UwU")
}

// ! NOT

// String

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

// Números

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

// Valores núlos

console.log(!null); // true

// Valores indefinidos

console.log(!undefined); // true