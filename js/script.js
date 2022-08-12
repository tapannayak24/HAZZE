
// PRELOADER STARTS
$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloader").delay(200).fadeOut("slow");  
});


// CAROUSEL STARTS
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay: false,
    autoplayTimeout: 1520,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})





