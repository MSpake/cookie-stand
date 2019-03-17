'use strict';

function set_color_scheme(event) {
  console.log(event.target.value);
  sessionStorage.setItem('theme', event.target.value);
  location.reload();
}

var pages = document.getElementsByClassName('theme-sheet');
console.log(pages[0]);

if (sessionStorage.getItem('theme')) {
  switch (sessionStorage.getItem('theme')) {
  case 'normal':
    pages[0].innerHTML = '<link rel="stylesheet" href="../css/style.css" class="theme-sheet">';
    break;
  case 'greyscale':
    pages[0].innerHTML = '<link rel="stylesheet" href="../css/greyscale.css" class="theme-sheet">';
    break;

  }
}

//persisting value found on Stack Overflow: https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads/30070207#30070207
console.log(sessionStorage.getItem('theme'));



var theme = document.getElementById('themes');
theme.addEventListener('change', set_color_scheme);
