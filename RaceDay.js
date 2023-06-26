/*Aqui está como funciona nosso processo de inscrição. Existem corredores adultos (com mais de 18 anos) e corredores jovens (com menos de 18 anos). Eles podem se inscrever antecipadamente ou tarde. Os corredores recebem um número de corrida e horário de largada com base em sua idade e inscrição.

Número de corrida:

Adultos que se inscrevem antecipadamente recebem um número de corrida igual ou acima de 1000.
Todos os outros recebem um número abaixo de 1000.
Horário de largada:

Participantes adultos correm às 9h30 ou 11h00.
Adultos que se inscrevem antecipadamente correm às 9h30.
Adultos que se inscrevem tarde correm às 11h00.
Participantes jovens correm às 12h30 (independentemente da inscrição).
Mas não planejamos para corredores que têm exatamente 18 anos! Vamos lidar com isso até o final do projeto.

Se você ficar preso durante este projeto ou quiser ver um desenvolvedor experiente trabalhar nele, clique em "Get Unstuck" para assistir a um vídeo com o passo a passo do projeto*/

// Control flows (conditionals) and if/else statements

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;


// criar um controle de flow que checa se o corredor é adulto e registrado anteriorimente.

if(early && age > 18){ // não precisa especificar se early é true ou false porque a variável já é do tipo boolean
    raceNumber += 1000;
}

// criar um controle de flow separado que vai checar a idade e o registro para determinar a corrida, para corredores abaixo de 18 anos a corrida será às 9:30am, incluindo o raceNumber deles
if(early && age > 18){
    console.log(`Race will begin at 9:30am, your race number is: ${raceNumber}.`);
}


