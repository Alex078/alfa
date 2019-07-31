import $ from 'jquery'
import intlTelInput from "intl-tel-input";
import telUtils from "../../../node_modules/intl-tel-input/build/js/utils";

$(document).ready(function () {
    initNavMenuHeader();
    initPhoneField();
    ancorLinksAction();

    if (window.matchMedia("(min-width: 768px)").matches) {
        initSupportCallbackSticky();
    }
});

function initNavMenuHeader() {
    $('.js-header-hamb').click(function () {
        $(this).toggleClass('open');
        $('.js-mob-menu-box').toggleClass('open');
        $('body').toggleClass('overlay');
    });

    $('.js-header-mob-menu-close').click(function () {
        $('.js-header-hamb').toggleClass('open');
        $('.js-mob-menu-box').toggleClass('open');
        $('body').toggleClass('overlay');
    });
}

function initPhoneField() {

    let input = document.querySelector('#phone');

    if (input) {
        let iti = intlTelInput(input, {
            preferredCountries: ['ua', 'ru', 'by', 'kz'],
            separateDialCode: true,
            initialCountry: 'ua',
            utlisScript: telUtils
        });
    }
    // var $input = $(this);
    // window.intlTelInput($input);
    // $input.intlTelInput({
    //     preferredCountries: ['ua', 'ru', 'by', 'kz'],
    //     separateDialCode: true,
    //     initialCountry: 'us',
    //     utilsScript: '../../../node_modules/in',
    //     customPlaceholder: function (selectedCountryPlaceholder) {
    //         return selectedCountryPlaceholder.replace(/[0-9]/g, "0");
    //     }
    // });
}

function ancorLinksAction() {
    $(document).on('click', '.js-ancor-link', function (e) {
        e.preventDefault();

        let $this = $(this);
        let id  = $this.attr('href');
        let top = $(id).offset().top;

        $this.closest('.js-support-questions-nav').find('.js-ancor-link').removeClass('active');

        if (!$this.hasClass('support-questions__nav-head')) {
            $this.siblings('.support-questions__nav-head').addClass('active');
        }

        $this.addClass('active');

        $('body,html').animate({
            scrollTop: top - 100
        }, 500);
    });
}

function initSupportCallbackSticky() {
    let top = $('.js-support-question-callback').offset().top;

    $(document).scroll(function () {
       if ($(window).scrollTop() > top + 70) {
           $('.js-support-question-callback').addClass('fixed');
           $('.js-support-questions-nav').addClass('top-padding');
       } else {
           $('.js-support-question-callback').removeClass('fixed');
           $('.js-support-questions-nav').removeClass('top-padding');
       }
    });
}