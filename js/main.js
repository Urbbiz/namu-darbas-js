/*Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/


const adomoAmzius= 4;
const linosAmzius= 37;
const andriausAmzius= 36;

console.log(adomoAmzius);
console.log(linosAmzius);
console.log(andriausAmzius);

/*Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const vaikoVardas= 'Adomas';
const mamosVardas= 'Lina';
const tevoVardas= 'Andrius';

console.log(vaikoVardas);
console.log(mamosVardas);
console.log(tevoVardas);

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/

const seimosNariuAmzius=[ 4, 1, 36, 37, 58];
console.log(seimosNariuAmzius);

const dienos=[1, 2, 3, 4, 5];
console.log(dienos);

const gimimoMetai= [1950, 1958, 1984, 1086, 2008];
console.log(gimimoMetai);

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const vardai=['Adomas', 'Lina', 'Andrius', 'Niga', 'Viktoras'];
console.log(vardai);

const pavardes=['Urbonai', 'Dauksai', 'Zemaiciai', 'Azuolaiciai', 'Kowalefskiai'];
console.log(pavardes)

const zodiakas=['Avinas', 'Liutas', 'Vandenis', 'Dvyniai', 'Vezys'];
console.log(zodiakas);

// Veiksmai su kintamaisiais

/*1.	Susumuoti visus skaičiaus tipo kintamuosius
1.	Rezultatą išvesti į console*/

const adomoPinigai= 4;
const linosPinigai= 37;
const andriausPinigai= 36;
const piniguSuma= adomoPinigai + linosPinigai + andriausPinigai;

console.log(piniguSuma);

/*0.	Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
1.	Rezultatą išvesti į console*/

const berniukoVardas= 'Adomas';
const mergaitesVardas= 'Lina';
const vyroVardas= 'Andrius';
const visiVardai= berniukoVardas +' ' + mergaitesVardas +' '+ vyroVardas;
console.log(visiVardai);

/*0.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1.	1-2+3-4+5
2.	Rezultatą išvesti į console*/
const skaiciai = [1,2,3,4,5,];
console.log(skaiciai);

let suma= skaiciai[0];
suma = suma - skaiciai[1];
suma = suma + skaiciai[2];
suma = suma - skaiciai[3];
suma = suma + skaiciai[4];

console.log(suma);




/*const atsakymas = skaiciai[0] - skaiciai[1]+skaiciai[2]-skaiciai[3]+skaiciai[4];
console.log(atsakymas);*/


/*0.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/
const klasiokai=['Adomas', 'Lina', 'Andrius', 'Niga', 'Viktoras'];

const eileNuoGalo= `${klasiokai[4]}, ${klasiokai[3]},
 ${klasiokai[2]}, ${klasiokai[1]}, ${klasiokai[0]}`;
console.log(klasiokai);
console.log(eileNuoGalo);











