javascript:(function()%7B%2F%2F%20%3D%3DUserScript%3D%3D%0A%2F%2F%20%40name%20%20%20%20%20%20%20%20%20GeoFS%20Speed%20Mod%0A%2F%2F%20%40namespace%20%20%20%20http%3A%2F%2Ftampermonkey.net%2F%0A%2F%2F%20%40version%20%20%20%20%20%201%0A%2F%2F%20%40description%20%20Increases%20power%20for%20planes%20in%20Geo-FS.%0A%2F%2F%20%40author%20%20%20%20%20%20%20Pigensworth%0A%2F%2F%20%40match%20%20%20%20%20%20%20%20https%3A%2F%2Fwww.geo-fs.com%2F*%0A%2F%2F%20%40grant%20%20%20%20%20%20%20%20none%0A%2F%2F%20%3D%3D%2FUserScript%3D%3D%0A%0A(function()%20%7B%0A%20%20%20%20'use%20strict'%3B%0A%0A%0A%0A%0A%0A%0A%0A%2F%2F%20let%20liElement1%20%3D%20document.createElement('li')%3BliElement1.setAttribute('data-aircraft'%2C%20'23')%3Bdocument.body.firstChild.nextSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.appendChild(liElement1)%3Bvar%20image3%20%3D%20document.createElement('img')%3Bimage3.src%20%3D%20'https%3A%2F%2Fgithub.com%2FPigensworth%2FGeo-fs-Mod%2Fblob%2Fmain%2FImages%2FPiper%2520PA-28%2520161%2520Warrior%2520II.png%3Fraw%3Dtrue'%3BliElement1.appendChild(image3)%3BliElement1.appendChild(document.createTextNode('Piper%20PA-28%20161%20Warrior%20II'))%3B%0A%0A%20%20%20%20function%20toggleBox()%20%7B%0A%20%20%20%20const%20box%20%3D%20document.getElementById('box')%3B%0A%20%20%20%20box.style.display%20%3D%20box.style.display%20%3D%3D%3D%20'block'%20%3F%20'none'%20%3A%20'block'%3B%0A%20%20%7D%0A%0A%20%20%20%20const%20box%20%3D%20document.createElement('div')%3B%0A%20%20box.id%20%3D%20'box'%3B%0A%20%20box.style.position%20%3D%20'absolute'%3B%0A%20%20box.style.backgroundColor%20%3D%20'white'%3B%0A%20%20box.style.border%20%3D%20'1px%20solid%20%23999'%3B%0A%20%20box.style.borderRadius%20%3D%20'5px'%3B%0A%20%20box.style.display%20%3D%20'none'%3B%0A%20%20box.style.padding%20%3D%20'10px'%3B%20%2F%2F%20Add%20some%20padding%20to%20the%20grey%20box%0A%20%20document.querySelector(%22body%20%3E%20div.geofs-ui-center%20%3E%20div.geofs-ui-right%20%3E%20div.geofs-pads-container%22).appendChild(box)%3B%0A%0A%20%20%20%20let%20divElement1%20%3D%20document.createElement('div')%3B%0A%20%20%20%20divElement1.setAttribute('data-aircraft'%2C%20'4')%3B%0A%20%20%20%20divElement1.setAttribute('data-livery'%2C%20'6')%3B%0A%20%20%20%20document.body.firstChild.nextSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.appendChild(divElement1)%3B%0A%0A%20%20%20%20var%20image1%20%3D%20document.createElement('img')%3B%20%2F%2F%20Create%20a%20new%20image%20element%0A%20%20%20%20image1.src%20%3D%20'https%3A%2F%2Fgithub.com%2FPigensworth%2FGeo-fs-Mod%2Fblob%2Fmain%2FImages%2F737-700.png%3Fraw%3Dtrue'%3B%20%2F%2F%20Set%20the%20source%20attribute%20of%20the%20image%0A%20%20%20%20divElement1.appendChild(image1)%3B%0A%20%20%20%20divElement1.appendChild(document.createTextNode('Geo-FS'))%3B%0A%0A%20%20%20%20var%20image2%20%3D%20document.createElement('img')%3B%0A%20%20%20%20image2.src%20%3D%20'https%3A%2F%2Fgithub.com%2FPigensworth%2FGeo-fs-Mod%2Fblob%2Fmain%2FImages%2FAerospatiale.png%3Fraw%3Dtrue'%3B%0A%0A%20%20%20%20let%20divElement2%20%3D%20document.createElement('div')%3B%0A%20%20%20%20divElement2.setAttribute('data-aircraft'%2C%20'20')%3B%0A%20%20%20%20divElement2.setAttribute('data-livery'%2C%20'3')%3B%0A%20%20%20%20document.body.firstChild.nextSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.appendChild(divElement2)%3B%0A%20%20%20%20divElement2.appendChild(image2)%3B%0A%20%20%20%20divElement2.appendChild(document.createTextNode('Aerospatiale'))%3B%0A%0A%20%20%20%20let%20button1%20%3D%20document.createElement('button')%3B%20%2F%2FCreates%20the%20button%0A%20%20%20%20button1.innerHTML%20%3D%20'Divide%20Power'%3B%20%2F%2FNames%20the%20button%0A%20%20%20%20button1.style.width%20%3D%20'150px'%3B%2F%2F%20Defines%20the%20width%20of%20the%20button%0A%20%20%20%20button1.className%20%3D%20'button1'%3B%0A%20%20%20%20button1.style.backgroundColor%20%3D%20'white'%3B%20%2F%2FColors%20the%20button%0A%20%20%20%20button1.style.borderColor%20%3D%20'grey'%3B%20%2F%2FColors%20the%20border%0A%20%20%20%20button1.style.fontSize%20%3D%20%2219px%22%3B%20%2F%2FMaking%20the%20font%20size%2020%20pixels%0A%20%20%20%20button1.style.fontWeight%20%3D%20%22550%22%3B%20%2F%2FChanging%20the%20thickness%20of%20the%20numbers%0A%20%20%20%20button1.onclick%20%3D%20calculate1%3B%20%2F%2FTelling%20it%20to%20multiply%20the%20power%20(do%20the%20function%20called%20calculate)%20when%20you%20click%20the%20button%0A%20%20%20%20box.appendChild(button1)%3B%20%2F%2FAppends%20the%20button%0A%0A%20%20%20%20let%20button2%20%3D%20document.createElement('button')%3B%20%2F%2FCreates%20the%20button%0A%20%20%20%20button2.innerHTML%20%3D%20'Multiply%20Power'%3B%20%2F%2FNames%20the%20button%0A%20%20%20%20button2.style.transform%20%3D%20%22translate(2%25%2C%200%25)%22%3B%0A%20%20%20%20button2.style.width%20%3D%20'150px'%3B%20%2F%2F%20Defines%20the%20width%20of%20the%20button%0A%20%20%20%20button2.className%20%3D%20'button2'%3B%0A%20%20%20%20button2.style.backgroundColor%20%3D%20'transparent'%3B%20%2F%2FColors%20the%20button%0A%20%20%20%20button2.style.borderColor%20%3D%20'grey'%3B%20%2F%2FColors%20the%20border%0A%20%20%20%20button2.style.fontSize%20%3D%20%2219px%22%3B%20%2F%2FMaking%20the%20font%20size%2020%20pixels%0A%20%20%20%20button2.style.fontWeight%20%3D%20%22550%22%3B%20%2F%2FChanging%20the%20thickness%20of%20the%20numbers%0A%20%20%20%20button2.onclick%20%3D%20calculate2%3B%20%2F%2FTelling%20it%20to%20multiply%20the%20power%20(do%20the%20function%20called%20calculate)%20when%20you%20click%20the%20button%0A%20%20%20%20box.appendChild(button2)%3B%20%2F%2FAppends%20the%20button%0A%0A%20%20%20%20let%20slider%20%3D%20document.createElement('input')%3B%20%2F%2FCreates%20the%20slider%0A%20%20%20%20slider.type%20%3D%20'range'%3B%20%2F%2FStating%20what%20type%20of%20thing%20the%20variable%20'slider'%20is%0A%20%20%20%20slider.min%20%3D%201%3B%20%2F%2FStating%20slider%20minimum%0A%20%20%20%20slider.max%20%3D%2050%3B%20%2F%2FStating%20slider%20maximum%0A%20%20%20%20slider.step%20%3D%201%3B%20%2F%2FStating%20the%20minimum%20the%20slider%20will%20change%20by.%20This%20keeps%20it%20from%20being%20a%20VERY%20long%20number.%0A%20%20%20%20slider.value%20%3D%201%3B%20%2F%2FStating%20what%20the%20value%20of%20the%20slider%20is%20before%20it's%20changed%0A%20%20%20%20slider.style.width%20%3D%20'300px'%3B%20%2F%2FStating%20slider%20width%0A%20%20%20%20slider.style.transform%20%3D%20%22translate(0%25%2C%2025%25)%22%3B%20%2F%2FMoving%20the%20slider%20down%2025%25%0A%20%20%20%20box.appendChild(slider)%3B%20%2F%2FAppends%20the%20slider%0A%0A%20%20%20%20let%20textDisplay%20%3D%20document.createElement('div')%3B%20%2F%2FCreates%20the%20text%20display%20box%0A%20%20%20%20textDisplay.style.transform%20%3D%20%22translate(47%25%2C%200%25)%22%3B%20%2F%2FMoving%20the%20display%20box%20left%205%25%20and%20up%2030%25%0A%20%20%20%20%2F%2FtextDisplay.style.color%20%3D%20'green'%3B%20%2F%2FMaking%20the%20text%20green%0A%20%20%20%20textDisplay.style.fontSize%20%3D%20%2220px%22%3B%20%2F%2FMaking%20the%20font%20size%2020%20pixels%0A%20%20%20%20textDisplay.style.fontWeight%20%3D%20%22550%22%3B%20%2F%2FChanging%20the%20thickness%20of%20the%20numbers%0A%20%20%20%20textDisplay.innerHTML%20%3D%20%221%22%3B%20%2F%2FStating%20what%20it%20needs%20to%20say%20before%20the%20slider%20moves%0A%20%20%20%20%2F%2Fdocument.querySelector(%22body%20%3E%20div.geofs-ui-center%20%3E%20div.geofs-ui-right%20%3E%20div.geofs-pads-container%22).appendChild(textDisplay)%3B%20%2F%2FAppends%20the%20display%20box%0A%20%20%20%20box.appendChild(textDisplay)%3B%0A%20%20%20%20slider.oninput%20%3D%20function()%7B%20%2F%2FChanges%20what%20the%20text%20display%20box%20says%20when%20the%20slider%20is%20moved%0A%20%20%20%20textDisplay.innerHTML%20%3D%20(slider.value)%3B%20%2F%2FThe%20actual%20changing%0A%7D%3B%0A%20%20%20%20var%20i%20%3D%200%3B%20%2F%2FDeclaring%20the%20variable%20%22i%22%0A%0A%20%20%20%20function%20calculate1()%20%7B%20%2F%2FThe%20actual%20power%20multiplying%20when%20the%20button%20is%20clicked%2C%20plus%20changing%20the%20zero%20thrust%20altitude%0A%20%20%20%20%20%20%20%20let%20value%20%3D%20parseInt(slider.value)%3B%20%2F%2FAssigning%20a%20variable%20to%20the%20slider%20value%0A%20%20%20%20%20%20%20%20console.log(geofs.aircraft.instance.setup.zeroThrustAltitude%20%3D%201e%2B162)%20%2F%2FChanges%20the%20zero%20thrust%20altitude%20way%20up%0A%20%20%20%20var%20i%20%3D%200%3B%20%2F%2FSetting%20variable%20%22i%22%20to%200%0A%20%20%20%20while%20(i%20%3C%2012)%20%7B%20%2F%2FCompleting%20some%20code%20as%20long%20as%20'i'%20is%20less%20than%2012%0A%20%20%20%20if%20(geofs.aircraft.instance.engines%5Bi%5D%20!%3D%20undefined)%20%7B%20%2F%2FSeeing%20if%20the%20engine%20under%20whatever%20%22i%22%20equals%20is%20actually%20an%20engine%0A%20%20%20%20%20geofs.aircraft.instance.engines%5Bi%5D.thrust%20%3D%20geofs.aircraft.instance.engines%5Bi%5D.thrust%2Fvalue%3B%20%2F%2FMultiplying%20it%20by%20the%20value%20of%20the%20slider%20if%20it%20is%20an%20engine%0A%20%20%20%20%7D%0A%20%20%20%20if%20(geofs.aircraft.instance.engines%5Bi%5D.afterBurnerThrust%20!%3D%20undefined)%20%7B%20%2F%2FSeeing%20if%20the%20engine%20has%20an%20afterburner%0A%20%20%20%20%20geofs.aircraft.instance.engines%5Bi%5D.afterBurnerThrust%20%3D%20geofs.aircraft.instance.engines%5Bi%5D.afterBurnerThrust%2Fvalue%3B%20%2F%2FMultiplying%20the%20afterburner%20thrust%20by%20the%20value%20of%20the%20slider%20if%20it%20has%20an%20afterburner%0A%20%20%20%20%7D%0A%20%20%20%20if%20(geofs.aircraft.instance.engines%5Bi%5D.reverseThrust%20!%3D%20undefined)%20%7B%20%2F%2FSeeing%20if%20the%20engine%20has%20reverse%20thrust%0A%20%20%20%20%20geofs.aircraft.instance.engines%5Bi%5D.reverseThrust%20%3D%20geofs.aircraft.instance.engines%5Bi%5D.reverseThrust%2Fvalue%3B%20%2F%2FMultiplying%20the%20reverse%20thrust%20by%20the%20value%20of%20the%20slider%0A%20%20%20%20%7D%0A%20%20%20%20i%2B%2B%3B%20%2F%2FChanging%20%22i%22%20up%20by%20one%20so%20that%20it%20will%20repeat%20it%20until%20it%20has%20changed%20the%20power%20of%20all%20the%20engines%0A%7D%0A%7D%0A%0A%20%20%20%20function%20calculate2()%20%7B%20%2F%2FThe%20actual%20power%20multiplying%20when%20the%20button%20is%20clicked%2C%20plus%20changing%20the%20zero%20thrust%20altitude%0A%20%20%20%20%20%20%20%20let%20value%20%3D%20parseInt(slider.value)%3B%20%2F%2FAssigning%20a%20variable%20to%20the%20slider%20value%0A%20%20%20%20%20%20%20%20console.log(geofs.aircraft.instance.setup.zeroThrustAltitude%20%3D%201e%2B162)%20%2F%2FChanges%20the%20zero%20thrust%20altitude%20way%20up%0A%20%20%20%20var%20i%20%3D%200%3B%20%2F%2FSetting%20variable%20%22i%22%20to%200%0A%20%20%20%20while%20(i%20%3C%2012)%20%7B%20%2F%2FCompleting%20some%20code%20as%20long%20as%20'i'%20is%20less%20than%2012%0A%20%20%20%20if%20(geofs.aircraft.instance.engines%5Bi%5D%20!%3D%20undefined)%20%7B%20%2F%2FSeeing%20if%20the%20engine%20under%20whatever%20%22i%22%20equals%20is%20actually%20an%20engine%0A%20%20%20%20%20geofs.aircraft.instance.engines%5Bi%5D.thrust%20%3D%20geofs.aircraft.instance.engines%5Bi%5D.thrust*value%3B%20%2F%2FMultiplying%20it%20by%20the%20value%20of%20the%20slider%20if%20it%20is%20an%20engine%0A%20%20%20%20%7D%0A%20%20%20%20if%20(geofs.aircraft.instance.engines%5Bi%5D.afterBurnerThrust%20!%3D%20undefined)%20%7B%20%2F%2FSeeing%20if%20the%20engine%20has%20an%20afterburner%0A%20%20%20%20%20geofs.aircraft.instance.engines%5Bi%5D.afterBurnerThrust%20%3D%20geofs.aircraft.instance.engines%5Bi%5D.afterBurnerThrust*value%3B%20%2F%2FMultiplying%20the%20afterburner%20thrust%20by%20the%20value%20of%20the%20slider%20if%20it%20has%20an%20afterburner%0A%20%20%20%20%7D%0A%20%20%20%20if%20(geofs.aircraft.instance.engines%5Bi%5D.reverseThrust%20!%3D%20undefined)%20%7B%20%2F%2FSeeing%20if%20the%20engine%20has%20reverse%20thrust%0A%20%20%20%20%20geofs.aircraft.instance.engines%5Bi%5D.reverseThrust%20%3D%20geofs.aircraft.instance.engines%5Bi%5D.reverseThrust*value%3B%20%2F%2FMultiplying%20the%20reverse%20thrust%20by%20the%20value%20of%20the%20slider%0A%20%20%20%20%7D%0A%20%20%20%20i%2B%2B%3B%20%2F%2FChanging%20%22i%22%20up%20by%20one%20so%20that%20it%20will%20repeat%20it%20until%20it%20has%20changed%20the%20power%20of%20all%20the%20engines%0A%7D%0A%7D%0A%0A%20%20%20%20const%20toggleButton%20%3D%20document.createElement('button')%3B%0A%20%20toggleButton.innerHTML%20%3D%20'Power%20Options'%3B%0A%20%20toggleButton.style.backgroundColor%20%3D%20'transparent'%3B%0A%20%20toggleButton.style.border%20%3D%20'none'%3B%0A%20%20toggleButton.style.borderRadius%20%3D%20'5px'%3B%0A%20%20toggleButton.style.cursor%20%3D%20'pointer'%3B%0A%0A%20%20document.querySelector(%22body%20%3E%20div.geofs-ui-bottom%22).appendChild(toggleButton)%3B%0A%0A%20%20toggleButton.addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20toggleBox()%3B%0A%0A%20%20%20%20if%20(box.style.display%20%3D%3D%3D%20'block')%20%7B%0A%20%20%20%20%20%20const%20buttonRect%20%3D%20toggleButton.getBoundingClientRect()%3B%0A%20%20%20%20%20%20box.style.top%20%3D%20buttonRect.top%20-%202*box.offsetHeight%20-%20(document.querySelector(%22%23geofs-ui-3dview%20%3E%20div.geofs-instruments-container%20%3E%20div%3Anth-child(23)%22).offsetHeight)%20%2B%20'px'%3B%0A%20%20%20%20%20%20box.style.right%20%3D%20window.innerWidth%20-%20buttonRect.right%20%2B%20((buttonRect.right%20-%20buttonRect.left)%2F2)%20-%20(box.offsetWidth%20%2F%202)%20%2B%20'px'%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%7D)()%3B%7D)()%3B
