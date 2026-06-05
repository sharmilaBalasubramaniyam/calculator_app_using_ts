// ===========================
// PAGE NAVIGATION
// ===========================

function showPage(pageId: string): void {

    let pages = document.querySelectorAll(".page");

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    document.getElementById(pageId)?.classList.add("active");
}



// ===========================
// HOME PAGE
// ===========================

function submitHome(): void {

    let name = (document.getElementById("name") as HTMLInputElement).value;

    let age = (document.getElementById("age") as HTMLInputElement).value;

    let address = (document.getElementById("address") as HTMLTextAreaElement).value;


    if(name === "" || age === "" || address === ""){

        alert("Fill all details");

        return;
    }

    console.log(name);
    console.log(age);
    console.log(address);

    alert("Citizen Details Submitted");
}



// ===========================
// REGISTER USER
// ===========================

function registerUser(): void {

    let email = (document.getElementById("email") as HTMLInputElement).value;

    let password = (document.getElementById("password") as HTMLInputElement).value;


    if(email === "" || password === ""){

        alert("Fill registration details");

        return;
    }

    localStorage.setItem("email", email);

    alert("Registration Successful");
}



// ===========================
// APPLY VOTER ID
// ===========================

function applyVoter(): void {

    let fatherName = (document.getElementById("fatherName") as HTMLInputElement).value;

    let motherName = (document.getElementById("motherName") as HTMLInputElement).value;

    let location = (document.getElementById("location") as HTMLInputElement).value;

    let qualification = (document.getElementById("qualification") as HTMLInputElement).value;


    console.log(fatherName);
    console.log(motherName);
    console.log(location);
    console.log(qualification);

    alert("Application Submitted");
}



// ===========================
// CORRECTION PAGE
// ===========================

function updateDetails(): void {

    let correctName = (document.getElementById("correctName") as HTMLInputElement).value;

    let correctAge = (document.getElementById("correctAge") as HTMLInputElement).value;

    let correctAddress = (document.getElementById("correctAddress") as HTMLTextAreaElement).value;


    console.log(correctName);
    console.log(correctAge);
    console.log(correctAddress);

    alert("Correction Submitted");
}



// ===========================
// STATUS PAGE
// ===========================

function checkStatus(): void {

    let applicationId = (document.getElementById("applicationId") as HTMLInputElement).value;

    let result = document.getElementById("result") as HTMLElement;


    if(applicationId === ""){

        alert("Enter Application ID");

        return;
    }

    result.innerHTML = "Application Status : Under Verification";
}



// ===========================
// ADMIN LOGIN
// ===========================

function adminLogin(): void {

    let username = (document.getElementById("adminUser") as HTMLInputElement).value;

    let password = (document.getElementById("adminPass") as HTMLInputElement).value;


    if(username === "admin" && password === "1234"){

        alert("Admin Login Success");
    }
    else{

        alert("Invalid Credentials");
    }
}