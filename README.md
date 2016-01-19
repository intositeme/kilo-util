# kilo-util

Basic commonly used methods for client side to getViewport width & height

    var util = require('kilo-util');
    console.log('width', util.getViewport.w);
    console.log('height', util.getViewport.h);
    
    // throttle function from underscore.js
    // - http://stackoverflow.com/questions/27078285/simple-throttle-in-js
    function onWindowResize() {
      console.log( App.utility.getViewport().w, App.utility.getViewport().h );
    }
    var throttled = util.throttle( onWindowResize, 100 );
    $(window).on('resize', throttled );
