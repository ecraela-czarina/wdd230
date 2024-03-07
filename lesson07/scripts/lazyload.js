
var lastModifiedElement = document.getElementById("lastModified");
var lastModified = new Date(document.lastModified);
lastModifiedElement.textContent = "Last modified: " + lastModified.toLocaleString();

var lazyImages = document.querySelectorAll('.lazy-image');

