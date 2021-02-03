var button = document.getElementById("button");
var alertBox = document.getElementById("alert");
var closeButton = document.getElementById("close-button");

button.addEventListener("click", function () {
    openAlertBox();
});

document.addEventListener("click", function (event) {
    if (event.target != button && event.target != alertBox && event.target != closeButton) {
        closeAlertBox();
    }
});

closeButton.addEventListener("click", function () {
    closeAlertBox();
});

function openAlertBox() {
    alertBox.classList.add("open");
    button.style.display = "none";
};

function closeAlertBox() {
    alertBox.classList.remove("open");
    button.style.display = "block";
}