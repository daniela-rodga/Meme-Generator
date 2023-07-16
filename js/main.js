function DOMLoaded () {
    let imageSource = "./img/meme/background_default.png"
    document.getElementById("meme_image").src = imageSource
}

addEventListener("DOMContentLoaded", DOMLoaded)

function changeImageSource () {
    let imageSource = document.getElementById("meme_image_url").value
    document.getElementById("meme_image").src = imageSource
}

let memeImageURL = document.getElementById("meme_image_url")

memeImageURL.addEventListener("input", changeImageSource)

// updateBackgroundColor. This function update the background color propierties of the meme image:
// 1. Check the background color selected by the user using the color picker
// 2. Check the background color effect selected by the user using the selector
// 3. If user selected a background color, update the background color label string for the meme (added as an span in the html doc)
// 4. Also, if there's any color effect different to 'none' selected, then is gonna apply the new background color and effect to the background of the meme image
function updateBackgroundColor () {
    let bgColor = document.getElementById("background_meme_color").value
    let bgColorEffect = document.getElementById("background_meme_color_effect").value
    // Update the label for the background meme color
    document.getElementById("background_meme_color_label").innerHTML = bgColor
    // Apply (according to the effect selected by the user) the appropiate mix-color-blend css propierty
    document.getElementById("meme_image_container").style.backgroundColor = bgColor
    document.getElementById("meme_image").style.mixBlendMode = bgColorEffect    
}

let backgroundColor = document.getElementById("background_meme_color")
backgroundColor.addEventListener("change", updateBackgroundColor)

let backgroundColorEffect = document.getElementById("background_meme_color_effect")
backgroundColorEffect.addEventListener("change", updateBackgroundColor)

// Retrieving the array of filters in class "slider"
// Then, iterating through each element (filter) to check their value and apply it.
let filters = document.getElementsByClassName("slider")
for(var index=0;index < filters.length;index++){
    let currentFilter = filters[index]
    currentFilter.addEventListener("input", (event) => {
        document.getElementById("meme_image").style.filter = currentFilter.id+"("+currentFilter.value+")"
    })
}