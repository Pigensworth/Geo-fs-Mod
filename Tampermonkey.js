// ==UserScript==
// @name         GeoFS Speed Mod
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Increases power for planes in Geo-FS.
// @author       Pigensworth
// @match        https://www.geo-fs.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';







    function toggleBox() {
    const box = document.getElementById('box');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }

    const box = document.createElement('div');
  box.id = 'box';
  box.style.position = 'absolute';
  box.style.backgroundColor = 'white';
  box.style.border = '1px solid #999';
  box.style.borderRadius = '5px';
  box.style.display = 'none';
  box.style.padding = '10px'; // Add some padding to the grey box
  document.querySelector("body > div.geofs-ui-center > div.geofs-ui-right > div.geofs-pads-container").appendChild(box);

    let divElement1 = document.createElement('div');
    divElement1.setAttribute('data-aircraft', '4');
    divElement1.setAttribute('data-livery', '6');
    document.body.firstChild.nextSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.appendChild(divElement1);

    var image1 = document.createElement('img'); // Create a new image element
    image1.src = 'https://github.com/Pigensworth/Geo-fs-Mod/blob/main/Images/737-700.png?raw=true'; // Set the source attribute of the image
    divElement1.appendChild(image1);
    divElement1.appendChild(document.createTextNode('Geo-FS'));

    var image2 = document.createElement('img');
    image2.src = 'https://github.com/Pigensworth/Geo-fs-Mod/blob/main/Images/Aerospatiale.png?raw=true';

    let divElement2 = document.createElement('div');
    divElement2.setAttribute('data-aircraft', '20');
    divElement2.setAttribute('data-livery', '3');
    document.body.firstChild.nextSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.appendChild(divElement2);
    divElement2.appendChild(image2);
    divElement2.appendChild(document.createTextNode('Aerospatiale'));

    let button1 = document.createElement('button'); //Creates the button
    button1.innerHTML = 'Divide Power'; //Names the button
    button1.style.width = '151px';// Defines the width of the button
    button1.className = 'button1';
    button1.style.backgroundColor = 'white'; //Colors the button
    button1.style.borderColor = 'grey'; //Colors the border
    button1.style.fontSize = "19px"; //Making the font size 20 pixels
    button1.style.fontWeight = "550"; //Changing the thickness of the numbers
    button1.onclick = divide; //Telling it to multiply the power (do the function called calculate) when you click the button
    box.appendChild(button1); //Appends the button

    let button2 = document.createElement('button'); //Creates the button
    button2.innerHTML = 'Multiply Power'; //Names the button
    button2.style.transform = "translate(2%, 0%)";
    button2.style.width = '151px'; // Defines the width of the button
    button2.className = 'button2';
    button2.style.backgroundColor = 'transparent'; //Colors the button
    button2.style.borderColor = 'grey'; //Colors the border
    button2.style.fontSize = "19px"; //Making the font size 20 pixels
    button2.style.fontWeight = "550"; //Changing the thickness of the numbers
    button2.onclick = multiply; //Telling it to multiply the power (do the function called calculate) when you click the button
    box.appendChild(button2); //Appends the button

    let slider = document.createElement('input'); //Creates the slider
    slider.type = 'range'; //Stating what type of thing the variable 'slider' is
    slider.min = 1; //Stating slider minimum
    slider.max = 50; //Stating slider maximum
    slider.step = 1; //Stating the minimum the slider will change by. This keeps it from being a VERY long number.
    slider.value = 1; //Stating what the value of the slider is before it's changed
    slider.style.width = '300px'; //Stating slider width
    slider.style.transform = "translate(0%, 25%)"; //Moving the slider down 25%
    box.appendChild(slider); //Appends the slider

    let textDisplay = document.createElement('div'); //Creates the text display box
    textDisplay.style.transform = "translate(47%, 0%)"; //Moving the display box left 5% and up 30%
    //textDisplay.style.color = 'green'; //Making the text green
    textDisplay.style.fontSize = "20px"; //Making the font size 20 pixels
    textDisplay.style.fontWeight = "550"; //Changing the thickness of the numbers
    textDisplay.innerHTML = "1"; //Stating what it needs to say before the slider moves
    //document.querySelector("body > div.geofs-ui-center > div.geofs-ui-right > div.geofs-pads-container").appendChild(textDisplay); //Appends the display box
    box.appendChild(textDisplay);
    slider.oninput = function(){ //Changes what the text display box says when the slider is moved
    textDisplay.innerHTML = (slider.value); //Showing the value to change it by
};
    var i = 0; //Declaring the variable "i"

    function divide() { //The actual power dividing when the button is clicked, plus changing the zero thrust altitude
        let value = parseInt(slider.value); //Assigning a variable to the slider value
        console.log(geofs.aircraft.instance.setup.zeroThrustAltitude = 1e+162) //Changes the zero thrust altitude way up
    var i = 0; //Setting variable "i" to 0
    while (i < 12) { //Completing some code as long as 'i' is less than 12
    if (geofs.aircraft.instance.engines[i] != undefined) { //Seeing if engine number "i" is actually an engine
     geofs.aircraft.instance.engines[i].thrust = geofs.aircraft.instance.engines[i].thrust/value; //Dividing it by the value of the slider if it is an engine
    }
    if (geofs.aircraft.instance.engines[i].afterBurnerThrust != undefined) { //Seeing if the engine has an afterburner
     geofs.aircraft.instance.engines[i].afterBurnerThrust = geofs.aircraft.instance.engines[i].afterBurnerThrust/value; //Dividing the afterburner thrust by the value of the slider if it has an afterburner
    }
    if (geofs.aircraft.instance.engines[i].reverseThrust != undefined) { //Seeing if the engine has reverse thrust
     geofs.aircraft.instance.engines[i].reverseThrust = geofs.aircraft.instance.engines[i].reverseThrust/value; //Dividing the reverse thrust by the value of the slider
    }
    i++; //Changing "i" up by one so that it will repeat it until it has changed the power of all the engines
}
}

    function multiply() { //The actual power multiplying when the button is clicked, plus changing the zero thrust altitude
        let value = parseInt(slider.value); //Assigning a variable to the slider value
        console.log(geofs.aircraft.instance.setup.zeroThrustAltitude = 1e+162) //Changes the zero thrust altitude way up
    var i = 0; //Setting variable "i" to 0
    while (i < 12) { //Completing some code as long as 'i' is less than 12
    if (geofs.aircraft.instance.engines[i] != undefined) { //Seeing if engine number "i" is actually an engine
     geofs.aircraft.instance.engines[i].thrust = geofs.aircraft.instance.engines[i].thrust*value; //Multiplying it by the value of the slider if it is an engine
    }
    if (geofs.aircraft.instance.engines[i].afterBurnerThrust != undefined) { //Seeing if the engine has an afterburner
     geofs.aircraft.instance.engines[i].afterBurnerThrust = geofs.aircraft.instance.engines[i].afterBurnerThrust*value; //Multiplying the afterburner thrust by the value of the slider if it has an afterburner
    }
    if (geofs.aircraft.instance.engines[i].reverseThrust != undefined) { //Seeing if the engine has reverse thrust
     geofs.aircraft.instance.engines[i].reverseThrust = geofs.aircraft.instance.engines[i].reverseThrust*value; //Multiplying the reverse thrust by the value of the slider
    }
    i++; //Changing "i" up by one so that it will repeat it until it has changed the power of all the engines
}
}

    const toggleButton = document.createElement('button');
  toggleButton.innerHTML = 'Power Options';
  toggleButton.style.backgroundColor = 'transparent';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '5px';
  toggleButton.style.cursor = 'pointer';

  document.querySelector("body > div.geofs-ui-bottom").appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
    toggleBox();

    if (box.style.display === 'block') {
      const buttonRect = toggleButton.getBoundingClientRect();
      box.style.top = buttonRect.top - 2*box.offsetHeight - (document.querySelector("#geofs-ui-3dview > div.geofs-instruments-container > div:nth-child(23)").offsetHeight) + 'px';
      box.style.right = window.innerWidth - buttonRect.right + ((buttonRect.right - buttonRect.left)/2) - (box.offsetWidth / 2) + 'px';
    }
  });

})();
