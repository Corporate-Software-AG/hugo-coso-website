document.addEventListener('DOMContentLoaded', () => {
    setCopyright();
}, false);



function setCopyright() {
    document.getElementById("copyright").innerText = "© " + new Date().getFullYear() + " Corporate Software AG";
}