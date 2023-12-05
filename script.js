// Kileia Riley, Term project, Fall 23


// Prompt user to input name for personalized experience


function introduction () {
    let name = 0;
    let pattern1= /^[A-Za-z]*$/;
    while (!pattern1.test(name)) {
        name = prompt("What is your first name?");
    }
    let output = document.querySelector("#intro");
    output.innerHTML = "Hello " + name + "! Hope you're doing well today...Let's get started.";
}
introduction();

function generateFuture() {
    const spouseChoices1 = document.getElementById("spouseChoices1").value;
    const spouseChoices2 = document.getElementById("spouseChoices2").value;
    const spouseChoices3 = document.getElementById("spouseChoices3").value;

    const numberOfKids1 = document.getElementById("numberOfKids1").value;
    const numberOfKids2 = document.getElementById("numberOfKids2").value;
    const numberOfKids3 = document.getElementById("numberOfKids3").value;

    const dreamJob1 = document.getElementById("dreamJob1").value;
    const dreamJob2 = document.getElementById("dreamJob2").value;
    const dreamJob3 = document.getElementById("dreamJob3").value;

    const dreamCar1 = document.getElementById("dreamCar1").value;
    const dreamCar2 = document.getElementById("dreamCar2").value;
    const dreamCar3 = document.getElementById("dreamCar3").value;

    const house = ["Mansion", "Apartment", "Shed", "House"];
    const spouseChoices = [spouseChoices1, spouseChoices2, spouseChoices3];
    const numberOfKids = [numberOfKids1, numberOfKids2, numberOfKids3];
    const dreamJob = [dreamJob1, dreamJob2, dreamJob3];
    const dreamCar = [dreamCar1, dreamCar2, dreamCar3];

    let chosenHouse = house[Math.floor(Math.random()*house.length)];
    let chosenSpouse = spouseChoices[Math.floor(Math.random()*spouseChoices.length)];
    let chosenKids = numberOfKids[Math.floor(Math.random()*numberOfKids.length)];
    let chosenJob = dreamJob[Math.floor(Math.random()*dreamJob.length)];
    let chosenCar = dreamCar[Math.floor(Math.random()*dreamCar.length)];

    let output = document.getElementById("output");
    output.innerHTML = `You will live in a <b>${chosenHouse}</b>.<br>Your spouse will be <b>${chosenSpouse}</b>.<br>You will have <b>${chosenKids}</b> kids.<br>You will be a <b>${chosenJob}</b>.<br>You will drive a <b>${chosenCar}</b>.`
}