const $ = (id) => document.getElementById(id)

function DOMLoaded () {
    $("meme_image").style.backgroundColor = "black"
    console.log($("meme_image").style.backgroundColor)
}

addEventListener("DOMContentLoaded", DOMLoaded)

let memeImageURL = $("meme_image_url")

function changeImageSource () {
    let newMemeImg = memeImageURL.value
    $("meme_image").style.backgroundImage = "url("+newMemeImg+")"
    console.log($("meme_image").style.backgroundImage)
}


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
        $ ("background_text_color_label").innerHTML = newTextBgColor.value
    }

    // Update the margin (bottom and top) of each paragraph (bottom and top)
    let newMargin = $("meme_text_margin").value
    topText.style.marginTop = newMargin+"px" 
    topText.style.marginBottom = newMargin+"px" 
    bottomText.style.marginTop = newMargin+"px" 
    bottomText.style.marginBottom = newMargin+"px" 

    // Update the line spacing of each paragraph (bottom and top)
    let newLineSpacing = $("meme_text_line_spacing").value
    topText.style.lineHeight = newLineSpacing
    bottomText.style.lineHeight = newLineSpacing
    
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
    $ ("text_meme_color_label").innerHTML = newTextColor.value
    
})

newTextBgColor.addEventListener("input", (event) => {
    let bgColorTop = $("meme_top_text_container")
    let bgColorBot = $("meme_bot_text_container")
    bgColorTop.style.backgroundColor = newTextBgColor.value
    bgColorBot.style.backgroundColor = newTextBgColor.value    
    $ ("background_text_color_label").innerHTML = newTextBgColor.value
})

// Update the text outline
let noTextStroke = $ ("no-text-stroke")
let lightTextStroke = $ ("light-text-stroke")
let darkTextStroke = $ ("dark-text-stroke")

noTextStroke.addEventListener("click", (event) => {
    let topText = $("top_text_meme")
    let bottomText = $("bot_text_meme")
    topText.style.webkitTextStroke = "0px rgba(0,0,0,0)"
    bottomText.style.webkitTextStroke = "0px rgba(0,0,0,0)"
})

lightTextStroke.addEventListener("click", (event) => {
    let topText = $("top_text_meme")
    let bottomText = $("bot_text_meme")
    topText.style.webkitTextStroke = "2px white"
    bottomText.style.webkitTextStroke = "2px white"
})

darkTextStroke.addEventListener("click", (event) => {
    let topText = $("top_text_meme")
    let bottomText = $("bot_text_meme")
    topText.style.webkitTextStroke = "2px black"
    bottomText.style.webkitTextStroke = "2px black"
})



