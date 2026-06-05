function generatePassword(length: number = 12): string {

    const characters: string =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";

    let password: string = "";

    for (let i: number = 0; i < length; i++) {

        const randomIndex: number =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    return password;
}

const generateButton =
    document.getElementById("generateButton") as HTMLButtonElement;

const passwordInput =
    document.getElementById("password") as HTMLInputElement;

const passwordLengthInput =
    document.getElementById("passwordLength") as HTMLInputElement;

generateButton.addEventListener("click", () => {

    let length: number =
        parseInt(passwordLengthInput.value, 10);

    if (length < 8) {
        length = 8;
    }

    if (length > 20) {
        length = 20;
    }

    const password: string =
        generatePassword(length);

    passwordInput.value = password;
});