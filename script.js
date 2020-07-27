function init() {
   let button = document.getElementById("formSubmit");
   let form = document.getElementById("launchForm");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            const destination = document.getElementById("missionTarget");
            let index = Math.floor(Math.random() * json.length);
            destination.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `;
            index = (index + 1) % json.length;
         });
   });

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
         }
         if (cargoMass > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass is too great for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            event.preventDefault();
         } 
         if (fuelLevel >= 10000 && cargoMass <= 10000) {
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