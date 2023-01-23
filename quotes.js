function quotesRender() {
    if ((!quotesLoad) && (((document.querySelector('main')?.getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) || ((document.querySelector('main')?.getBoundingClientRect().bottom + window.pageYOffset)< (document.documentElement.clientHeight)))) {
        console.log("start");
        quotesLoad = true;
        setTimeout(() => {
            let html = `
            <section class="quotes_section">
            <div class="quotes_container">
        <div class="quotes_title-text">
            <p class="sub_h_text">
                TESTIMONIALS
            </p>
            <h3 class="h3_text quotes_h3">
                Customers's quotes
            </h3>
            <p class="quotes_desc">
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.
            </p>
        </div>

        <div id="testimonials_swiper" class="testimonials_container_swiper swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonials_slider_card">
                        <div class="testimonials_slider_card_text">
                            <span>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </span>
                        </div>
                        <div class="testimonials_picture"></div>
                    </div>
                </div>
            </div>
            <div class="testimonials_swiper-pagination">
                <div class="swiper-pagination"></div>
            </div>
        </div>

    </div>
    </section>
            `;
            document.querySelector('main').insertAdjacentHTML('beforeend', html)
            faqLoad = false;
            loadContent()
        }, 200);
    }
}