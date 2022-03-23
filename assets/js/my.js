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

// Set target to _blank in all external links.
let links = document.getElementsByTagName("a");
for (let l of links) {
    if (l.href.startsWith("http") && !l.href.startsWith("https://www.corporatesoftware.ch")) {
        l.target = "_blank"
    }
}

var successMessage = document.getElementById("success-message");
var errorMessage = document.getElementById("error-message");

var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.onsubmit = function(event) {
    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    contactForm.querySelectorAll("input, textarea").forEach(field => {
        payload[field.name] = field.value;
    });

    // Post the payload to the contact endpoint.
    fetch("https://coso-web.azurewebsites.net/api/WebFormTrigger", {
        method: 'post',
        body: JSON.stringify(payload)
    }).then(resp => {
        if (!resp.ok) {
            console.error(resp);
            return;
        }
        // Display success message.
        successMessage.style.display = "block";
        contactForm.style.display = "none";
    });
  }
}
