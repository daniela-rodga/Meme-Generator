function DOMLoaded () {
    let imageSource = "./img/meme/background_default.png"
    document.getElementById("meme_image_src").src = imageSource
}

addEventListener("DOMContentLoaded", DOMLoaded)

function changeImageSource () {
    let imageSource = document.getElementById("meme_image_url").value
    document.getElementById("meme_image_src").src = imageSource
    console.log(imageSource)
}

addEventListener("input", changeImageSource)
