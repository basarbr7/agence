
// ===============preloder end =======================
// var preloder = document.querySelector(".preloder");

// window.addEventListener('load', function(){
//     preloder.style.display = "none"
// })
// ===============preloder end =======================


// ===============navbar start====================
const navbar = document.querySelector("#navbar");

document.addEventListener('scroll', function(){
    let sticky = window.scrollY;
    if(sticky>100){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
})
// ===============navbar end======================


/*===================slick slider start=========================*/
$('.banner_slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    // fade:true
});




$('.reviewslider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<i class="fa-solid fa-angle-left prev"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right next"></i>`,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 991.99,
            settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            prevArrow: `<i class="fa-solid fa-arrow-left prev"></i>`,
            nextArrow: `<i class="fa-solid fa-arrow-right next"></i>`,
            }
        },
        {
            breakpoint: 767.99,
            settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
            prevArrow: `<i class="fa-solid fa-arrow-left prev"></i>`,
            nextArrow: `<i class="fa-solid fa-arrow-right next"></i>`,
            }
        },
        {
            breakpoint: 575.99,
            settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: `<i class="fa-solid fa-arrow-left prev"></i>`,
            nextArrow: `<i class="fa-solid fa-arrow-right next"></i>`,
            }
        },
    ],
});

/*===================slick slider end=========================*/








/*============================================*/
/*============================================*/
/*============================================*/
/*============================================*/
/*============================================*/