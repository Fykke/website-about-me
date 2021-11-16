// VARIABLES TO CONTROL CURRENT DIVS VIDEOS AND PHOTOS
const path = 'assets/dodge1.png';
let current_vid = 'assets/video6_1.mkv';
let current_photo = "assets/dodge1.png";

let current_div = 'div1';

let current_photo_number = 1;
let current_vid_number = 1;
let photo_count = 3;
// SCROLL TO TOP ON PAGE REFRESH
window.onbeforeunload = function () {
  window.scrollTo( 0, 0 );
}

// REPLACE DIV TO REPLACE CURRENT CONTENT SECTION WITH ANOTHER |
// CHANGE CURRENT PHOTO VARIABLE SO WE CAN TRACK IN CODE WHICH PHOTO IS SHOWING
// PAUSE ALL VIDEOS SO IT DON'T CONTINUE RUNNING ON CLOSED DIV
function replace_div( hide, show, photo_name ) {
    if ( hide == show ) return;

    document.getElementById( show ).style.display="block";
    document.getElementById( hide ).style.display="none";
    current_photo = photo_name;
    document.querySelectorAll( 'video' ).forEach( vid => vid.pause() );
    document.querySelectorAll( 'video' ).forEach( vid => vid.currentTime = 0 );
}

// CHANGE CURRENT DIV VARIABLE TO TRACK WHERE WE ARE
function changediv_var( div ) {
    current_div = div;
}

// PLACE NEXT PHOTO IN THE PHOTO GALLERY
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

// PLACE PREVIOUS PHOTO IN THE PHOTO GALLERY
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

// SWAP VIDEO ON 6TH DIV TO THE NEXT
function replace_video( id, video_count ) {
  current_vid_number += 1;
  if ( current_vid_number > video_count ) {
    document.getElementById( id ).src = current_vid.substring( 0, current_vid.length - 5 ) + "1.mkv";
    current_vid_number = 1;
    document.getElementById( 'vid_num_6div' ).innerHTML=current_vid_number + '/' + video_count;
    
  }
  else {
    document.getElementById( id ).src = current_vid.substring( 0, current_vid.length - 5 ) + current_vid_number+".mkv";
    document.getElementById( 'vid_num_6div' ).innerHTML=current_vid_number + '/' + video_count;
  }
}

// SWAP VIDEO ON 6TH DIV TO THE PREVIOUS
function replace_video_back( id, video_count ) {
  current_vid_number -= 1;
  if ( current_vid_number == 0 ) {
    document.getElementById( id ).src = current_vid.substring( 0, current_vid.length - 5 ) + video_count + ".mkv";
    current_vid_number = video_count;
    document.getElementById( 'vid_num_6div' ).innerHTML=current_vid_number + '/' + video_count;
  }
  else {
    document.getElementById( id ).src = current_vid.substring( 0, current_vid.length - 5 ) + current_vid_number+".mkv";
    document.getElementById( 'vid_num_6div' ).innerHTML=current_vid_number + '/' + video_count;
  }
}