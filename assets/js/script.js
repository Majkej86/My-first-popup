var button = document.getElementById("button");
var alertBox = document.getElementById("alert");
var closeButton = document.getElementById("close-button")

button.addEventListener("click", function () {
    alertBox.classList.add("open");
    button.style.display = "none";
});

// document.addEventListener("click", function (event) {
//     if (event.target != button && event.target != alertBox) {
//         alertBox.classList.remove("open");
//         button.style.display = "block";
//     }
// });

closeButton.addEventListener("click", function () {
    alertBox.classList.remove("open");
    button.style.display = "block";
});

console.log(closeButton)