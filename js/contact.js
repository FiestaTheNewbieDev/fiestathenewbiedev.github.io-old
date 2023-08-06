window.addEventListener("DOMContentLoaded", () => {
    checkContactForm();
});

const nameInput = document.getElementById("nameInput");
const mailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const submitInput = document.getElementById("submitInput");

function checkContactForm() {
    var temp = true;
    if(!nameInput.value) temp = false;
    if(!mailInput.value) temp = false;
    if(messageInput.value.length < 32) temp = false;
    console.log(temp);
    if(temp) enableSubmitInput();
    else disableSubmitInput();
}

function disableSubmitInput() {
    submitInput.classList.add("disabled");
    submitInput.setAttribute("disabled", "");
}

function enableSubmitInput() {
    submitInput.classList.remove("disabled");
    submitInput.removeAttribute("disabled", "");
}