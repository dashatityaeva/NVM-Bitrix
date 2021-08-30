$(document).ready(function () {

    //===========бургер меню===========
    $('.header__burger').click(function () {
        $('.header').toggleClass('menu-active');
        $('body').toggleClass('hidden');
    })


    //===========Слайдеры=============
    $('#estate-carousel').slick({
        dots: true,
    });
    $('#bonus-carousel').slick({
        dots: true,
        fade: true,
        speed: 500,
        cssEase: 'linear'
    });
    $('#location-carousel').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    $('#projects-carousel').slick({
        dots: true,
    });
    $('#constituents-carousel').slick({
        dots: true,
        slidesToShow: 4,
        responsive: [{
                breakpoint: 971,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 791,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    //=========Скролл наверх==========
    let btn = $('.footer__scroll-wrap');

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //========маска телефона=======
    if (!!$('input[type="tel"]').length) {
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    }


    //============валидация============
    if (!!$('#excursion-form')) {

        $('#excursion-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 10
                },

            },
            messages: {
                name: {
                    required: '',
                    minlength: ''
                },
                phone: {
                    required: '',
                    minlength: ''
                },
            },
            errorClass: 'invalid'
        });
    }

    //============Галерея проекта============ 
    $('.project-details__link').magnificPopup({

        type: 'image',
        gallery: {
            enabled: true,
        },
        removalDelay: 100,
        mainClass: 'mfp-with-zoom',

        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    })

    //==============попап "Записаться на экскурсию"======
    $('.popap-registration').magnificPopup();
    //==============попап "Спасибо"======================
    $('.popap-thanks').magnificPopup();
    //==============попап "Написать директору"===========
    $('.popap-ceo').magnificPopup();

    //===========попап блока "План"==============
    $('.plan__dot').each(function () {
        $(this).magnificPopup();

    })


    //================"Календарь"==============
    $(function () {
        $("#datepicker").datepicker({
            firstDay: 1,
            dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            minDate: new Date(),
        });
    });
    //получение выбранного значения в календаре
    $("#datepicker").change(function () {
        console.log($("#datepicker").val());
    })

});

//===========скролл блока "Проекты"========
let projects = document.querySelector('.projects');
let projectsTitle = document.querySelector('.projects__titl');

window.addEventListener('scroll', function () {
    if (projects) {
        let target = (projects.offsetHeight + projects.offsetTop) - 335;
        if (window.pageYOffset >= target) {
            projectsTitle.classList.add('projects__titl_stop');
        } else {
            projectsTitle.classList.remove('projects__titl_stop');
        }
    }
});


//=========Карта на стр.Контакты
let blockMap = document.querySelector('.contacts-map');
if (blockMap) {
    console.log(have);
}
// ymaps.ready(init);

function init() {


    // Создание карты.
    var contactsMap = new ymaps.Map("contacts-map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        //https://yandex.ru/map-constructor/location-tool/
        center: [55.76, 37.64], //из поля "Центр"
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12, //из поля "Масштаб"
        controls: ['geolocationControl', 'fullscreenControl', 'zoomControl', 'smallMapDefaultSet'],
    }, {
        // Зададим опции для элементов управления.
        geolocationControlFloat: 'right',
        zoomControlSize: 'small'
    });


    contactsMap.geoObjects.options.set({
        // Макет иконок всех объектов карты.
        iconLayout: 'default#image',
        iconImageHref: '../img/svgSprite/point.svg',
        iconImageSize: [56, 67],
        iconImageOffset: [-28, -67],
    });


    let placemark = new ymaps.Placemark(
        [55.78, 37.64], {
            hintContent: 'Это хинт2',
            balloonContent: 'Это балун2',
        }
    );

    contactsMap.geoObjects.add(placemark);

    contactsMap.behaviors.disable(['scrollZoom']); //отклучение поведения
}


//==================блок План============= (it`s can be deleted)
// let coordX = document.querySelector('.coordX');
// let coordY = document.querySelector('.coordY');
// let dot1 = document.querySelector('.dot1');


// function setСoordinates(coord) {
//     if (coord) {
//         coord.addEventListener('change', function () {
//             if (coord === coordX) {
//                 +coord.value <= 50 ? dot1.style.left = `calc(${coord.value}%)` : dot1.style.left = `calc(${coord.value}% - 20px)`;
//             }
//             if (coord === coordY) {
//                 +coord.value <= 50 ? dot1.style.top = `calc(${coord.value}%)` : dot1.style.top = `calc(${coord.value}% - 20px)`;
//             }
//         });
//     }
// }

// setСoordinates(coordX);
// setСoordinates(coordY);

//==========lazyLoading for images and iframes==================
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy, iframe.lazy"));
    console.log('lazyImages: ', lazyImages);
    let active = false;

    const lazyLoad = function () {
        if (active === false) {
            active = true;

            setTimeout(function () {
                lazyImages.forEach(function (lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        //   lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");

                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage;
                        });

                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });

                active = false;
            }, 200);
        }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});

//================Отложенная загрузка CSS============
function asyncCSS(href) {
    setTimeout(() => {
        let css = document.createElement('link');
        css.rel = "stylesheet";
        css.href = href;
        document.head.appendChild(css);
        console.log('2sec');
    }, 2000);
}

asyncCSS('https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');


//================Отложенная загрузка JS(Jquery)============
// setTimeout(() => {
//     let js = document.createElement('script');
//     js.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'; // в кавычках ссылка на файл с jQuery
//     document.body.appendChild(js);
// }, 2000);

///!!!!!/////
// document.addEventListener('touchstart', onTouchStart, {passive: true});



//====================Plan===============
let plan = document.querySelector('#img-plan');
let planDots = document.querySelectorAll('.plan__dot');
let inputCheck = document.querySelector('.plan__inp-check');
let planDotsClose;
let dotsCoords = {};

//отменяем всплытие
// if (planDots) {
//     planDots.forEach(dot => {
//         dot.addEventListener('click', e => {
//             e.stopPropagation();
//             console.log('click mark');
//         })
//     })
// }

let id = 1;

//определение координат при клике в %-х
let identifyCoords = function (e) {
    // console.log('click img');

    let planWidth = e.target.offsetWidth; //px
    let planHeight = e.target.offsetHeight; //px
    let cursorX = e.offsetX / (planWidth / 100);
    let cursorY = e.offsetY / (planHeight / 100);

    // console.log('dotsCoords: ', dotsCoords);

    recordCoords(id, cursorX, cursorY);

    return [cursorX, cursorY, id]
}

let recordCoords = function (key, v1, v2) {
    dotsCoords[key] = [v1, v2];
    id++;
}

//путь к изображению метки
let pathMackImg = 'img/svgSprite/point.svg';

//добавляет метку на план
let addMarkOnPlan = function ([coordX, coordY, id], content) {
    // console.log('obj: ', obj);


    plan.insertAdjacentHTML('beforeend', `
    <a href="#estate${id}" class="plan__dot dot1" style="left: ${coordX - 3}%; top: ${coordY- 10}%;">
        <div class="plan__dot-close plan__dot-close_visible" title="Удалить метку"></div>
        <img src="${pathMackImg}" alt="Метка на плане">
    </a>
    <div class="mfp-hide thanks" id="estate${id}">
        <div class="thanks__img-wrap">
            <img class="thanks__img" src="img/unnamed.jpg" alt="" >
        </div>
        <div class="thanks__content">
            <p>${content}</p>
        </div>
    </div>
`)
}

function createMark(e) {
    if (e.target.classList.contains('plan__img')) {

        let content = prompt('Введите контент будущей метки:');
        if (!content.length) {
            content = "Ничего не было введено";
        }
        addMarkOnPlan(identifyCoords(e), content);
    }

    $('.plan__dot').magnificPopup({
        disableOn: function() {
            $('.plan__dot-close').click(function() {return false;})
            return true;
          }
    });

    deleteMark();
}

let checkClose = function (isEdit) {
    planDotsClose = document.querySelectorAll('.plan__dot-close');

    if (isEdit === true) {
        planDotsClose.forEach(dotClose => {
            if (!dotClose.classList.contains('plan__dot-close_visible')) {
                dotClose.classList.add('plan__dot-close_visible');
            }
        })
    } else {
        planDotsClose.forEach(dotClose => {
            if (dotClose.classList.contains('plan__dot-close_visible')) {
                dotClose.classList.remove('plan__dot-close_visible');
            }
        })
    }
}
let deleteMark = function () {
    planDotsClose = document.querySelectorAll('.plan__dot-close');
    planDotsClose.forEach(dotClose => {
        dotClose.addEventListener('click', function () {
            let mark = dotClose.closest('.plan__dot');
            mark.remove();
        });
    });
}

//если вкл/выкл режим редактирования добавлять/удалять событие клика на план соответственно 
inputCheck.addEventListener('change', () => {
    if (inputCheck.checked) {
        // console.log('checked');
        plan.addEventListener('click', createMark);
        checkClose(true);
    } else {
        plan.removeEventListener('click', createMark, false);
        checkClose(false);
    }
})

////////////////////////end plan//////////////////////////////////

///////////////
// let s = {
//     1: [2, 3],
//     2: [4, 6],
// }

// for (let w in s) {
//     console.log(w + ' fdf ' + s[w]);
// }

// Object.getOwnPropertyNames(s);

// console.log('Object.getOwnPropertyNames(s): ', Object.getOwnPropertyNames(s));
// console.log('Object.getOwnPropertyNames(s): ', Object.keys(s));




// function mySandwich(param1, param2, callback) {
//     console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);
//     callback();
// }

// mySandwich('ham', 'cheese', function () {
//     console.log('Finished eating my sandwich.');
// });

// function mySandwich(param1, param2, callback) {
//     console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);

//     if (callback && typeof (callback) === 'function') {
//         let a = 'potato';
//         callback(a);
//     }
// }


// mySandwich('ham', 'cheese', function (a) {
//     console.log(`Finished eating my ${a}.`);
// });

////////////////работа с json

// let url = './db/data.json';
// fetch(url).then(function (response) {
//     // console.log('response: ', response);

//     if (response.ok) {
//         response.json().then(function (data) {
//             let marks = data.marks;
//             console.log('marks: ', Array.isArray(marks));
//             console.log('marks: ', marks instanceof Array);


//             // initialize();
//         });
//     } else {
//         console.log('Network request for data.json failed with response ' + response.status + ': ' + response.statusText);
//     }
// });

