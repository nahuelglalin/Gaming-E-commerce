// Glide Js Carousel

const slider = document.getElementById('glide');

if(slider){
    new Glide(slider, {
        type: "carousel",
        startAt: 0,
        autoplay: 2000,
        hoverpause: true,
        perView: 4,
        animationDuration: 700,
        animationTimingFunc: "ease-in-out",
        breakpoints:{
            1200: {
                perView: 3
            },
            768: {
                perView: 2
            },
        }    }).mount();
}

