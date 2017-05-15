/**
 * Created by jesha.kuizenga on 12-5-2017.
 */



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
