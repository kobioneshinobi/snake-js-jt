// rappel des types de variables

// booleans
console.log(true);
console.log(false);

// numbers
console.log(5);

// strings
console.log('Hello Kobi');

// undefined = déclarer une variable sans lui donner de
// valeur, JS lui donne cette valeur
console.log(undefined);

// null = déclarer une variable en lui donnant une valeur
// mais la remettre à zéro avec cette valeur
console.log(null);

// objects (array, ...)
console.log({name: 'Kobi'});

// hoisting de fonction addition : JS hisse la
// déclaration de fonction en haut de la page car il va
// lire toute la page et remettre les décla en haut
addition(5,7);

function addition(a,b) {
    console.log(a + b)
}

// hoisting de variable = undefined, il remonte la variable
// mais pas la valeur (ne fonctionne qu'avec var et pas let)
console.log(hoistingVar);

var hoistingVar = 5;

// types primitifs et les objets
// primitif
let x = 5;
console.log(x);
x = 6;
console.log(x);
