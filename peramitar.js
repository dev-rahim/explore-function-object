function bringBooks( taka ) {
    console.log( "Books er jonno tk=", taka );
    console.log( "mama books den" );
    var bookPrice = 50;
    var booksQuantity = taka / bookPrice;
    return booksQuantity;
}

var money = 250;

bringBooks( 2232 );

bringBooks( money )

var books = bringBooks( 500 );
console.log( "tmi paba books=", books );