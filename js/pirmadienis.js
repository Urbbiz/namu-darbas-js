/* per diena su auto nuvaziuoji 30km, kiek nuvaziuosi per 30 dienu?  


console.log ('naujas uzdavinys');

const kmKiekis = 30;
const dienu = 30;
let diena =0;
let dienosSuma= 0; /*kmKiekis * diena = sienosSuma */ 

// for (let i=1; i<=dienu; i++){
//     diena= i;
//     dienosSuma= kmKiekis * diena
//     console.log(`Po ${diena} dienos nuvaziavo ${dienosSuma} km.`)
   

// }

// console.log ('Uzduotis isspresta')

/* Sukurti daugybos funkcija is dvieju. skaiciu


function daugyba (a,b) {

     if (typeof a !=='number') {
        console.log (`ERROR; Pirmas kintamasis nera numeris` )
         return false;
    }


const suma =  a*b;
console.log (`Padauginus ${a} su ${b} gausime ${suma}`)

}
    
daugyba(5,5)
daugyba ('s',5)
*/

// Apskaiciuoti kiek per metus yra dienu, isskirsciusi i kiekviena menesi jeigu per menesi yra apytikliai 30

function daugyba (dienu, menesiu) {

// const dienu = 30;
// const menesiu = 12;

if (typeof dienu !=='number'){
    console.log( `KLAIDA: pirmas kintamasis nera skaicius`);
    return;
}

if (typeof menesiu !=='number'){
    console.log( `KLAIDA: antras kintamasis nera skaicius`);
    return;
}

if(dienu ===0){
    console.log(`KLAIDA: pirmas kintamasis negali buti lygus : 0`);
    return;

}

if (menesiu === 0){
    console.log(`KLAIDA: antras kintamasis negali buti ;0`);
    return;
}

if( isNaN(dienu) ){
    console.log(`KLAIDA: pirma ivestis nera skaicius`);
    return;
}
let menesis = 1;
let dienuMenesyje = 0; /* dienu * menesis = dienuMenesyje */

for (let i=menesis; i<=menesiu; i++){
    menesis = i;
    dienuMenesyje = dienu * menesis
    

}
console.log (`po ${menesis} men. yra viso ${dienuMenesyje} dienu`);
}

daugyba (30, 12);
daugyba (30, 10);
daugyba (20, 12);
daugyba ("b", 12);
daugyba (30, "a");
daugyba (0, 12);
daugyba (20, 0);
daugyba (NaN, 12);
daugyba (20, NaN);
daugyba (30, 10);
 console.log('---------------');

 const text = 'abcdef';

let back = '';

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    back = letter + back;
}
console.log(back);