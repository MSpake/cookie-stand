'use strict';

function set_color_scheme(event) {
  //persisting value using session storage found on Stack Overflow: https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads/30070207#30070207
  sessionStorage.setItem('theme', event.target.value);
  location.reload();
}

var pages = document.getElementsByClassName('theme-sheet');


if (sessionStorage.getItem('theme')) {
  switch (sessionStorage.getItem('theme')) {
  case 'normal':
    pages[0].innerHTML = '<link rel="stylesheet" href="../css/style.css" class="theme-sheet">';
    break;
  case 'greyscale':
    pages[0].innerHTML = '<link rel="stylesheet" href="../css/greyscale.css" class="theme-sheet">';
    break;
  case 'ocean':
    pages[0].innerHTML = '<link rel="stylesheet" href="../css/ocean.css" class="theme-sheet">';
    break;
  }
}
var fish_pic = document.getElementById('fish');
console.log(fish_pic);

if (fish_pic) {
  switch (sessionStorage.getItem('theme')) {
  case 'normal':
    fish_pic.innerHTML = '';
    console.log(fish_pic);
    fish_pic.innerHTML = '<img src="../img/chinook.jpg">';
    console.log(fish_pic);
    break;
  case 'greyscale':
    fish_pic.innerHTML = '';
    console.log(fish_pic);
    fish_pic.innerHTML = '<img src="../img/chinook_greyscale.jpg">';
    console.log(fish_pic);
    break;
  case 'ocean':
    fish_pic.innerHTML = '';
    console.log(fish_pic);
    fish_pic.innerHTML = '<img src="../img/chinook_ocean.jpg">';
    console.log(fish_pic);
    break;
  }
}

var theme = document.getElementById('themes');
theme.addEventListener('change', set_color_scheme);
