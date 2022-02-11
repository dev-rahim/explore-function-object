// searh inndex  with for  loop
var phones = [ 'lg', 'showmi', 'samsung', 'htc' ];
var searchItem = phones.indexOf( 'showmi' )
if ( searchItem == -1 ) {
    console.log( 'Opps!  Its not avavail..' );
}
else {
    console.log( searchItem );
}

if ( searchItem != -1 ) {
    console.log( searchItem );
}
else {
    console.log( 'Opps!  Its not avavail..' );
}

// while loop
var roll = 0;
while ( roll <= 20 ) {
    console.log( 'Student Roll is= ', roll );
    roll++;;
}

// function
function addThreeNumbers( num1, num2, num3 ) {
    var total = num1 + num2 + num3;
    return total;
}
var summetionOfThreeNumbers = addThreeNumbers( 2, 10, 5 );
console.log( 'Summetion of  three numbers is= ', summetionOfThreeNumbers );

// Object
var micrphone = {
    brand: 'blue yeati',
    color: 'blue',
    price: 120,
}