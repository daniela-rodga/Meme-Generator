const $ = (id) => document.getElementById(id)

function DOMLoaded () {
    let imageSource = "./img/meme/background_default.png"
    $("meme_image").src = imageSource
}

addEventListener("DOMContentLoaded", DOMLoaded)

function changeImageSource () {
    let imageSource = $("meme_image_url").value
    $("meme_image").src = imageSource
}

let memeImageURL = $("meme_image_url")

memeImageURL.addEventListener("input", changeImageSource)

// updateBackgroundColor. This function update the background color propierties of the meme image:
// 1. Check the background color selected by the user using the color picker
// 2. Check the background color effect selected by the user using the selector
// 3. If user selected a background color, update the background color label string for the meme (added as an span in the html doc)
// 4. Also, if there's any color effect different to 'none' selected, then is gonna apply the new background color and effect to the background of the meme image
function updateBackgroundColor () {
    let bgColor = $("background_meme_color").value
    let bgColorEffect = $("background_meme_color_effect").value
    // Update the label for the background meme color
    $("background_meme_color_label").innerHTML = bgColor
    // Apply (according to the effect selected by the user) the appropiate mix-color-blend css propierty
    $("meme_image_container").style.backgroundColor = bgColor
    $("meme_image").style.mixBlendMode = bgColorEffect    
}

let backgroundColor = $("background_meme_color")
backgroundColor.addEventListener("change", updateBackgroundColor)

let backgroundColorEffect = $("background_meme_color_effect")
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
    $("meme_image").style.filter = auxFilter
}

// Iterating through each element (filter) to check their value and apply it.
for(var index=0;index < filters.length;index++){
    let currentFilter = filters[index]
    currentFilter.addEventListener("change", updateFiltersValues)
}

function resetFiltersValues () {
    $("brightness").value = "1"
    $("opacity").value = "1"
    $("contrast").value = "100"
    $("blur").value = "0"
    $("grayscale").value = "0"
    $("sepia").value = "0"
    $("hue-rotate").value = "0"
    $("saturate").value = "100"
    $("invert").value = "0"
}

let filtersReset = $("image_filters")
filtersReset.addEventListener("reset", (event) => {
    resetFiltersValues()
    updateFiltersValues()
    
})

function updateText () {
    // Update the legend on top and bottom
    let newTopText = $("top_text").value
    let newBotText = $("bot_text").value
    let topText = $("top_text_meme")
    let bottomText = $("bot_text_meme")
    topText.innerHTML = newTopText
    bottomText.innerHTML = newBotText

    // Update the font being used
    let newTextFont = $("meme_font").value

    // Update the font size being used
    let newFontSize = $("meme_font_size").value
    let auxFont = newFontSize+"px"+" "+newTextFont
    console.log(auxFont)
    topText.style.font = auxFont
    bottomText.style.font = auxFont

    // Update the opacity of the text background
    let checkBox = $("no_background")
    console.log(checkBox.checked)
    if(checkBox.checked)
    {
        $("meme_top_text_container").style.backgroundColor = "rgba(0,0,0,0)"
        $("meme_bot_text_container").style.backgroundColor = "rgba(0,0,0,0)"
    }
    else
    {
        let newTextBgColor = $("background_text_color")
        let bgColorTop = $("meme_top_text_container")
        let bgColorBot = $("meme_bot_text_container")
        bgColorTop.style.backgroundColor = newTextBgColor.value
        bgColorBot.style.backgroundColor = newTextBgColor.value 
    }
}

let getTextProperties = $("text_properties")
getTextProperties.addEventListener("change", updateText)

// Update the text align of the meme
let textAlignLeft = $("left-text-align")
let textAlignCenter = $("center-text-align")
let textAlignRight = $("right-text-align")
textAlignLeft.addEventListener("click", (event) => {
    let topText = $("top_text_meme")
    let bottomText = $("bot_text_meme")
    topText.style.textAlign = "left"
    bottomText.style.textAlign = "left"
})

textAlignCenter.addEventListener("click", (event) => {
    let topText = $("top_text_meme")
    let bottomText = $("bot_text_meme")
    topText.style.textAlign = "center"
    bottomText.style.textAlign = "center"
})

textAlignRight.addEventListener("click", (event) => {
    let topText = $("top_text_meme")
    let bottomText = $("bot_text_meme")
    topText.style.textAlign = "right"
    bottomText.style.textAlign = "right"
})

// Update the color of the text 
let newTextColor = $("text_color")
let newTextBgColor = $("background_text_color")


newTextColor.addEventListener("input", (event) => {
    let topText = $("top_text_meme")
    let bottomText = $("bot_text_meme")
    topText.style.color = newTextColor.value
    bottomText.style.color = newTextColor.value
    
})

newTextBgColor.addEventListener("input", (event) => {
    let bgColorTop = $("meme_top_text_container")
    let bgColorBot = $("meme_bot_text_container")
    bgColorTop.style.backgroundColor = newTextBgColor.value
    bgColorBot.style.backgroundColor = newTextBgColor.value    
})



