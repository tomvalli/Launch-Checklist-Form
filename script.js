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



   button.onclick = ()=> {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         window.alert("All fields are required.");
         event.preventDefault();
         return;
      }
      fuelLevel = Number(fuelLevel.value);
      cargoMass = Number(cargoMass.value);
      if (isNaN(fuelLevel)) {
         window.alert("Fuel level must be a number");
      } else if (isNaN(cargoMass)){
         window.alert("Cargo mass must be a number");
      }
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch.`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;

      if (fuelLevel < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch.";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = red;
      } else if (cargoMass > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass is to great for launch.";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = red;
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch.";
         launchStatus.style.color = green;
      }


      




      
   };
}

window.onload = init;