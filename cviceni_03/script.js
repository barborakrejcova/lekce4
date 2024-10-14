 //Cviceni 3 - Registrace na ockovani

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
