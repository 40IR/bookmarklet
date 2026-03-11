(function() {
    if (window.midnightFactory) {
        window.midnightFactory();
        return;
    }
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/40IR/bookmarklet/main/midnight.js';
    script.onload = function() {
        if (window.midnightFactory) window.midnightFactory();
    };
    document.body.appendChild(script);
})();
