// Diz-se que uma linguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra variável

const x = 3;
const y = function (txt) {
  return `This is the text: ${txt}`;
};
const z = () => console.log("=>");

console.log(x);
console.log(y("Hello"));
z();
