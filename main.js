const viewport_width = window.innerWidth;

var button_to_about = document.getElementById("about_button");
var about = document.getElementById("about");
var about_left = document.getElementById("about_left");

var group1 = document.getElementById("group1");
var group2 = document.getElementById("group2");

var scroll_img = document.getElementById("scroll_img");

const observer = new IntersectionObserver((entries) =>  {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            scroll_img.style.animationPlayState = "running";

        }
    });
});

observer.observe(document.querySelector("#scroll_img"))

console.log(viewport_width);

if (viewport_width < 1000){
    about_left.remove();
    
}

function pause(element1, element2){
    element1.style.animationPlayState = 'paused';
    element2.style.animationPlayState = 'paused';
    console.log("paused", element1)
}


function running(element1, element2){
    element1.style.animationPlayState = 'running';
    element2.style.animationPlayState = 'running';
    console.log("running")
}


group1.addEventListener('mouseover',  function(){pause(group1, group2)});
group1.addEventListener('mouseout', function(){running(group1, group2)});


group2.addEventListener('mouseover',  function(){pause(group1,group2)});
group2.addEventListener('mouseout', function(){running(group1,group2)});

button_to_about.addEventListener('click', function(){
    about.scrollIntoView({
        behavior: 'smooth',
        block:'start'
    });
    console.log("HELLO")
});




