var blogSwiper = new Swiper('.blog_swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    autoHeight: true,
    simulateTouch: false,
    keyboard: {
        enable: true, 
        onlyInViewport: true, 
        pageUpDown: true, 
    },
    pagination: {
        type: 'bullets',
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});


var testimonialsSwiper = new Swiper('.testimonials_container_swiper', {
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1.2,
        },
        600: {
            slidesPerView: 1.43,
            spaceBetween: 30,
        },
        960: {
            slidesPerView: 1.43,
            spaceBetween: 64,
        },
        1140: {
            slidesPerView: 1.43,
            spaceBetween: 64,
        },
    },
    watchOverflow: true,
    keyboard: {
        enable: true, 
        onlyInViewport: true, 
        pageUpDown: true, 
    },
    pagination: {
        type: 'bullets',
        el: '.swiper-pagination',
        clickable: true,
    },
    // autoplay: {
    //     delay: 1700,
    //     // disableOnInteraction: true,
    // },
    speed: 1200,
});

// function whatHeight() {
//     console.log('отступ от верха документа до верха window ', window.pageYOffset); 
//     console.log('высота окна window', document.documentElement.clientHeight); 
//     console.log('макс высота документа ', document.documentElement.scrollHeight);
//     console.log('отступ от верха window относительно элемента низа элемента', document.querySelector('.chart_section').getBoundingClientRect().bottom);
//     console.log('расстояние до низа элемента относительно начала document ', document.querySelector('.chart_section').getBoundingClientRect().bottom + window.pageYOffset);
//     console.log('орицательное значение когда низ window достиг низа элемента', document.querySelector('.chart_section').getBoundingClientRect().bottom - document.documentElement.clientHeight);
//     console.log('false когда скролл в конце страницы, желательно делать -1px, для лучшей кроссбраузерности', window.pageYOffset + document.documentElement.clientHeight < document.documentElement.scrollHeight - 1); //  

// }
// addEventListener('resize', () => {
//     console.clear();
//     whatHeight();
//     if ((document.querySelector('.chart_section').getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) {
//         console.log('hi')
//     }
// })
// addEventListener('scroll', () => {
//     console.clear();
//     whatHeight();
//     if ((document.querySelector('.chart_section').getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) {
//         console.log('hi')
//     }
// })
let customersLoad = false,
    planSectionLoad = true,
    aboutUsLoad = true,
    statsLoad = true,
    blogLoad = true,
    quotesLoad = true,
    faqLoad = true,
    getStarterLoad = true,
    newsletterLoad = true,
    footerLoad = true,
    disableScrollListener = false;

document.addEventListener('scroll', function scrollListener(e) {
    loadContent()
    console.log(1);
    if (disableScrollListener) {
        this.removeEventListener(e.type, scrollListener);
        
    }
})

console.log(document.querySelector('.chart_section').getBoundingClientRect().bottom - document.documentElement.clientHeight);
function loadContent() {
        
    customersRender();

    planSectionRender();

    aboutUsRender();

    statsRender();

    blogRender();

    quotesRender();

    faqRender();

    getStarterRender();

    newsletterRender();

    footerRender()
}
//     p.then((r) => {
//         setTimeout(() => {
//             console.log(r);
//         if ((!planSectionLoad) && (document.querySelector('.customers_section').getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) {
//             let html = `
//                         <div class="plan_container">
//                         <div class="plan_text_container">
//                             <p class="sub_h_text">
//                                 DESKTOP AND MOBILE APP
//                             </p>
//                             <h2 class="plan_h2">
//                                 Plan <span> and </span> manage
//                             </h2>
//                             <p class="main_text">
//                                 Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.
//                             </p>
//                             <div class="bot_buttons">
//                                 <a class="plan_video_button button">
//                                     <span>View video</span>
//                                     <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z" fill="white"/>
//                                     </svg>
//                                 </a>
//                                 <a class="plan_features_button button">
//                                     <span>See features</span>
//                                 </a>
//                             </div>
//                         </div>
//                         <div class="plan_illustrations_container">
//                             <div class="plan_illustration_container_mobile1">
//                                 <picture>
//                                     <source srcset="img/Phone_app_1x.jpg 1x, 
//                                     img/Phone_app_2x.jpg 2x, 
//                                     img/Phone_app_3x.jpg 3x, ">
//                                     <img src="img/Phone_app_1x.jpg" alt="">
//                                 </picture>
//                             </div>
//                             <div class="plan_illustration_container_mobile2">
//                                 <picture>
//                                     <source srcset="img/large_phone_app_1x.png 1x, 
//                                     img/large_phone_app_2x.png 2x, 
//                                     img/large_phone_app_3x.png 3x, ">
//                                     <img src="img/large_phone_app_1x.png" alt="">
//                                 </picture>
//                             </div>
//                             <div class="plan_illustration_container_desktop">
//                                 <picture>
//                                     <source srcset="img/desctop_app_1x.jpg 1x, 
//                                     img/desctop_app_2x.jpg 2x, 
//                                     img/desctop_app_3x.jpg 3x, ">
//                                     <img src="img/desctop_app_1x.jpg" alt="">
//                                     <span></span>
//                                 </picture>
//                             </div>
//                         </div>
//                     </div>
                
//             `;
//             document.querySelector('.plan_section').innerHTML = html;
//             document.querySelector('.plan_section').insertAdjacentHTML("afterend", 
//             `
//             <section class="about-us_section">
//                 <img src="spinner.svg" alt="">
//             </section>
//             `)
//             planSectionLoad = true;
//             return 555;
//         }
//         }, 2000);
        
//     })
//     .then((r) => {
//         setTimeout(() => {
//             console.log(r);
//         if ((!planSectionLoad) && (document.querySelector('.customers_section').getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) {
//             let html = `
//                         <div class="plan_container">
//                         <div class="plan_text_container">
//                             <p class="sub_h_text">
//                                 DESKTOP AND MOBILE APP
//                             </p>
//                             <h2 class="plan_h2">
//                                 Plan <span> and </span> manage
//                             </h2>
//                             <p class="main_text">
//                                 Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.
//                             </p>
//                             <div class="bot_buttons">
//                                 <a class="plan_video_button button">
//                                     <span>View video</span>
//                                     <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z" fill="white"/>
//                                     </svg>
//                                 </a>
//                                 <a class="plan_features_button button">
//                                     <span>See features</span>
//                                 </a>
//                             </div>
//                         </div>
//                         <div class="plan_illustrations_container">
//                             <div class="plan_illustration_container_mobile1">
//                                 <picture>
//                                     <source srcset="img/Phone_app_1x.jpg 1x, 
//                                     img/Phone_app_2x.jpg 2x, 
//                                     img/Phone_app_3x.jpg 3x, ">
//                                     <img src="img/Phone_app_1x.jpg" alt="">
//                                 </picture>
//                             </div>
//                             <div class="plan_illustration_container_mobile2">
//                                 <picture>
//                                     <source srcset="img/large_phone_app_1x.png 1x, 
//                                     img/large_phone_app_2x.png 2x, 
//                                     img/large_phone_app_3x.png 3x, ">
//                                     <img src="img/large_phone_app_1x.png" alt="">
//                                 </picture>
//                             </div>
//                             <div class="plan_illustration_container_desktop">
//                                 <picture>
//                                     <source srcset="img/desctop_app_1x.jpg 1x, 
//                                     img/desctop_app_2x.jpg 2x, 
//                                     img/desctop_app_3x.jpg 3x, ">
//                                     <img src="img/desctop_app_1x.jpg" alt="">
//                                     <span></span>
//                                 </picture>
//                             </div>
//                         </div>
//                     </div>
                
//             `;
//             document.querySelector('.plan_section').innerHTML = html;
//             document.querySelector('.plan_section').insertAdjacentHTML("afterend", 
//             `
//             <section class="about-us_section">
//                 <img src="spinner.svg" alt="">
//             </section>
//             `)
//             planSectionLoad1 = true;
//             r(555)
//         }
//         }, 2000);
        
//     })
// }



loadContent()


// function whatHeight() {
//     console.log('отступ от верха документа до верха window ', window.pageYOffset); 
//     console.log('высота окна window', document.documentElement.clientHeight); 
//     console.log('макс высота документа ', document.documentElement.scrollHeight);
//     console.log('отступ от верха window относительно элемента верха элемента', document.querySelector('.customers_section').getBoundingClientRect().top);
//     console.log('расстояние до верха элемента относительно начала document ', document.querySelector('.customers_section').getBoundingClientRect().top + window.pageYOffset);
//     console.log('орицательное значение когда низ window достиг верха элемента', document.querySelector('.customers_section').getBoundingClientRect().bottom - document.documentElement.clientHeight);
//     console.log('false когда скролл в конце страницы, желательно делать -1px, для лучшей кроссбраузерности', window.pageYOffset + document.documentElement.clientHeight < document.documentElement.scrollHeight - 1); //  

// }
// addEventListener('resize', () => {
//     console.clear();
//     whatHeight();
// })
// addEventListener('scroll', () => {
//     console.clear();
//     whatHeight();
    
// })








document.querySelectorAll('.header_burger').forEach(item => {item.addEventListener('click', function(){
    document.querySelectorAll('.header_burger').forEach(item => {item.classList.toggle('active')});
    document.querySelector('.header_menu').classList.toggle('active');
    document.querySelectorAll('body').forEach(item => {item.classList.toggle('lock')});



    // document.querySelectorAll('.header_burger').forEach(item => {item.classList.toggle('active')});
    // document.querySelectorAll('.header_menu').forEach(item => {item.classList.toggle('active')});
    // document.querySelectorAll('body').forEach(item => {item.classList.toggle('lock')});
    // document.querySelector('.header_menu').classList.toggle('active')
    // document.querySelector('body').classList.toggle('lock')
})});


