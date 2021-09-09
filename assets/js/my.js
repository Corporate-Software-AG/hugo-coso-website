window.onscroll = function() {scrollFunction()};

document.addEventListener('DOMContentLoaded', () => {
    setCopyright();
}, false);

function setCopyright() {
    document.getElementById("copyright").innerText = "© " + new Date().getFullYear() + " Corporate Software AG";
}

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("header-img").classList.add("logo-small");
    document.getElementById("header-img").classList.remove("logo-big");
  } else {
    document.getElementById("header-img").classList.add("logo-big");
    document.getElementById("header-img").classList.remove("logo-small");
  }
}