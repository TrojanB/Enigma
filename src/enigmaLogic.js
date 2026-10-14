const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const I = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
const II = "AJDKSIRUXBLHWTMCQGZNPYFVOE"; 
const III = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
const REFLECTOR = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

function obrotWirnika(wirnik, n){
    let przesuniecie = n;
    return wirnik.slice(przesuniecie) + wirnik.slice(0,przesuniecie);
}

//pozycje od wirnikow od lewej do prawej czyli III - II - I
export function szyfrujLitere(litera, pozycje){
    let litera_szyfr = alfabet.indexOf(litera.toUpperCase());
    if (litera_szyfr === -1) return litera; // zabezpieczenie na spacje/błędy

    const III_obrocony = obrotWirnika(III, pozycje[2]);
    const III_alfabet = obrotWirnika(alfabet, pozycje[2]);

    const II_obrocony = obrotWirnika(II, pozycje[1]);
    const II_alfabet = obrotWirnika(alfabet, pozycje[1]);

    const I_obrocony = obrotWirnika(I, pozycje[0]);
    const I_alfabet = obrotWirnika(alfabet, pozycje[0]);
    console.log(III_obrocony);
    console.log(II_obrocony);
    console.log(I_obrocony);

    console.log(alfabet[litera_szyfr], litera_szyfr);

    // --- DROGA W PRZÓD (III -> II -> I) ---
    litera_szyfr = III_alfabet.indexOf(III_obrocony[litera_szyfr]);
    console.log(alfabet[litera_szyfr], litera_szyfr);
    litera_szyfr = II_alfabet.indexOf(II_obrocony[litera_szyfr]);
    console.log(alfabet[litera_szyfr], litera_szyfr);
    litera_szyfr = I_alfabet.indexOf(I_obrocony[litera_szyfr]);
    console.log(alfabet[litera_szyfr], litera_szyfr);

    // --- REFLEKTOR ---
    let refChar = REFLECTOR[litera_szyfr];
    litera_szyfr = alfabet.indexOf(refChar);
    console.log(alfabet[litera_szyfr], litera_szyfr);

    // --- DROGA WSTECZ (I -> II -> III) ---
    litera_szyfr = I_obrocony.indexOf(I_alfabet[litera_szyfr]);
    console.log(alfabet[litera_szyfr], litera_szyfr);
    litera_szyfr = II_obrocony.indexOf(II_alfabet[litera_szyfr]);
    console.log(alfabet[litera_szyfr], litera_szyfr);
    litera_szyfr = III_obrocony.indexOf(III_alfabet[litera_szyfr]);
    console.log(alfabet[litera_szyfr], litera_szyfr);

    return alfabet[litera_szyfr];
}

console.log(szyfrujLitere('C', [0,0,1]));


