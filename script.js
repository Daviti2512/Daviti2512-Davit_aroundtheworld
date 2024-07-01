//-----------search-----------//
let search = document.getElementById("hearder_search")
search.style.backgroundColor ="#ADBCCF"
search.style.color = "black"
search.style.fontSize = "12px"
search.style.borderRadius = "5px"
function search_click(){
    if (search.style.display === "none" && photo_2.style.display === "block") {
        search.style.display = "block"
        photo_2.style.display = "none"
        button_for_close.style.display = "block"        
    } else {
        search.style.display = "none"
        photo_2.style.display = "block"
        button_for_close.style.display = "none"
    }
}
function close_X(){
    if (search.style.display === "block" && photo_2.style.display === "none") {
        search.style.display = "none"
        photo_2.style.display = "block"
        button_for_close.style.display = "none"
    }
}
//-----------search-----------//


// ---------offers-----------//
document.addEventListener('DOMContentLoaded', function () {
    const starElements = document.querySelectorAll('.stars');

    starElements.forEach(stars => {
        const rating = parseInt(stars.getAttribute('data-rating'));
        renderStars(stars, rating);

        stars.addEventListener('click', function (e) {
            if (e.target.tagName === 'I') {
                const index = Array.from(stars.children).indexOf(e.target);
                renderStars(stars, index + 1);
                stars.setAttribute('data-rating', index + 1);
            }
        });
    });
    
    function renderStars(stars, rating) {
        stars.innerHTML = '';

        for (let i = 0; i < rating; i++) {
            const starIcon = document.createElement('i');
            starIcon.classList.add('bx', 'bxs-star');
            stars.appendChild(starIcon);
        }

        for (let i = rating; i < 5; i++) {
            const starIcon = document.createElement('i');
            starIcon.classList.add('bx', 'bx-star');
            stars.appendChild(starIcon);
        }
    }
});



let container_2_div_1 = document.getElementById("div-1")
let container_2_div_2 = document.getElementById("div-2")
// left click
function right_click(){
    
    if(true){
        container_2_div_2.style.display = "flex"
        container_2_div_1.style.display = "none"
    }
}
// right click
function left_click(){

    if(true){
        container_2_div_1.style.display = "flex"
        container_2_div_2.style.display = "none"
    }
   
}
// ---------offers-----------//


//-------change lenguage--------//
function change_language() {
    let change_language = document.getElementById("change_language").value
    
    let leftside_nav_bar = document.querySelector(".leftside_nav_bar")
    let leftside_nav_bar_GE = document.querySelector(".leftside_nav_bar_GE")
    let for_runing_text_1 = document.querySelector(".for_runing_text_1")
    let for_runing_text_1_GE = document.querySelector(".for_runing_text_1_GE")
    let container_2_main_2 = document.querySelector(".container_2_main_2")
    let container_2_main_2_GE = document.querySelector(".container_2_main_2_GE")
    let container_3_main = document.querySelector(".container_3_main")
    let container_3_main_GE = document.querySelector(".container_3_main_GE")
    let container_5_main = document.querySelector(".container_5_main")
    let container_5_main_GE = document.querySelector(".container_5_main_GE")
    let container_6 = document.querySelector(".container_6")
    let container_6_GE = document.querySelector(".container_6_GE")
    let footer_2 = document.querySelector(".footer_2")
    let footer_2_GE = document.querySelector(".footer_2_GE")
    let footer_3 = document.querySelector(".footer_3")
    let footer_3_GE = document.querySelector(".footer_3_GE")


    // language change
    if (change_language === "Georgian"){
        leftside_nav_bar.style.display = "none"
        leftside_nav_bar_GE.style.display = "flex"
    }else if (change_language === "English"){
        leftside_nav_bar.style.display = "flex"
        leftside_nav_bar_GE.style.display = "none"
    }

    // georgian rining text
    if(change_language === "Georgian"){
        for_runing_text_1.style.display = "none"
        for_runing_text_1_GE.style.display = "block"
    }else if(change_language === "English"){
        for_runing_text_1.style.display = "block"
        for_runing_text_1_GE.style.display = "none"
    }

    // georgian container 2
    if(change_language === "Georgian"){
        container_2_main_2.style.display = "none"
        container_2_main_2_GE.style.display = "flex"
    }else if(change_language === "English"){
        container_2_main_2.style.display = "flex"
        container_2_main_2_GE.style.display = "none"
    }

    // georgian container 3
    if(change_language === "Georgian"){
        container_3_main.style.display = "none"
        container_3_main_GE.style.display = "block"
    }else if(change_language === "English"){
        container_3_main.style.display = "block"
        container_3_main_GE.style.display = "none"
    }

    // georgian container 5
    if(change_language === "Georgian"){
        container_5_main.style.display = "none"
        container_5_main_GE.style.display = "block"
    }else if(change_language === "English"){
        container_5_main.style.display = "block"
        container_5_main_GE.style.display = "none"
    }

    // georgian container 6
    if(change_language === "Georgian"){
        container_6.style.display = "none"
        container_6_GE.style.display = "block"
    }else if(change_language === "English"){
        container_6.style.display = "block"
        container_6_GE.style.display = "none"
    }

    // georgian footer_2
    if(change_language === "Georgian"){
        footer_2.style.display = "none"
        footer_2_GE.style.display = "flex"
    }else if(change_language === "English"){
        footer_2.style.display = "flex"
        footer_2_GE.style.display = "none"
    }

    // georgian footer_3
    if(change_language === "Georgian"){
        footer_3.style.display = "none"
        footer_3_GE.style.display = "flex"
    }else if(change_language === "English"){
        footer_3.style.display = "flex"
        footer_3_GE.style.display = "none"
    }

}
document.getElementById("change_language").addEventListener("change", change_language)
//-------change lenguage--------//



const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}




animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])

