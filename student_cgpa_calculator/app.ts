function showName():void{
    let name=(document.getElementById("studentName") as HTMLInputElement).value;
    document.getElementById("result")!.innerHTML="Welcome "+name;

    let year=Number((document.getElementById("year") as HTMLInputElement).value);

    let semester=Number((document.getElementById("semester") as HTMLInputElement).value);

    document.getElementById("result")!.innerHTML=
    `
    Name: ${name}<br>
    Year:${year}<br>
    Semester: ${semester}
    `;
}