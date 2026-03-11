(function() {
    // Check if already loaded
    if (window.midnightFactory) {
        window.midnightFactory();
        return;
    }
    
    // Load the main script
    var script = document.createElement('script');
    script.src = 'https://40ir.github.io/bookmarklet/midnight.js'; // Update with your actual repo path
    script.onload = function() {
        console.log('Midnight Tool loaded');
        if (window.midnightFactory) {
            window.midnightFactory();
        }
    };
    document.body.appendChild(script);
})();
