console.log('namu darbas')

/* suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 - 0
0 - 4
0 - 100
574 - 815
-50 - 50
-70 - 30

*/

const pradzia = 0;
const pabaiga = 100;
let rez = 0;
let suma = 0;

for (let i =pradzia; i<= pabaiga; i++) {
    suma= i; 
    rez = rez+suma;
    
}
console.log(rez); 

/* panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”

 */
const raides = `abcdef`;
let rezultatas = '';



for ( i=raides.length-1; i>=0; i--){
rezultatas= rezultatas +raides[i];
}

console.log(rezultatas); 


/*Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.

*/ 

const daliklis = 3;  /* IS KIEK DALINAM*/ 
const pirmasIntervalas = 0; /* PIRMAS INTERVALO SKAICIUS*/
const antrasintervalas = 11;  /* ANTRO INTERVALO SKAICIUS*/
let kiekis = 0; /* SKAICIU KIEKIS KURIE DALINASI BE LIEKANOS*/

for (let i = pirmasIntervalas;  i<= antrasintervalas; i++) {
    if (i % daliklis===0 ) {
        kiekis = kiekis + 1
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai`);

const daliklis2 = 5
const pirmasIntervalas2 = 0;
const antrasintervalas2 = 11;
let kiekis2 = 0;

for (let i = pirmasIntervalas2;  i<= antrasintervalas2; i++) {
    if (i % daliklis2===0 ) {
        kiekis2 = kiekis2 + 1
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${daliklis2} yra ${kiekis2} vienetai`);

const daliklis3 = 7;
const pirmasIntervalas3 = 0;
const antrasintervalas3 = 11;
let kiekis3 = 0;

for (let i = pirmasIntervalas3;  i<= antrasintervalas3; i++) {
    if (i % daliklis3===0 ) {
        kiekis3 = kiekis3 + 1
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${daliklis3} yra ${kiekis3} vienetai`);




