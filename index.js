var Dog = require('./Dog');
var Cat = require('./Cat');

var cat1 = new Cat();
var dog1 = new Dog();

dog1.eat(cat1);

console.log(dog1);