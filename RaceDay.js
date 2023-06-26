// Control flows (conditionals) and if/else statements

let numCorredor = Math.floor(Math.random() * 1000);
let antecipado = true;
let idade = 18;


// criar um controle de flow que checa se o corredor é adulto e registrado anteriorimente.

if(antecipado && idade > 18){ // não precisa especificar se antecipado é true ou false porque a variável já é do tipo boolean
    numCorredor += 1000;
}

// criar um controle de flow separado que vai checar a idade e o registro para determinar a corrida, para corredores abaixo de 18 anos a corrida será às 9:30am, incluindo o numCorredor deles
if(antecipado && idade > 18){
    console.log(`Sua corrida começará às 9:30am, seu número de corredor(a) é: ${numCorredor}.`);
} 
else if(!antecipado && idade > 18){
    console.log(`Sua corrida começará às 11:00am, seu número de corredor(a) é: ${numCorredor}.`)
} 
else if(idade < 18){
    console.log(`Sua corrida começará às 12:30am, seu número de corredor(a) é: ${numCorredor}.`)
}
else {
    console.log('Por favor, aproxime-se a mesa de registro.')
}
