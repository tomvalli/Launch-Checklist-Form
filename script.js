// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

function init() {
   let button = document.getElementById("formSubmit");
   let form = document.getElementById("launchForm");

   form.onsubmit = event=> {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         window.alert("All fields are required.");
         event.preventDefault();
         //return;
      } else if (isNaN(Number(fuelLevel.value))) {
         window.alert("Fuel level must be a number");
         event.preventDefault();
      } else if (isNaN(Number(cargoMass.value))){
         window.alert("Cargo mass must be a number");
         event.preventDefault();
      } else {
         fuelLevel = Number(fuelLevel.value);
         cargoMass = Number(cargoMass.value);

         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;

         if (fuelLevel < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            event.preventDefault();
         } else if (cargoMass > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass is to great for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            event.preventDefault();
         } else {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch.";
            launchStatus.style.color = "green";
            event.preventDefault();
         }

         event.preventDefault();
      }
      event.preventDefault();
   };
}

window.onload = init;








      // fuelLevel = Number(fuelLevel.value);
      // cargoMass = Number(cargoMass.value);
      // if (isNaN(fuelLevel)) {
      //    window.alert("Fuel level must be a number");
      // } else if (isNaN(cargoMass)){
      //    window.alert("Cargo mass must be a number");
      // } else {