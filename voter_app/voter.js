"use strict";
// ===========================
// PAGE NAVIGATION
// ===========================
function showPage(pageId) {
    let pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
        page.classList.remove("active");
    });
    document.getElementById(pageId)?.classList.add("active");
}
// ===========================
// HOME PAGE SUBMIT
// ===========================
function submitHome() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let voter = document.getElementById("voter").value;
    console.log("Home Details");
    console.log(name);
    console.log(age);
    console.log(address);
    console.log(voter);
    alert("Home Details Submitted");
}
// ===========================
// APPLY VOTER ID
// ===========================
function applyVoter() {
    let father = document.getElementById("father").value;
    let mother = document.getElementById("mother").value;
    let location = document.getElementById("location").value;
    let qualification = document.getElementById("qualification").value;
    console.log("Apply Details");
    console.log(father);
    console.log(mother);
    console.log(location);
    console.log(qualification);
    alert("Voter ID Applied Successfully");
}
// ===========================
// UPDATE DETAILS
// ===========================
function updateDetails() {
    let correctName = document.getElementById("correctName").value;
    let correctAge = document.getElementById("correctAge").value;
    let correctAddress = document.getElementById("correctAddress").value;
    console.log("Updated Details");
    console.log(correctName);
    console.log(correctAge);
    console.log(correctAddress);
    alert("Details Updated Successfully");
}
