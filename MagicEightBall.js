/* In this project we will build a Magic Eight Ball using control flow in JavaScript.
The user will be able to input a question, then our program will output a random fortune.
If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.*/

let userName = 'Camila';
const userQuestion = 'Pergunta';
let eightBall = '';
var randomNumber = Math.floor(Math.random() * 8);


userName ? console.log(`Hey! ${userName}!`) : console.log('Hello!');
console.log(userQuestion);

switch(randomNumber){
    case '0' :
        console.log('It is certain');
    break;

    case '1' :
        console.log('It is decidedly so');
    break;

    case '2' :
        console.log('Reply hazy try again');
    break;

    case '3' :
        console.log('Cannot predict now');
    break;

    case '4' :
        console.log('Do not count on it');
    break;

    case '5' :
        console.log('My sources say no');
    break;

    case '6' :
        console.log('Outlook not so good');
    break;
    
    case '7' :
        console.log('Signs point to yes');
    break;
}
