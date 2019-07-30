import $ from 'jquery'
import intlTelInput from "intl-tel-input";
import telUtils from "../../../node_modules/intl-tel-input/build/js/utils";

$(document).ready(function () {
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

    initPhoneField();
});

function initPhoneField() {

    var input = document.querySelector('#phone');
    var iti = intlTelInput(input, {
        preferredCountries: ['ua', 'ru', 'by', 'kz'],
        separateDialCode: true,
        initialCountry: 'ua',
        utlisScript: telUtils
    });

    iti.promise.then(function () {
        console.log("Initialised!")
    })
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