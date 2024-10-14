//Cviceni 2 - E-maily

/*
Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
  userName: 'slavomir.ponuchalek',
  domain: 'yahoo.com',
};
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
*/

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
  