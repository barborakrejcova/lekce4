//Cviceni 1 - Film

/*
const title = "Harry Potter";

console.log(title.length);
console.log(title.toUpperCase());
console.log(title.slice(0, 5));
console.log(title.slice(7, 12));
*/

//Cviceni 2 - E-maily

/*
const email = prompt("Zadejte e-mail");
const atIndex = email.indexOf("@");

console.log(email.slice(atIndex, ));
document.body.innerHTML = "<p>" + email.slice(atIndex, ) + "</p>";

const userName = email.slice(0 , atIndex);
const domain = email.slice(atIndex, );

console.log(userName);
console.log(domain);

const parsedEmail = {
    userName: email.slice(0 , atIndex),
    domain: email.slice(atIndex, ),
  };

  console.log(parsedEmail.userName);
  console.log(parsedEmail.domain);
  */

  //Cviceni 3 - Registrace na ockovani

/*
  const jmeno = prompt("Zadejte jméno", "Jméno");
  const prijmeni = prompt("Zadejte příjmení", "Příjmení");
  const vek = Number(prompt("Zadejte vek", 20));
  const heslo = prompt("Zadejte heslo", "heslo");

  if (vek >= 65) {
    document.body.innerHTML = "<p>Věk v pořádku</p>";
    if (heslo.length <= 8) {
      document.body.innerHTML += "<p>Slabé heslo</p>";
    }

  } else {
    document.body.innerHTML = "<p>Nízký věk</p>";
  }
    */

  //Cviceni 4 - Cena vstupenky

  const vek = Number(prompt("Zadejte věk"));
  const plnaCena = 12;
  
  let cena;
  if (vek < 6) {
    cena = 0;
  } else if (vek >= 6 && vek <= 26) {
    cena = Math.round(plnaCena * 0.65);
  } else if (vek >= 27 && vek <= 64) {
    cena = plnaCena;
  } else {
    cena = plnaCena * 0.5;
  }

  document.body.innerHTML += "<p>Cena vstupenky: " + cena + "</p>";