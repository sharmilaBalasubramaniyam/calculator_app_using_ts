"use strict";
function generatePassword(length = 12) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
const generateButton = document.getElementById("generateButton");
const passwordInput = document.getElementById("password");
const passwordLengthInput = document.getElementById("passwordLength");
generateButton.addEventListener("click", () => {
    let length = parseInt(passwordLengthInput.value, 10);
    if (length < 8) {
        length = 8;
    }
    if (length > 20) {
        length = 20;
    }
    const password = generatePassword(length);
    passwordInput.value = password;
});
