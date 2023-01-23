function newsletterRender() {
    if ((!newsletterLoad) && (((document.querySelector('main')?.getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) || ((document.querySelector('main')?.getBoundingClientRect().bottom + window.pageYOffset)< (document.documentElement.clientHeight)))) {
        console.log("start");
        newsletterLoad = true;
        setTimeout(() => {
            let html = `
            <section class="newsletter_section">
            <form action="" class="newsletter_form">
                <div class="newsletter_form_text-block">
                    <h3 class="h3_text newsletter_h3">
                        Sign up for newsletter
                    </h3>
                    <p class="newsletter_form_text">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.</p>
                </div>
                <input class="form_email" type="email" placeholder="Email address">
                <button class="button form_button">Save me</button>
            </form>
        </section>
            `;
            document.querySelector('main').insertAdjacentHTML('beforeend', html)
            footerLoad = false;
            loadContent()
        }, 200);
    }
}