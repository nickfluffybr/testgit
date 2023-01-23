function getStarterRender() {
    if ((!getStarterLoad) && (((document.querySelector('main')?.getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) || ((document.querySelector('main')?.getBoundingClientRect().bottom + window.pageYOffset)< (document.documentElement.clientHeight)))) {
        console.log("start");
        getStarterLoad = true;
        setTimeout(() => {
            let html = `
            <section class="get-started_section">
            <div class="get-started_container">
                <p class="sub_h_text started_sub_h_text">
                    PLAN YOUR LIFE
                </p>
                <h3 class="h3_text get-started_h3">
                    Get <span>started</span>  now
                </h3>
                <p class="get-started_main-text">
                    Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
                </p>
            </div>
            <div class="get-started_buttons_container">
                <a class="button get-started_button-left">
                    <span>View pricing</span>
                </a>
                <a class="button get-started_button-right">
                    <span>Read documentation</span>
                </a>
            </div>
            
        </section>
            `;
            document.querySelector('main').insertAdjacentHTML('beforeend', html)
            newsletterLoad = false;
            loadContent()
        }, 200);
    }
}