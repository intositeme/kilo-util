module.exports = (function(){

    return {

        // Get correct viewport
        // - http://stackoverflow.com/questions/1766861/find-the-exact-height-and-width-of-the-viewport-in-a-cross-browser-way-no-proto
        getViewport : function() {
            var viewPortWidth;
            var viewPortHeight;

            // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
            if (typeof window.innerWidth !== 'undefined') {
                viewPortWidth = window.innerWidth;
                viewPortHeight = window.innerHeight;
            }

            // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
            else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
                viewPortWidth = document.documentElement.clientWidth;
                viewPortHeight = document.documentElement.clientHeight;
            }

            // older versions of IE
            else {
                viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
                viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
            }
            return {w:viewPortWidth, h:viewPortHeight};
        },

        // throttle function from underscore.js
        // - http://stackoverflow.com/questions/27078285/simple-throttle-in-js
        // ====================================================================
        // function onWindowResize() {
        //     console.log( App.utility.getViewport().w, App.utility.getViewport().h );
        // }
        // var throttled = App.utility.throttle( onWindowResize, 100 );
        // $(window).on('resize', throttled );
        // ====================================================================
        throttle : function(func, wait, options) {
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options) options = {};
            var later = function() {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            };
            return function() {
                var now = Date.now();
                if (!previous && options.leading === false) previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        }

    };

})();





