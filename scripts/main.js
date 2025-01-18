
var profileHtml = "<div class=\"profile\"><img class=\"profile-img\" oncontextmenu=\"return false;\" src=\"assets/img/about/profile.png\"></div>"

// Store the content for each section
const pageIndex = 2
const pageContentData = {
    art: "<p>(construction in progress)</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p><br><p>I am a bat</p>",
    games: "<h1>games</h1><p>(construction in progress)</p>",
    music: "<h1>music</h1><br/><br/><br/><br/><br/><p>(construction in progress)</p>",
    thoughts: "<h1>thoughts</h1><p>(construction in progress)</p>"
};

function loadContent(pageId) {
    const content = pageContentData[pageId] || "";
    const newElement = document.getElementById("content-page-subcontainer");
    newElement.innerHTML = content;
}

// Welcome animations
gsap.from('#hero-opener', { duration:2, opacity:0, ease: 'slow', delay:0.5})
gsap.from('#hero-divider', { duration:2, x:'-100%', ease:'power3' })
gsap.from('#hero-divider', { duration:1.5, opacity:0 })
gsap.from('#hero-links-inline', { duration:2, opacity:0, delay:1})
gsap.from('#hero-links-inline', { duration:1.5, x:'-100%', delay:0.8})

gsap.from('#hero-links-guide', { duration:1.5, opacity:0, delay:1.25,
    onComplete: ()=> {
        blockEvents = false;
        console.log("Last animation is loaded - link triggers are now allowed.");
    }
})

gsap.from('.profile', { duration:2, opacity:0 })
gsap.from('#footer, #contact', { duration:1, opacity:0, delay:1})

let blockEvents = true;
let timelineNavPopulated = false;
const timelineNav = gsap.timeline({ defaults: {duration: 1}});
const linksInline = document.querySelectorAll('.link-inline');
const linksMenu = document.querySelectorAll('.link-menu');
const homeButton = document.querySelector('.home');

linksInline.forEach(link => {
    link.addEventListener('click', function(event) {
        if (blockEvents) {
            console.log("Events are blocked until the page is loaded.");
        }
        else
        {
            if (timelineNavPopulated == false)
            {
                timelineNav
                    .add(gsap.to('#hero-links-guide, #contact, #footer', { duration:1, opacity:0 }), 0)
                    .add(gsap.to('#contact, #footer', { pointerEvents:"none" }))
                    .add(gsap.to('#hero-divider', { duration:1, x:'-100%', delay:0.25 }), 0)
                    .add(gsap.to('#hero-divider', { duration:1, opacity:0, ease:'power3.out', delay:0.25 }), 0)
                    .add(gsap.to('#hero-links-inline', { duration:1, x:'-100%' }), 0)
                    .add(gsap.to('#hero-links-inline', { duration:1, opacity:0 }), 0)
                    .add(gsap.set('#hero-links-inline', { pointerEvents:"none" }))
                    .add(gsap.to('#hero-links-menu', { duration:1, opacity:1, ease:'power2.out', delay:0.5}), 0)
                    .add(gsap.set('#hero-links-menu', { pointerEvents:"auto" }))
                    .add(gsap.to('#hero-opener', { duration:0.5, opacity:0, ease:'slow', delay:0.75 }), 0)
                    .add(gsap.to('#hero-name', { duration:0.5, opacity:0, ease:'power2.out', delay:0.5 }), 0)
                    .add(gsap.to('.profile', { duration:1, y:'-60%', x:'120%', scale:0.4, ease:'slow'}), 0)
                    .add(gsap.to('#content-page-subcontainer', { duration:1, opacity:1, delay:0.8 }), 0)

                timelineNavPopulated = true;
            }
            else{
                timelineNav.play()
            }

            const pageId = this.getAttribute("class").split(" ")[pageIndex];
            loadContent(pageId);
        }
    }, true);
})

linksMenu.forEach(link => {
    link.addEventListener('click', function(event) {
        if (blockEvents) {
            console.log("Events are blocked until the page is loaded.");
        }
        else
        {
            console.log("Link menu is being clicked");
            const pageId = this.getAttribute("class").split(" ")[pageIndex];
            if (pageId == "home") {
                var disableLinksMenu = document.getElementById("hero-links-menu").style.pointerEvents = "none";
            }
            loadContent(pageId);
        }

    }, true)
})

homeButton.addEventListener('click', ()=> {
    timelineNav.reverse();
})