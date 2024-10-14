//Cviceni 3 - Dorucovani

/*
Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
  <p>Pod Stájemi 67</p>
  <p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.
*/

const ulice = prompt("Zadejte ulici");
const cisloDomu = prompt("Zadejte číslo domu");
const mesto = prompt("Zadejte město");
const psc = prompt("Zadejte PSČ");

document.body.innerHTML =
`<address>
 <p>${ulice} ${cisloDomu}</p>
 <p>${psc} ${mesto}</p>
</address>
`