"use strict";
function showName() {
    let name = document.getElementById("studentName").value;
    document.getElementById("result").innerHTML = "Welcome " + name;
    let year = Number(document.getElementById("year").value);
    let semester = Number(document.getElementById("semester").value);
    document.getElementById("result").innerHTML =
        `
    Name: ${name}<br>
    Year:${year}<br>
    Semester: ${semester}
    `;
}
