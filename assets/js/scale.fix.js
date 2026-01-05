(function(document) {
    'use strict';

    var TabletToMobile = 768,
        MobileToDesktop = 1024,
        scale = 1,
        meta = document.querySelector('meta[name="viewport"]');

    function adjustScale() {
        scale = 1;

        if (window.innerWidth < TabletToMobile) {
            scale = window.innerWidth / TabletToMobile;
        }

        meta.content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';
    }

    adjustScale();

    window.addEventListener('resize', function() {
        adjustScale();
    });

})(document);

