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

    let button = document.createElement('button'); //Creates the button
    button.innerHTML = 'Multiply Power'; //Names the button
    button.className = 'button';
    button.style.width = '100px'; //Defines button width
    button.style.backgroundColor = 'transparent'; //Colors the button
    button.style.borderColor = 'transparent'; //Colors the border
    button.onclick = calculate; //Telling it to multiply the power (do the function called calculate) when you click the button
    document.querySelector("body > div.geofs-ui-bottom").appendChild(button); //Appends the button

    let slider = document.createElement('input'); //Creates the slider
    slider.type = 'range'; //Stating what type of thing the variable 'slider' is
    slider.min = 0.01; //Stating slider minimum
    slider.max = 50; //Stating slider maximum
    slider.step = 0.01; //Stating the minimum the slider will change by. This keeps it from being a VERY long number.
    slider.value = 1; //Stating what the value of the slider is before it's changed
    slider.style.width = '300px'; //Stating slider width
    slider.style.transform = "translate(0%, 25%)"; //Moving the slider down 25%
    document.querySelector("body > div.geofs-ui-bottom").appendChild(slider); //Appends the slider

    let textDisplay = document.createElement('div'); //Creates the text display box
    textDisplay.style.transform = "translate(-5%, -30%)"; //Moving the display box left 5% and up 30%
    textDisplay.style.color = 'green'; //Making the text green
    textDisplay.style.fontSize = "20px"; //Making the font size 20 pixels
    textDisplay.style.fontWeight = "550"; //Changing the thickness of the numbers
    textDisplay.innerHTML = "1"; //Stating what it needs to say before the slider moves
    document.querySelector("body > div.geofs-ui-center > div.geofs-ui-right > div.geofs-pads-container").appendChild(textDisplay); //Appends the display box
    slider.oninput = function(){ //Changes what the text display box says when the slider is moved
    textDisplay.innerHTML = (slider.value); //The actual changing
};
    var i = 0; //Declaring the variable "i"

    function calculate() { //The actual power multiplying when the button is clicked, plus changing the zero thrust altitude
        let value = parseInt(slider.value); //Assigning a variable to the slider value
        console.log(geofs.aircraft.instance.setup.zeroThrustAltitude = 1e+162) //Changes the zero thrust altitude way up
    var i = 0; //Setting variable "i" to 0
    while (i < 12) { //Completing some code as long as 'i' is less than 12
    if (geofs.aircraft.instance.engines[i] != undefined) { //Seeing if the engine under whatever "i" equals is actually an engine
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
})();
