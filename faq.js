function faqRender() {
    if ((!faqLoad) && (((document.querySelector('main')?.getBoundingClientRect().bottom - document.documentElement.clientHeight) < 0) || ((document.querySelector('main')?.getBoundingClientRect().bottom + window.pageYOffset)< (document.documentElement.clientHeight)))) {
        console.log("start");
        faqLoad = true;
        setTimeout(() => {
            let html = `
            <section class="faq_section">
    <p class="sub_h_text faq_section_sub_h_text">
        Customer help
    </p>
    <h3 class="h3_text faq_h3">
        Frequently asked questions
    </h3>
    <div class="faq_list-group">
        <div class="faq_list-container" data-name="spoiler-container">
            <div class="faq_list-group-item faq_list-header" data-name="spoiler-title">
                <div class="faq_list-header-icon"></div>
                <span>Reque insolens in vel?</span>
            </div>
            <div class="faq_list-group-item faq_list-content" data-name="spoiler-content">
                <div>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</div>
                <a href="" class="button faq_list_button"><span>Go to documentation</span></a>
            </div>
        </div>
        
        
        <div class="faq_list-container" data-name="spoiler-container">
            <div class="faq_list-group-item faq_list-header" data-name="spoiler-title">
                <div class="faq_list-header-icon"></div>
                <span>Vis rebum error graecis ea, id sit postea accusamus?</span>
            </div>
            <div class="faq_list-group-item faq_list-content" data-name="spoiler-content">
                <div>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</div>
                <a href="" class="button faq_list_button"><span>Go to documentation</span></a>
            </div>
        </div>
        
        
        <div class="faq_list-container" data-name="spoiler-container">
            <div class="faq_list-group-item faq_list-header" data-name="spoiler-title">
                <div class="faq_list-header-icon"></div>
                <span>Lorem repudiandae ne nec?</span>
            </div>
            <div class="faq_list-group-item faq_list-content" data-name="spoiler-content">
                <div>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</div>
                <a href="" class="button faq_list_button"><span>Go to documentation</span></a>
            </div>
        </div>
        
        
        <div class="faq_list-container" data-name="spoiler-container">
            <div class="faq_list-group-item faq_list-header" data-name="spoiler-title">
                <div class="faq_list-header-icon"></div>
                <span>Ad dicit numquam vel. Et eos iudico feugait percipitur?</span>
            </div>
            <div class="faq_list-group-item faq_list-content" data-name="spoiler-content">
                <div>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</div>
                <a href="" class="button faq_list_button"><span>Go to documentation</span></a>
            </div>
        </div>
        
        
        <div class="faq_list-container" data-name="spoiler-container">
            <div class="faq_list-group-item faq_list-header" data-name="spoiler-title">
                <div class="faq_list-header-icon"></div>
                <span>Sea no dico percipitur. Fierent constituam definitiones id eum?</span>
            </div>
            <div class="faq_list-group-item faq_list-content" data-name="spoiler-content">
                <div>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</div>
                <a href="" class="button faq_list_button"><span>Go to documentation</span></a>
            </div>               
        </div>
        
    </div>
</section>
            `;
            document.querySelector('main').insertAdjacentHTML('beforeend', html)
            getStarterLoad = false;
            loadContent()
        }, 200);
    }
}