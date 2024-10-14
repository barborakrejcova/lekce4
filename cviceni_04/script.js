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