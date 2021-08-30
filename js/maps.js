//=====Карта ЖК (для каждого свои данныел)
ymaps.ready(init);

//массив всех меток

let colorEstate = '#4BA55E'; //надо менять
let placemarks = [{
        latitude: 55.79,
        longitude: 37.64,
        hintContent: 'Фермерская лавка',
        balloonContent: 'В 10 минутах ходьбы'
    },
    {
        latitude: 55.768,
        longitude: 37.64,
        hintContent: 'Школа Дзюдо',
        balloonContent: 'В 10 минутах ходьбы \n Работает 24/7'
    },

];
let geoObjects = [];

function init() {

    var mainMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 12,
        controls: ['zoomControl', 'geolocationControl'],
      
    }, {
       
    });
    //метка ЖК
    let estate = new ymaps.Placemark(
        [55.76, 37.64], {
            hintContent: 'Наш ЖК',
            balloonContentHeader: 'Наш ЖК',
            balloonContentBody: 'Красивый и удобный',
            balloonContentFooter: 'Все вопросы по телефону'

        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/svgSprite/point.svg',
            iconImageSize: [56, 67],
            iconImageOffset: [-28, -67],
        }

    );

    mainMap.geoObjects.add(estate);

    let listHints = document.querySelector('.map-block__list');

    for (let i = 0; i < placemarks.length; i++) {
        //создается метка
        geoObjects[i] = new ymaps.Placemark(
            [placemarks[i].latitude, placemarks[i].longitude], {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent,
                iconCaption : placemarks[i].hintContent,
            }, {
                iconColor: colorEstate,
                strokeColor: colorEstate,


                // maxWidth: 100,
                // zIndex:  999999,
                // size: 'large',
               
                // preset: 'islands#glyphIcon',
                // iconGlyph: 'home',
                // iconGlyphColor: 'blue',
                // iconContent: 'islands#darkGreenStretchyIcon',
                // iconCaption: 'vvlnn',
                // draggable: true
            });
        //добавляется метка
        mainMap.geoObjects.add(geoObjects[i]);

        //получение координат
        // console.log(geoObjects[i].geometry.getCoordinates());


        // console.log(' geoObjects[i] ',   placemarks[i].hintContent);

        listHints.insertAdjacentHTML("beforeend", ` <li class="map-block__item" data-id="${i}" data-coords="${geoObjects[i].geometry.getCoordinates()}">${placemarks[i].hintContent}</li>`);
    };

    //открытие балуна метки №1
    // estate.balloon.open();



    let links = document.querySelectorAll('.map-block__item');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            // console.log(link.dataset.coords);

            // geoObjects[link.dataset.id].balloon.open();
            // geoObjects[link.dataset.id].balloon.open();
            geoObjects.forEach(function (placemark) {
                // console.log(hint.geometry.getCoordinates().toString());

                if (placemark.geometry.getCoordinates().toString() === link.dataset.coords) {
                    placemark.balloon.open();
                }
                //    console.log(hint[index].geometry.getCoordinates() === link.dataset.coords);
            })
        })
    })

}
