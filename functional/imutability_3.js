const person = {
  name: "Marie",
  height: 1.6,
  city: "São Paulo",
  address: {
    street: "John Cena",
  },
};

// attribution by reference
// const newPerson = person;

// passing parameters by reference
const changePerson = (person) => {
  const newPerson = { ...person }; // shallow copy
  newPerson.name = "John";
  newPerson.city = "Monte Sion";
  newPerson.address.street = "The Undertaker";
  return newPerson;
};

const newPerson = changePerson(person);
console.log(person);
console.log(newPerson);

let a = 3;
let b = a; // attribution by value

a++;
b--;

console.log(a, b);
