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
let filters = document.getElementsByClassName("slider")

function updateFiltersValues () {
    let auxFilter = ""
    for(var index=0;index < filters.length;index++){
        let suffixFilter = ""
        let currentFilter = filters[index]
        console.log(currentFilter.id,currentFilter.value, currentFilter.innerHTML)
        if(currentFilter.id === "contrast" || currentFilter.id === "grayscale" || currentFilter.id === "sepia" || currentFilter.id === "saturate")
            {suffixFilter = "%"}
        else if(currentFilter.id === "blur")
            {suffixFilter = "px"}
        else if(currentFilter.id === "hue-rotate")
            {suffixFilter = "deg"}
        
        if(index == filters.length -1)
            auxFilter += currentFilter.id+"("+currentFilter.value+suffixFilter+")"
        else
            auxFilter += currentFilter.id+"("+currentFilter.value+suffixFilter+") "
        

    }
    console.log(auxFilter)
    document.getElementById("meme_image").style.filter = auxFilter
}

// Iterating through each element (filter) to check their value and apply it.
for(var index=0;index < filters.length;index++){
    let currentFilter = filters[index]
    currentFilter.addEventListener("change", updateFiltersValues)
}

function resetFiltersValues () {
    document.getElementById("brightness").value = "1"
    document.getElementById("opacity").value = "1"
    document.getElementById("contrast").value = "100"
    document.getElementById("blur").value = "0"
    document.getElementById("grayscale").value = "0"
    document.getElementById("sepia").value = "0"
    document.getElementById("hue-rotate").value = "0"
    document.getElementById("saturate").value = "100"
    document.getElementById("invert").value = "0"
}

let filtersReset = document.getElementById("image_filters")
filtersReset.addEventListener("reset", (event) => {
    resetFiltersValues()
    updateFiltersValues()
    
})