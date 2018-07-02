var Content = {};
Content.println = (function() {
    var dom = document.getElementById('content');
    return function(text) {
        var textNode = document.createTextNode(text + '\n');
        dom.appendChild(textNode);
    }
})();

Content.print = (function() {
    var dom = document.getElementById('content');
    return function(text) {
        var textNode = document.createTextNode(text + '\r');
        dom.appendChild(textNode);
    }
})();