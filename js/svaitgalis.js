/*console.log ('Penktadienis');


function daugyba ( mokestis, menesis) {
// const mokestis = 70;
// const menesiu = 12;
// let menesis = 1;
// let suma = 0;

if( typeof mokestis !== 'number') {
    console.log(`ERROR: pirmas kintamasis nera skaicius`);
    return;
}

if(typeof menesis !== 'number'){
    console.log (`ERROR: antras kintamasis nera skaicius`);
    return;
}
if(isNaN(mokestis)){
    console.log(`ERROR: pirmas kintamasis nera skaicius`);
    return;
}

if (isNaN(menesis)){
    console.log(`ERROR: antras kintamasis nera skaicius`);
    return;
}

for(i=menesis; i<=menesis; i++){
    menesis = i;
    suma = mokestis * menesis;
    console.log(`per ${menesis} men viso sumoketa ${suma} pinigu `)
}
}

daugyba (70, 12);
daugyba ('b', 30);
daugyba (50, 'a');
daugyba (10, 30);
daugyba (NaN, 12);
daugyba (17, NaN);
daugyba (10,5);

console.log('---------------');

/*
Einame per zodziu sarasa
    Pasiimu viena konskretu zodi
    pasiruosiu kintamaji naujam atvirkstiniam zodziui
    Einu per to zodzio raides
        pasiimu to zodzio raide
        pasidedu is priekio atvirkstiniam zodziui
    atspausdinu atvr. zodi



const style  = ['rock', 'punk', 'metal', 'clasic', 'pop'];


for(let i=0; i<style.length; i++){
    const word = style[i];
    let styleBackward = '';
  

for (let i=0;i<word.length; i++){
    const letter =word[i]
    styleBackward = letter + styleBackward; 
}
console.log(styleBackward)
}

const miestai = ['Vilnius','Druskinikai','Kaunas','Klaipeda'];


let sarasasAtbulai= ',';

for(let i=0; i<miestai.length; i++){
const miestas = miestai[i];
let raide ='';
sarasasAtbulai= ','+miestas +sarasasAtbulai;


}
console.log(sarasasAtbulai);


const vardai =['Andrius','Adomas','Lina'];
let vardaiAtbulai= '';

for(let i=vardai.length-1; i>=0; i--){
    const vardas = vardai[i];
    vardaiAtbulai= vardaiAtbulai+vardas+',';
}
console.log(vardaiAtbulai);
*/

function uzmokestis (list){
 const daugyba = list *1;
 console.log(daugyba);

    if (list.length === 0) {
         console.log(`ERROR: sarasas yra tuscias`);
         return;  
    }
let suma = 0;     /*uzmokestis+uzmokestis*/ 
let vidurkis= 0; /*suma / uzmokesi.length= vidurkis  */
// let daugyba =0;
for(i=0; i<list.length; i++){
    suma= suma+list[i];  
    
}
vidurkis = suma / list.length;
// daugyba= suma *1;
// console.log(daugyba);

if(isNaN(suma)){
    console.log(`ERROR: saraso vienas is ivesciu nera skaicius`);
    return;
}
if(suma ===0){
    console.log(`ERROR: ivesties suma yra lygi nuliui `);
    return;
}

console.log(`Pazymiu suma yra ${suma} ir padalinus is ${list.length}, gauname vidurki ${vidurkis}`);
}
uzmokestis([5, 10, 5, 10]);
uzmokestis([8, 10, 9, 10]);
uzmokestis([5, 10, 5, 10, 6, 8, 2, 7]);
uzmokestis(["b", 10, 5, 10]);
uzmokestis([]);
uzmokestis([0]);
