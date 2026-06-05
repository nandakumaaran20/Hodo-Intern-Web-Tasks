document.addEventListener("DOMContentLoaded", () => {

    console.log("Hero section loaded");

});

const benefitCards = document.querySelectorAll('.benefit-card');

benefitCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

const images = [
    "https://www.vplayed.com/assets/images/new-home/recommendations.webp",
    "https://www.vplayed.com/assets/images/new-home/metadata.webp",
    "https://www.vplayed.com/assets/images/new-home/transalate.webp",
    "https://www.vplayed.com/assets/images/new-home/subtitle.webp"
];

let current = 0;

const showcase = document.getElementById("displayImage");

setInterval(() => {

    showcase.style.opacity = 0;

    setTimeout(() => {

        current = (current + 1) % images.length;

        showcase.src = images[current];

        showcase.style.opacity = 1;

    }, 400);

}, 1500);

const caseStudies = [

{
title:"How USA's top yoga school increased its userbase by 321%",
desc:"VPlayed built a user-friendly yoga platform enabling seamless online learning and monetization.",
image:"https://www.vplayed.com/assets/images/new-home/practyce.webp"
},

{
title:"Leading fitness brand expanded globally with OTT streaming",
desc:"Built a scalable streaming platform supporting thousands of users.",
image:"https://www.vplayed.com/assets/images/new-home/netwerse.webp"
},

{
title:"Media company doubled revenue using subscription model",
desc:"Implemented SVOD monetization and advanced analytics.",
image:"https://www.vplayed.com/assets/images/new-home/moneyflix.webp"
},

{
title:"Sports platform reached millions of viewers worldwide",
desc:"Low latency live streaming improved engagement.",
image:"https://www.vplayed.com/assets/images/new-home/fannu.webp"
},

{
title:"Entertainment network transformed digital distribution",
desc:"Cloud TV deployment improved reach and performance.",
image:"https://www.vplayed.com/assets/images/new-home/abp.webp"
}

];

let caseIndex = 0;

setInterval(()=>{

caseIndex++;

if(caseIndex >= caseStudies.length){
caseIndex = 0;
}

document.getElementById("caseStudyTitle").innerText =
caseStudies[caseIndex].title;

document.getElementById("caseStudyDesc").innerText =
caseStudies[caseIndex].desc;

document.getElementById("caseStudyImage").src =
caseStudies[caseIndex].image;

},4000);