$(function () {

    var cardHero = $(".hero");
    var cardContent = $(".content");
    var cardHeroLogo = $(".hero__logo");
    var cardContentTitle = $(".content__title");
    var cardContentSubTitle = $(".content__subtitle");
    var cardOverlay = $('.overlay');
    var cardOverlayA = $('.overlay-info.overlay__option-a');
    var cardOverlayB = $('.overlay-info.overlay__option-b');

    var sectionStart = $(".interaction-start");
    var sectionOptions = $(".interaction-options");
    var sectionRegForm = $(".interaction-registration-form");

    var btnStart = $(".btn-start");
    var btnContinue = $(".btn-continue");
    var btnSubmit = $(".btn-submit");

    var iconHeart = $(".icon-heart");
    var optionBtn = $('.options-group__btn');
    var optionA = $('.btn-option-a');
    var optionB = $('.btn-option-b');

    function toggleClass(element, prevClass, nextClass) {
        element.toggleClass(prevClass);
        element.toggleClass(nextClass);
    }

    // START
    btnStart.on("click", function (e) {
        e.preventDefault();

        cardHero.slideUp("slow", function () {
            toggleClass(cardHero, 'hero_bg_start', 'hero_bg_options');
            toggleClass(iconHeart, 'hero_color_start', 'hero_color_options');
            toggleClass(cardContentTitle, 'hero_color_start', 'hero_color_options');

            cardContent.removeClass('content_bg_start');
            cardContent.css('border-color', '#fcc150');
            cardContentSubTitle.addClass('hidden');

            sectionOptions.show("400");
            cardHero.slideDown("400");
        });

        sectionStart.hide("slow");
        cardOverlay.toggleClass('overlay_bg_options');
    });

    // CONTINUE
    btnContinue.on("click", function (e) {
        e.preventDefault();

        cardHero.slideUp("slow", function () {
            toggleClass(cardHero, 'hero_bg_options', 'hero_bg_form');
            toggleClass(iconHeart, 'hero_color_options', 'hero_color_form');
            toggleClass(cardContentTitle, 'hero_color_options', 'hero_color_form');

            cardContentTitle.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
            cardContent.css('border-color', '#1da7c0');
            cardOverlay.removeClass('d-flex');
            cardOverlay.hide("150");

            sectionRegForm.show("400");
            cardHero.slideDown("400");
        });

        optionBtn.off();
        sectionOptions.hide("slow");
        cardHeroLogo.css("height", "145px");
    });

    // SUBMIT
    btnSubmit.on("click", function (e) {
        e.preventDefault();

        cardHero.slideUp("slow", function () {
            toggleClass(cardHero, 'hero_bg_form', 'hero_bg_success');
            toggleClass(iconHeart, 'hero_color_form', 'hero_color_success');
            toggleClass(cardContentTitle, 'hero_color__form', 'hero_color_success');

            cardContent.css('border-color', 'rgba(35, 140, 35, 1)');
            cardContentTitle.text("Successfully!");
            cardHero.slideDown("400");
        });

        sectionRegForm.hide("slow");
    });

    // OPTIONS
    optionBtn.on("click", function (e) {
        cardOverlay.hasClass('hidden') && cardOverlay.fadeIn("300").addClass('d-flex');
        btnContinue.hasClass('hidden') && btnContinue.removeClass('hidden');
    });

    // OPTION-A
    optionA.on("click", function (e) {
        cardOverlayB.hide("150");
        cardOverlayA.show("300");
    });

    // OPTION-B
    optionB.on("click", function (e) {
        cardOverlayA.hide("150");
        cardOverlayB.show("300");
    });
});
