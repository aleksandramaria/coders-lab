//
// //
// // var mobile = window.matchMedia("screen and (max-width: 320px)");
// //
// // if (mobile.matches) {
// //     /* tutaj ekran jest mniejszy lub równy 320px */
// //     nav-desktop.classList.add('hidden');
// // }else {
// //     /* tutaj ekran jest większy niż 320px */
// // }
//
//
//
// var desktopNav = document.querySelector(".nav-desktop");
// var mobileNav = document.querySelector(".nav-mobile");
// var menuToggle = document.querySelector(".menu-toggle");
//
//
// var mobile = window.matchMedia("screen and (max-width: 920px)");
// mobile.addListener (function(mobile) {
//
//     if (mobile.matches) {
//         console.log("Match");
//         desktopNav.classList.add("hidden");
//         mobileNav.classList.remove("hidden");
//         menuToggle.classList.remove("hidden");
//     } else {
//         console.log("not Match");
//         desktopNav.classList.remove("hidden");
//         mobileNav.classList.add("hidden");
//         menuToggle.classList.add("hidden");
//     }
//
// });
//
// menuToggle.addEventListener('click', function (e) {
//    // .style.display = block;
//     mobileNav.classList.toggle('opened');
//
// })


var mobile = window.matchMedia("screen and (min-width: 920px)")
var navDesktop = document.querySelector('.nav-desktop');
var navMobile = document.querySelector('.nav-mobile');
var menuToggle = document.querySelector('.menu-toggle');

if (mobile.matches) {
    navDesktop.classList.remove('hidden');
    menuToggle.classList.add('hidden');
} else {
    navDesktop.classList.add('hidden');
    menuToggle.classList.remove('hidden');
}

mobile.addListener(function (mobile) {
    if (mobile.matches) {
        navDesktop.classList.remove('hidden');
        menuToggle.classList.add('hidden');
    } else {
        navDesktop.classList.add('hidden');
        menuToggle.classList.remove('hidden');
    }
});

menuToggle.addEventListener('click', function() {
    console.log('test');
    navMobile.classList.toggle('opened');
});