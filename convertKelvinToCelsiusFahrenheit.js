// fazer um conversor de termometros de Kelvin/Celsius/Fahrenheit

// o valor de kelvin é uma constante
const kelvin = 293;

//vai converter kelvin para celsius
const celsius = kelvin - 273;

// vai converter o valor de celsius para fahrenheit com uma equação constante, mas a variável fahrenheit precisa ser modificável
let fahrenheit = celsius * (9/5) + 32;

// Por sempre se tratar de um valor que vem com vírgula ou ponto utilizamos o .floor
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperture is ${fahrenheit} degrees Fahrenheit`);
