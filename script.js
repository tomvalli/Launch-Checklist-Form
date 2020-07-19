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
      let formInput = [pilotName, copilotName, fuelLevel, cargoMass];

      for (let i = 0; i < formInput.length; i++) {
         let fieldName = formInput[i].parentNode.innerHTML;
         fieldName = fieldName.slice(0,fieldName.indexOf("<")).trim();
         if (formInput[i].value === "") {
            form.innerHTML += `<p style='color: red' class='errors'>- 
               ${fieldName} is required</p>`;
            event.preventDefault();
         }
      }

      
   };
}

window.onload = init;