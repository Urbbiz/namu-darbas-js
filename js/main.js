/*Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console


const adomoAmzius= 4;
const linosAmzius= 37;
const andriausAmzius= 36;

console.log(adomoAmzius);
console.log(linosAmzius);
console.log(andriausAmzius);

/*Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console 

const vaikoVardas= 'Adomas';
const mamosVardas= 'Lina';
const tevoVardas= 'Andrius';

console.log(vaikoVardas);
console.log(mamosVardas);
console.log(tevoVardas);

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

const seimosNariuAmzius=[ 4, 1, 36, 37, 58];
console.log(seimosNariuAmzius);

const dienos=[1, 2, 3, 4, 5];
console.log(dienos);

const gimimoMetai= [1950, 1958, 1984, 1086, 2008];
console.log(gimimoMetai);

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console 

const vardai=['Adomas', 'Lina', 'Andrius', 'Niga', 'Viktoras'];
console.log(vardai);

const pavardes=['Urbonai', 'Dauksai', 'Zemaiciai', 'Azuolaiciai', 'Kowalefskiai'];
console.log(pavardes)

const zodiakas=['Avinas', 'Liutas', 'Vandenis', 'Dvyniai', 'Vezys'];
console.log(zodiakas);

// Veiksmai su kintamaisiais

/*1.	Susumuoti visus skaičiaus tipo kintamuosius
1.	Rezultatą išvesti į console

const adomoPinigai= 4;
const linosPinigai= 37;
const andriausPinigai= 36;
const piniguSuma= adomoPinigai + linosPinigai + andriausPinigai;

console.log(piniguSuma);

/*0.	Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
1.	Rezultatą išvesti į console

const berniukoVardas= 'Adomas';
const mergaitesVardas= 'Lina';
const vyroVardas= 'Andrius';
const visiVardai= berniukoVardas +' ' + mergaitesVardas +' '+ vyroVardas;
console.log(visiVardai);

/*0.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1.	1-2+3-4+5
2.	Rezultatą išvesti į console
const skaiciai = [1,2,3,4,5,];
console.log(skaiciai);

let suma= skaiciai[0];
suma = suma - skaiciai[1];
suma = suma + skaiciai[2];
suma = suma - skaiciai[3];
suma = suma + skaiciai[4];

console.log(suma);




const atsakymas = skaiciai[0] - skaiciai[1]+skaiciai[2]-skaiciai[3]+skaiciai[4];
console.log(atsakymas);


 0.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
const klasiokai=['Adomas', 'Lina', 'Andrius', 'Niga', 'Viktoras'];

const eileNuoGalo= `${klasiokai[4]}, ${klasiokai[3]},
 ${klasiokai[2]}, ${klasiokai[1]}, ${klasiokai[0]}`;
console.log(klasiokai);
console.log(eileNuoGalo);*/

/*console.log ('--------------------------------------------------------')

const mokestis = 100;
const nariu = 10;
let suma = 0;
let narys =0;

for (let i=narys; i<=nariu; i++){
    narys =i;
    suma = i *mokestis;
    console.log(narys, suma);

}
console.log (`${narys} nariai sumokejo ${suma} Eur`)


const miestai= ['Druskininkai','Vilnius','Kaunas']

for (let i=0; i<=miestai.length-1; i++){

console.log(`Aplankiau ${miestai[i]}`);
}

console.log(miestai);

const pradzia=10;
const pabaiga= 12;
let valanda='';

for(let i=pradzia; i<=pabaiga; i++){
   valanda = i;  
   console.log(`nuo ${pradzia} iki ${pabaiga} yra viso ${valanda} valandu`);
}


const valand = 10;
const maxValandu = 12;

for (let val = valand; val <= maxValandu; val++) {
    console.log(val + ' val');
}

console.log('------------');

function sumavimas (a,b){
    const suma = a+b;

console.log(`${a} + ${b} = ${suma}`)

}
sumavimas (5, 14)
sumavimas(20,6);

console.log ('----------------------');

function minusavimas (pirmas,antras,trecias){
    const suma = pirmas-antras-trecias
    console.log(`${pirmas} - ${antras} - ${trecias} = ${suma}`);
}
minusavimas(10,2,2);
minusavimas (100,25,40)

console.log('---------');

function dauginimas(skaicius1, skaicius2){
    const suma = skaicius1 * skaicius2
    console.log(`${skaicius1} padauginta is ${skaicius2} = ${suma}`)

}
dauginimas (10, 5)
dauginimas (7,8);
dauginimas (6,8);
console.log ('----------');

function dalyba (a, b){
    const suma = a / b;
    console.log(`${a} padalinta is ${b} bus lygu ${suma}`);
}
dalyba (10,2)
dalyba (100,7)
dalyba (200,5)
*/ 

console.log ('------');

function skaiciuVidurkis (list){
    let suma = 0;
    let kiekis = list.length;
    let vidurkis = 0;
   
    


    for (let i=0; i<kiekis; i++){
        const skaicius = list[i];
        suma = suma + skaicius;
        vidurkis = suma/kiekis;
        
    }
    


if (kiekis === 0) {
    console.log('Neturi pazymiu...');
} else {
    console.log(`${suma} dalinta is ${kiekis} Vidurkis: ${vidurkis}.`);
}
}

skaiciuVidurkis ([5,10,7,8,4,5,10])
skaiciuVidurkis ([2,4,7,9,10])
skaiciuVidurkis ([]);
skaiciuVidurkis ([2,10]);