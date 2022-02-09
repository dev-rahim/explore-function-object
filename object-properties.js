var computer = {
    price: 29000,
    stroge: '156 gb',
    processor: 'intel i5',
    color: 'silver',
};
// read object property value 
console.log( computer.processor );
var computerProcessor = computer.processor;
console.log( computerProcessor );
//  set a object prperty value 
computer.color = "blue";
console.log( computer.color );


// diffrent wayes to set a value on an object property
var computerProcessor = 'processor';
computer.stroge = "500 GB";
computer[ 'price' ] = 50000;
computer[ computerProcessor ] = "intel i7";

console.log( computer.stroge );
console.log( computer.price );
console.log( computer.processor );