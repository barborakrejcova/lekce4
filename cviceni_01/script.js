//Cviceni 1 - Film

/*
V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů).
Proveďte následující úkoly.

Vypište do stránky počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vypište z názvu prvních pět písmen.
Vypište z názvu posledních pět písmen.
*/

const title = "Harry Potter";

console.log(title.length);
console.log(title.toUpperCase());
console.log(title.slice(0, 5));
console.log(title.slice(7, 12));