// var i = 0;
// while ( i < 10 ) {
//     console.log( i );
//     if ( i == 5 ) {
//         break
//     }
//     i++;
// }

// for ( var i = 0; i < 20; i++ ) {
//     console.log( i );
//     if ( i == 15 ) {
//         break;
//     }
// }


var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 90, 52, 62, 100, 100, 80, 61, ];
// for ( var i = 0; i < numbers.length; i++ ) {
//     var number = numbers[ i ];
//     console.log( number );
//     if ( number > 10 ) {
//         break;
//     }
// }

for ( var i = 0; i < numbers.length; i++ ) {
    var number = numbers[ i ];
    if ( number > 10 ) {
        continue;
    }
    console.log( number );
}