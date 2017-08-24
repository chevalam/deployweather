var names = ['srikanth','swathi','sruthi'];

names.forEach(function(name){
  console.log("anonym func "+ name );
});

names.forEach((name) => {console.log("arrow func "+name)});

names.forEach((name) => console.log("no brace arrow func "+name));


var retval = (name) => console.log(name+'!');

names.forEach(retval);

addExpression = (a,b) => a+b;
addUsual = (a,b) => {return a+b};

console.log(addExpression(2,3));
console.log(addUsual(4,6));
