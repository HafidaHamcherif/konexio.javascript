function sayHello(name){
    console.log('Nice to meet you' + name);
}

sayHello(' to my little friend');
//console.log(process.argv[2]);
var firstname = process.argv[2];
sayHello(firstname);