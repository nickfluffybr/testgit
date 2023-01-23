function blogRender() {
    if ((!blogLoad) && (((document.querySelector('main')?.getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) || ((document.querySelector('main')?.getBoundingClientRect().bottom + window.pageYOffset)< (document.documentElement.clientHeight)))) {
        console.log("start");
        blogLoad = true;
        setTimeout(() => {
            let html = `
            <section class="blog_section">
            <div class="blog_container">
        <p class="sub_h_text blog_sub_h_text">
            OUR RESOURCES
        </p>
        <h3 class="h3_text blog_h3">
            Start reading our blog
        </h3>


        <div class="blog_swiper swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="blog_card">
                        <div class="blog_card_picture_container">
                            <div class="blog_card_picture_first">
                                <div class="blog_card_picture_search">
                                    <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="32.6598" cy="32.5001" rx="32.5118" ry="32.473" fill="white"/>
                                        <path d="M37.1138 31.0143C37.1138 34.29 34.4548 36.9475 31.1722 36.9475C27.8897 36.9475 25.2307 34.29 25.2307 31.0143C25.2307 27.7386 27.8897 25.0811 31.1722 25.0811C34.4548 25.0811 37.1138 27.7386 37.1138 31.0143Z" stroke="#A7AAC6" stroke-width="2"/>
                                        <path d="M36.1304 35.9666L41.0886 40.9189" stroke="#A7AAC6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="blog_card_picture_flexContainer">
                            <div class="blog_card_picture">
                            </div>
                            <div class="blog_card_picture">
                            </div>
                            </div>
                        </div>
                        <div class="blog_card_desc">
                            <h4 class="blog_card_h4">How to start planning</h4>
                            <p class="blog_card_text">
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...
                            </p>
                            <div class="blog_card_buttons">
                                <a class="button blog_card_button">
                                    <span>Read now</span>
                                </a>
                                <a href="" class="button-bookmarks">Add to your bookmarks</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="blog_card">
                        <div class="blog_card_picture_container">
                            <div class="blog_card_picture_first">
                                <div class="blog_card_picture_search">
                                    <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="32.6598" cy="32.5001" rx="32.5118" ry="32.473" fill="white"/>
                                        <path d="M37.1138 31.0143C37.1138 34.29 34.4548 36.9475 31.1722 36.9475C27.8897 36.9475 25.2307 34.29 25.2307 31.0143C25.2307 27.7386 27.8897 25.0811 31.1722 25.0811C34.4548 25.0811 37.1138 27.7386 37.1138 31.0143Z" stroke="#A7AAC6" stroke-width="2"/>
                                        <path d="M36.1304 35.9666L41.0886 40.9189" stroke="#A7AAC6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="blog_card_picture_flexContainer">
                            <div class="blog_card_picture">
                            </div>
                            <div class="blog_card_picture">
                            </div>
                            </div>
                        </div>
                        <div class="blog_card_desc">
                            <h4 class="blog_card_h4">How to start planning</h4>
                            <p class="blog_card_text">
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...
                            </p>
                            <div class="blog_card_buttons">
                                <a class="button blog_card_button">
                                    <span>Read now</span>
                                </a>
                                <a href="" class="button-bookmarks">Add to your bookmarks</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="blog_card">
                        <div class="blog_card_picture_container">
                            <div class="blog_card_picture_first">
                                <div class="blog_card_picture_search">
                                    <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="32.6598" cy="32.5001" rx="32.5118" ry="32.473" fill="white"/>
                                        <path d="M37.1138 31.0143C37.1138 34.29 34.4548 36.9475 31.1722 36.9475C27.8897 36.9475 25.2307 34.29 25.2307 31.0143C25.2307 27.7386 27.8897 25.0811 31.1722 25.0811C34.4548 25.0811 37.1138 27.7386 37.1138 31.0143Z" stroke="#A7AAC6" stroke-width="2"/>
                                        <path d="M36.1304 35.9666L41.0886 40.9189" stroke="#A7AAC6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="blog_card_picture_flexContainer">
                            <div class="blog_card_picture">
                            </div>
                            <div class="blog_card_picture">
                            </div>
                            </div>
                        </div>
                        <div class="blog_card_desc">
                            <h4 class="blog_card_h4">How to start planning</h4>
                            <p class="blog_card_text">
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...
                            </p>
                            <div class="blog_card_buttons">
                                <a class="button blog_card_button">
                                    <span>Read now</span>
                                </a>
                                <a href="" class="button-bookmarks">Add to your bookmarks</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev">
                <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 9.5L2 9.5M2 9.5L9.81132 17M2 9.5L9.81132 2" stroke="#A8B4E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="swiper-button-next">
                <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9.5H25M25 9.5L17.1887 2M25 9.5L17.1887 17" stroke="#A8B4E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
    </section>
            `;
            document.querySelector('main').insertAdjacentHTML('beforeend', html)
            quotesLoad = false;
            loadContent()
        }, 200);
    }
}