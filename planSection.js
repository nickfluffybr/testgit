function planSectionRender() {
    if ((!planSectionLoad) && (((document.querySelector('main')?.getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) || ((document.querySelector('main')?.getBoundingClientRect().bottom + window.pageYOffset)< (document.documentElement.clientHeight)))) {
        console.log("start");
        planSectionLoad = true;
        setTimeout(() => {
            let html = `
            <section class="plan_section">
                <div class="plan_container">
                <div class="plan_text_container">
                    <p class="sub_h_text">
                        DESKTOP AND MOBILE APP
                    </p>
                    <h2 class="plan_h2">
                        Plan <span> and </span> manage
                    </h2>
                    <p class="main_text">
                        Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.
                    </p>
                    <div class="bot_buttons">
                        <a class="plan_video_button button">
                            <span>View video</span>
                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z" fill="white"/>
                            </svg>
                        </a>
                        <a class="plan_features_button button">
                            <span>See features</span>
                        </a>
                    </div>
                </div>
                <div class="plan_illustrations_container">
                    <div class="plan_illustration_container_mobile1">
                        <picture>
                            <source srcset="img/Phone_app_1x.jpg 1x, 
                            img/Phone_app_2x.jpg 2x, 
                            img/Phone_app_3x.jpg 3x, ">
                            <img src="img/Phone_app_1x.jpg" alt="">
                        </picture>
                    </div>
                    <div class="plan_illustration_container_mobile2">
                        <picture>
                            <source srcset="img/large_phone_app_1x.png 1x, 
                            img/large_phone_app_2x.png 2x, 
                            img/large_phone_app_3x.png 3x, ">
                            <img src="img/large_phone_app_1x.png" alt="">
                        </picture>
                    </div>
                    <div class="plan_illustration_container_desktop">
                        <picture>
                            <source srcset="img/desctop_app_1x.jpg 1x, 
                            img/desctop_app_2x.jpg 2x, 
                            img/desctop_app_3x.jpg 3x, ">
                            <img src="img/desctop_app_1x.jpg" alt="">
                            <span></span>
                        </picture>
                    </div>
                </div>
            </div>
            </section>
            `;
            document.querySelector('main').insertAdjacentHTML('beforeend', html);
            aboutUsLoad = false;
            loadContent();
        }, 200);
    }
}