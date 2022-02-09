var color = 'red';
if ( color == "blue" ) {
    console.log( 'blue' );
}
else if ( color == "black" ) {
    console.log( "çolor is black" );
}
else if ( color == "red" ) {
    console.log( 'color is red' );
}
else if ( color == "yellow" ) {
    console.log( 'color is yellow' );
}
else if ( color == "mejenta" ) {
    console.log( 'coor is mejenta' );
}
else {
    console.log( 'color is white' );
}



switch ( color ) {
    case 'blue':
        console.log( 'Color blue' );
        break
    case 'red':
        console.log( 'color red' );
        break
    case 'yellow':
        console.log( 'color yellow' );
        break
    case 'green':
        console.log( 'color green' );
        break
    default:
        console.log( 'color undifiend' );
        break;
}