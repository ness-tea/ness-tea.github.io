// Globals
var urlindex = 0;
var urls = ["assets/Images/Page_backgrounds/homepage2.jpg",
            "assets/Images/Page_backgrounds/homepage3.jpg"];

// Set background every 1000 ms for GIF effect. 
function setBackgroundImage() {
    setInterval(changeBackground, 1000);
}

// Changes background.
function changeBackground() {
    if (urlindex == urls.length)
    {
        urlindex = 0;
    }
    document.getElementById('hero').style.backgroundImage = 'url(' + urls[urlindex] + ')';
    urlindex += 1;          
}