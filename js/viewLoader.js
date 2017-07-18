
// Loads the header view into the main page
(function(){
    var header = document.querySelector('header');
    var myRequest = new Request('navigation.html');
    fetch(myRequest).then(function(response) {
        return response.text().then(function(text) {
            header.innerHTML = text;
        });
    });
})();
