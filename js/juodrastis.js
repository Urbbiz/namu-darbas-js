
/*
const kiek = 5;

for (let i=0; i<kiek; i++) {

    console.log(`Labas rytas`);

}




const kartai = 12

for (let i=0; i<kartai; i++) {
    console.log(`menesiu`);
}

const kiekis = 17

for (let i=10; i<=kiekis; i++) {

    console.log(`uzrasyk tiek kartu sita sakini`);
}

const pasizadejimai =120

for (let i=1; i<=pasizadejimai; i++) {
    
    console.log(`atsiprasau`);
}

const kiekiai = 7

for(let i=0; i<=kiekiai; i++) {
    
    console.log(`baravykas`, i)


}

let number = 7;
console.log(number);

number++
console.log(number);

number++
console.log(number);


const skaiciukai = 4;

for (let i=0; i<skaiciukai; i++) 
{
    console.log(`uzkurk ugnele`, i)
}

const masinos = 5;

 for (let i=0; i< masinos; i++) {
     console.log(`garazo klientai`, i)

 }

 const bananai = 7;

 for (let i=0; i<bananai; i++) {
     console.log (`isspausdino sita sakini`, i)

 }*/

//  console.log(`----------------------------------------`);

 /*
jeigu kas menesi zmogus uzdirba 5000, tai kiek jis bus tures pajamu per 12 menesiu
 */

/*const alga = 5000;
const menesiu = 12;
let pajamos = 0;


// const saskaita= pajamos + alga;


for (let i=1; i<= menesiu; i++) {
    pajamos= alga * i;
console.log(`${i})${pajamos} pinigu`)
}
console.log(`pabaiga`);

const dienu = 30;
const menesiu = 12;
let suma = 0;

for (i=0; i<=menesiu; i++){
    suma= dienu* i;
console.log(`po ${i} menesiu yra ${suma} dienu`)

}
console.log(`pabaiga!`);

const baravyku = 60;
const dienos= 30;
let kiekis = 0;

for (i= 0; i<= dienos; i++){
    kiekis= i*baravyku;
    console.log(` po ${i} d turi pririnkes ${kiekis} baravyku `)
}


const uzsikretusiu = 100;
const dienu= 7;
let viso = 0;

for(i=0; i<= dienu; i++){
    viso = i * uzsikretusiu

    console.log(`${i} d. ${viso} serganciuju`)
}

const mokestis = 15;
const menesiu = 12;
let sumoketa = 0;

for ( i = 1; i <= menesiu; i++) {
    sumoketa= sumoketa + mokestis
    console.log(`po ${i}men isleista abonimentui ${sumoketa} Eur. `)

}

// parasyti skaicius nuo  10 iki 3 imtinai

for (i= 10; i>= 3; i--){
    console.log(i)

}
console.log(`_________________________`)

/*isvardinti skaicius nuo duotos valandos iki galo


const valanda = 10;
const maxValandu = 12;

for(i= valanda; i<= maxValandu; i++){ 
    console.log(i)
}
*/
/* duotas miestu sarasas. Isvardinti kiekviena aplankyta miesta.
Spausdiname; "Aplankiau; Miesto pavadinimas."*/

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Druskininkai', 'Vilkavisis']


for (let i=0; i< miestai.length; i++ ){
const miestoPavadinimas = miestai[i]
    console.log(`"Aplankiau; ${miestoPavadinimas}."`);
}

const nuo = 0;
const iki =4;
let rezultatas =0;
let suma = 0;

for(i=nuo; i<=iki; i++){
  suma=i;
  rezultatas= rezultatas+suma;
}
console.log(rezultatas);

const savaiciu = 4;
const menesiu = 12;
let savMen = 0;
let menesis=0;

for (let i=1; i<=menesiu; i++){
  menesis=i;
  savMen= menesis * savaiciu;
  console.log(`${menesis}men yra ${savMen} savaiciu`)

}
















