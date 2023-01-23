function aboutUsRender() {
    if ((!aboutUsLoad) && (((document.querySelector('main')?.getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) || ((document.querySelector('main')?.getBoundingClientRect().bottom + window.pageYOffset)< (document.documentElement.clientHeight)))) {
        console.log("start");
        aboutUsLoad = true;
        setTimeout(() => {
            let html = `
            <section class="about-us_section">
            <div class="about-us_section_container container">
            <p class="sub_h_text">
                ABOUT US
            </p>
            <h3 class="h3_text about-us_h3">
                Read about our app
            </h3>
            <div class="about-us_features-card">
                <ul class="about-us_features-card_list">
                    <li class="about-us_features-card_list_item">
                        <div class="features-card_picture">
                            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7.87273V19H6.42105L9 17L11.5789 19H16V7.87273L9 2L2 7.87273Z" stroke="#4074F8" stroke-width="2.5"/>
                            </svg>
                        </div>
                        <h4 class="features-card_h4">
                            Overview
                        </h4>
                        <p class="features-card_desc">
                            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                        </p>
                    </li>
                    <li class="about-us_features-card_list_item">
                        <div class="features-card_picture features-card_picture_margin">
                            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.7544 16H12.0877H9.19945H2V5.94956V2H12.0877L13.7018 5.16129H19.7544V6.96774M19.7544 16L25 6.96774H19.7544M19.7544 16V6.96774" stroke="#4074F8" stroke-width="2.5"/>
                            </svg>
                        </div>
                        <h4 class="features-card_h4">
                            Files
                        </h4>
                        <p class="features-card_desc">
                            No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.
                        </p>
                    </li>
                    <li class="about-us_features-card_list_item">
                        <div class="features-card_picture">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2V6.94956V13.5H4.28115L5.5 17L9 13.5H13.7018H19.7544V7.96774V2H17H12.5H2Z" stroke="#4074F8" stroke-width="2.5"/>
                            </svg>
                        </div>
                        <h4 class="features-card_h4">
                            Meeting chats
                        </h4>
                        <p class="features-card_desc">
                            Vim ne tacimates neglegentur. Erat diceret omittam at est.
                        </p>
                    </li>
                    <li class="about-us_features-card_list_item">
                        <div class="features-card_picture">
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11.9677V17.5H4.28115H9H13.7018H19.2544V11.9677M6.75439 5L10.7544 2M14.7544 5L10.7544 2M10.7544 2V12.5" stroke="#4074F8" stroke-width="2.5"/>
                            </svg>
                        </div>
                        <h4 class="features-card_h4">
                            Save events
                        </h4>
                        <p class="features-card_desc">
                            Nisl idque mel ea, nominati voluptatum.
                        </p>
                    </li>
                </ul>
            </div>
            <div class="about-us_buttons">
                <a class="about-us_left-button button">
                    <span>Read more</span>
                </a>
                <div class="about-us_buttons_or">
                    <span>or</span>
                </div>
                <a class="about-us_right-button button">
                    <span>Get started</span>
                </a>
            </div>
        </div>
        </section>
            `;
            document.querySelector('main').insertAdjacentHTML('beforeend', html)
            statsLoad = false;
            loadContent()
        }, 200);
    }
}