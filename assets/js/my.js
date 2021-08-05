document.addEventListener('DOMContentLoaded', () => {
    setCopyright();
}, false);

function setCopyright() {
    document.getElementById("copyright").innerText = "© " + new Date().getFullYear() + " Corporate Software AG";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {toggleStickyClass()};

// Get the header
var header = document.getElementById("coso-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function toggleStickyClass() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}