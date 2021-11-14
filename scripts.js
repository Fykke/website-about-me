const path = 'assets/dodge1.png';
let current_div = 'div1';
let current_photo = "assets/dodge1.png";
let current_photo_number = 1;
let photo_count = 3;

window.onbeforeunload = function () {
  window.scrollTo( 0, 0 );
}

function replace_div( hide, show, photo_name ) {
    if ( hide == show ) return;

    document.getElementById( show ).style.display="block";
    document.getElementById( hide ).style.display="none";
    current_photo = photo_name;
    document.querySelectorAll( 'video' ).forEach( vid => vid.pause() );
    document.querySelectorAll( 'video' ).forEach( vid => vid.currentTime = 0 );
}

function changediv_var( div ) {
    current_div = div;
}

function replace_photo( id, photo_count ) {
    current_photo_number += 1;
    if ( current_photo_number > photo_count ) {
      document.getElementById( id ).src = current_photo.substring( 0, current_photo.length - 5 ) + "1.png";
      current_photo_number = 1;
    }
    else {
      document.getElementById( id ).src = current_photo.substring( 0, current_photo.length - 5 ) + current_photo_number+".png";
    }
}

function replace_photo_back( id, photo_count ) {
  current_photo_number -= 1;
  if ( current_photo_number == 0 ) {
    document.getElementById( id ).src = current_photo.substring( 0, current_photo.length - 5 ) + photo_count + ".png";
    current_photo_number = photo_count;
  }
  else {
    document.getElementById( id ).src = current_photo.substring( 0, current_photo.length - 5 ) + current_photo_number+".png";
  }
}