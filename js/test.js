var Person = require('./Person');
var john = new Person("John");

john.on('speak', function (said) {
    console.log(said);
});

john.emit('speak', "Bobek huj");