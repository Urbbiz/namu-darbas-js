/* per diena su auto nuvaziuoji 30km, kiek nuvaziuosi per 30 dienu?   */ 


console.log ('naujas uzdavinys');

const kmKiekis = 30;
const dienu = 30;
let diena =0;
let dienosSuma= 0; /*kmKiekis * diena = sienosSuma */ 

for (let i=1; i<=dienu; i++){
    diena= i;
    dienosSuma= kmKiekis * diena
    console.log(`Po ${diena} dienos nuvaziavo ${dienosSuma} km.`)
   

}

console.log ('Uzduotis isspresta')

/* Sukurti daugybos funkcija is dvieju. skaiciu*/ 


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