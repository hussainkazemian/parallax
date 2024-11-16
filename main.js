// window.addEventListener("scroll", function(event){

//     var top = this.scrollY;

//     console.log(top);

//     var layers = document.querySelectorAll("[data-type='parallax']");
//     console.log(layer);

//     var layer, speed, yPos;
//     for (var i = 0; i < layers.length; i++) {
//         layer = layers[i];
//         speed = layer.getAttribute('data-speed');
//         var yPos = -(top * speed / 100);
//         layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

//     }
// });

// Parallax scroll effect
// window.addEventListener("scroll", function (event) {
//     var top = this.scrollY;
//     console.log(top);

//     var layers = document.querySelectorAll("[data-type='parallax']");
//     var layer, speed, yPos;
//     for (var i = 0; i < layers.length; i++) {
//         layer = layers[i];
//         speed = layer.getAttribute('data-speed');
//         yPos = -(top * speed / 100);
//         layer.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
//     }
// });

// const spacat = document.querySelector('#spacat');
// const layerOne = document.querySelector('.layer-1');
// const layerTwo = document.querySelector('.layer-2');
// const layerThree = document.querySelector('.layer-3');
// const mouse = document.querySelector('#mouse');
// const mouseCenter = document.querySelector('#mouse-center');

// document.addEventListener('mousemove', (evt) => {
//     let cx = window.innerWidth / 2;
//     let cy = window.innerHeight / 2;

//     let clientX = evt.clientX;
//     let clientY = evt.clientY;

//     let mouseLoc = `Top mouse ${clientX}px and ${clientY}px`;
//     mouse.innerHTML = mouseLoc;

//     let mc_x = cx - clientX;
//     let mc_y = cy - clientY;

//     let centerLoc = `center ${mc_x}px and ${mc_y}px`;
//     mouseCenter.innerHTML = centerLoc;

//     layerOne.style.transform = 'translateX(' + mc_x / 100 + '%) translateY(' + mc_y / 100 + '%)';
    
//     layerTwo.style.transform = 'translateX(' + mc_x / 350 + '%) translateY(' + mc_y / 350 + '%)';
//     layerThree.style.transform = 'translateX(' + mc_x / 200 + '%) translateY(' + mc_y / 200 + '%)'; 

// });

// window.addEventListener('scroll', function (event) {
//     var winScroll = this.document.body.scrollTop || document.documentElement.scrollTop;
//     var height = this.document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById('myBar').style.width = scrolled + '%';
// });

const spacat = document.querySelector('#spacat'); 
const layerOne = document.querySelector('.layer-1');
const layerTwo = document.querySelector('.layer-2');
const layerThree = document.querySelector('.layer-3');
const mouse = document.querySelector('#mouse');
const mouseCenter = document.querySelector('#mouse-center');

document.addEventListener('mousemove', (evt) => {
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    let clientX = evt.clientX;
    let clientY = evt.clientY;

    let mouseLoc = `Top mouse ${clientX}px and ${clientY}px`;
    mouse.innerHTML = mouseLoc;

    let mc_x = cx - clientX;
    let mc_y = cy - clientY;

    let centerLoc = `center ${mc_x}px and ${mc_y}px`;
    mouseCenter.innerHTML = centerLoc;

    // Layer 1 - slight parallax with scale and rotation
    layerOne.style.transform = `
        translateX(${mc_x / 100}%) translateY(${mc_y / 100}%)
        scale(${1 + mc_y / 5000}) /* Scale based on vertical position */
        rotate(${mc_x / 300}deg) /* Rotate slightly based on horizontal position */
    `;

    // Layer 2 - slower parallax with rotation
    layerTwo.style.transform = `
        translateX(${mc_x / 350}%) translateY(${mc_y / 350}%)
        rotate(${mc_x / 500}deg) /* Rotate slightly less than layer 1 */
        scale(${1 + mc_x / 10000}) /* Subtle scale change */
    `;

    // Layer 3 - medium parallax with scale, rotation, and opacity
    layerThree.style.transform = `
        translateX(${mc_x / 200}%) translateY(${mc_y / 200}%)
        scale(${1 + mc_y / 7000}) /* Adds depth by scaling based on mouse position */
        rotate(${mc_y / 400}deg) /* Adds slight rotation */
    `;
    layerThree.style.opacity = `${1 - Math.abs(mc_y) / 2000}`; // Fade based on distance from center
});

window.addEventListener('scroll', function (event) {
    var winScroll = this.document.body.scrollTop || document.documentElement.scrollTop;
    var height = this.document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';


    // Update progress bar width based on scroll position
    progressBar.style.width = scrollPercentage + '%';

    // Scroll-based parallax effects
    // Layer 1 - Moves slower on scroll, additional skew effect
    layerOne.style.transform += `
        translateY(${scrollY / 5}px)
        skew(${scrollY / 200}deg, ${scrollY / 300}deg)
    `;

    // Layer 2 - Moves at a moderate rate, with scale and rotation based on scroll
    layerTwo.style.transform += `
        translateY(${scrollY / 8}px)
        rotate(${scrollY / 100}deg)
        scale(${1 + scrollY / 5000})
    `;

    // Layer 3 - Moves faster for background effect, fades out slightly
    layerThree.style.transform += `
        translateY(${scrollY / 3}px)
        scale(${1 + scrollY / 10000})
    `;
    layerThree.style.opacity = `${1 - scrollY / (documentHeight * 0.5)}`;
    });