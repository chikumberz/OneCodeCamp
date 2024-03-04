console.log('Object Literals');

const person = {
    first_name: 'Benjamin',
    last_name: 'Taluyo',
    age: 32,
    hobbies: ['reading', 'coding', 'napping'],
    256: 'test',

    greet: function () {
       return  'Hello my name is ' + person.first_name;
    }
}

console.log('Person: ', person);
console.log('Greet: ', person.greet());

person.nationality = 'Filipino';
console.log(person.nationality);

person.introduce = function () {
    console.log(`I am ${person.first_name} ${person.last_name} `)
}
person.introduce();

const address = {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
}

person.address = address;
console.log(person);

const {first_name, last_name, age} = person;
console.log(first_name);