import $ from 'jquery'
import intlTelInput from "intl-tel-input";
import telUtils from "../../../node_modules/intl-tel-input/build/js/utils";

$(document).ready(function () {
    initNavMenuHeader();
    initPhoneField();
    ancorLinksAction();
    initCallbackPopup();
    initLogosBubles();
    initSupportCallbackSticky();
    initCommunityGallerySwitching();
});

function initCommunityGallerySwitching() {
    if ($('.js-about-community-gallery').length) {
        let $photos = $('.js-about-community-gallery').find('.about-community__photos-item');
        let timerId = startSwitchingPhotos($photos);

        $photos.hover(function () {
            clearInterval(timerId);
            $photos.removeClass('active');
        }, function () {
            timerId = startSwitchingPhotos($photos);
        })
    }
}

function startSwitchingPhotos($photos, timeInterval = 3000) {
    return setInterval(() => {
        $photos.removeClass('active');
        $(getRandomElementOfArray($photos)).addClass('active');
    }, timeInterval);
}

function initNavMenuHeader() {
    $('.js-header-hamb').click(function () {
        $(this).addClass('open');
        $('.js-mob-menu-box').addClass('open');
        $('body').addClass('overlay not-header');
    });

    $('.js-header-mob-menu-close').click(function () {
        $('.js-header-hamb').removeClass('open');
        $('.js-mob-menu-box').removeClass('open');
        $('body').removeClass('overlay not-header');
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
        let id = $this.attr('href');
        let top = $(id).offset().top;

        if ($this.closest('.js-support-questions-nav').length) {
            $this.closest('.js-support-questions-nav').find('.js-ancor-link').removeClass('active');

            if (!$this.hasClass('support-questions__nav-head')) {
                $this.siblings('.support-questions__nav-head').addClass('active');
            }

            $this.addClass('active');
        }

        $('body,html').animate({
            scrollTop: top - 100
        }, 500);
    });
}

function initSupportCallbackSticky() {
    if (window.matchMedia("(min-width: 768px)").matches && $('.js-support-question-callback').length) {
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
}

function getRandomElementOfArray(photos) {
    return photos[Math.floor(Math.random() * photos.length)];
}

function initCallbackPopup() {
    let $callbackPopup = $('.js-callback-popup');
    let $body = $('body');
    let currentScrollTop;

    $('.js-callback-popup-open').click(function (e) {
        e.preventDefault();

        currentScrollTop = $(window).scrollTop();
        $body.addClass('overlay');
        $callbackPopup.addClass('open');
    });

    $('.js-callback-popup-close').click(function () {
        $body.removeClass('overlay');
        $('html, body').animate({
            scrollTop: currentScrollTop,
        }, 0);
        $callbackPopup.removeClass('open');
    });
}

function initLogosBubles() {
    if ($('.js-events-bubbles').length) {
        const SCROLL_SPEED = 0.3;
        const NOISE_SPEED = 0.004;
        const NOISE_AMOUNT = 5;
        const CANVAS_WIDTH = 2800;

        const bubblesEl = document.querySelector('.js-events-bubbles');
        let bubbleSpecs = [
            {s: .6, x: 1134, y: 45},
            {s: .6, x: 1620, y: 271},
            {s: .6, x: 1761, y: 372},
            {s: .6, x: 2499, y: 79},
            {s: .6, x: 2704, y: 334},
            {s: .6, x: 2271, y: 356},
            {s: .6, x: 795, y: 226},
            {s: .6, x: 276, y: 256},
            {s: .6, x: 1210, y: 365},
            {s: .6, x: 444, y: 193},
            {s: .6, x: 2545, y: 387},
            {s: .8, x: 1303, y: 193},
            {s: .8, x: 907, y: 88},
            {s: .8, x: 633, y: 320},
            {s: .8, x: 323, y: 60},
            {s: .8, x: 129, y: 357},
            {s: .8, x: 1440, y: 342},
            {s: .8, x: 1929, y: 293},
            {s: .8, x: 2135, y: 198},
            {s: .8, x: 2276, y: 82},
            {s: .8, x: 2654, y: 182},
            {s: .8, x: 2783, y: 60},
            {x: 1519, y: 118},
            {x: 1071, y: 233},
            {x: 1773, y: 148},
            {x: 2098, y: 385},
            {x: 2423, y: 244},
            {x: 901, y: 385},
            {x: 624, y: 111},
            {x: 75, y: 103},
            {x: 413, y: 367},
            {x: 2895, y: 271},
            {x: 1990, y: 75}
        ];

        if (window.matchMedia("(max-width: 768px)").matches) {
            bubbleSpecs = [
                {s: .8, x: 1134, y: 5},
                {s: .5, x: 1620, y: 31},
                {s: .7, x: 1761, y: 172},
                {s: .5, x: 2499, y: 79},
                {s: .5, x: 2704, y: 244},
                {s: .5, x: 2271, y: 126},
                {s: .5, x: 795, y: 216},
                {s: .5, x: 276, y: 236},
                {s: .5, x: 1210, y: 145},
                {s: .6, x: 444, y: 193},
                {s: .5, x: 2545, y: 127},
                {s: .5, x: 1303, y: 150},
                {s: .7, x: 907, y: 88},
                {s: .5, x: 633, y: 210},
                {s: .8, x: 323, y: 60},
                {s: .5, x: 129, y: 127},
                {s: .5, x: 1440, y: 52},
                {s: .5, x: 1929, y: 130},
                {s: .5, x: 2035, y: 108},
                {s: .6, x: 2276, y: 82},
                {s: .5, x: 2454, y: 122},
                {s: .5, x: 2783, y: 60},
                {s: .5, x: 1519, y: 108},
                {s: .4, x: 1071, y: 203},
                {s: .5, x: 1773, y: 108},
                {s: .5, x: 2098, y: 185},
                {s: .5, x: 2423, y: 144},
                {s: .3, x: 901, y: 205},
                {s: .5, x: 624, y: 31},
                {s: .5, x: 5, y: 203},
                {s: .5, x: 13, y: 17},
                {s: .8, x: 2895, y: 121},
                {s: .5, x: 1990, y: 75}
            ];
        }

        class Bubbles {
            constructor(specs) {
                this.bubbles = [];

                specs.forEach((spec, index) => {
                    this.bubbles.push(new Bubble(index, spec));
                });

                requestAnimationFrame(this.update.bind(this));
            }

            update() {
                this.bubbles.forEach(bubble => bubble.update());
                this.raf = requestAnimationFrame(this.update.bind(this))
            }
        }

        class Bubble {
            constructor(index, {x, y, s = 1}) {
                this.index = index;
                this.x = x;
                this.y = y;
                this.scale = s;

                this.noiseSeedX = Math.floor(Math.random() * 64000);
                this.noiseSeedY = Math.floor(Math.random() * 64000);

                this.el = document.createElement("div");
                this.el.className = `about-events__bubbles-item logo${this.index + 1}`;
                bubblesEl.appendChild(this.el);
            }

            update() {
                this.noiseSeedX += NOISE_SPEED;
                this.noiseSeedY += NOISE_SPEED;
                let randomX = noise.simplex2(this.noiseSeedX, 0);
                let randomY = noise.simplex2(this.noiseSeedY, 0);

                this.x -= SCROLL_SPEED;
                this.xWithNoise = this.x + (randomX * NOISE_AMOUNT);
                this.yWithNoise = this.y + (randomY * NOISE_AMOUNT);

                if (this.x < -200) {
                    this.x = CANVAS_WIDTH;
                }

                this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px) scale(${this.scale})`;
            }
        }

// For perlin noise
        noise.seed(Math.floor(Math.random() * 64000));

        const bubbles = new Bubbles(bubbleSpecs);
    }
}