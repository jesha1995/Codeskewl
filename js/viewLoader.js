
// Loads the header view into the main page
// (function(){
//     var header = document.querySelector('header');
//     var myRequest = new Request('navigation.html');
//     fetch(myRequest).then(function(response) {
//         return response.text().then(function(text) {
//             header.innerHTML = text;
//         });
//     });

//     var footer = document.querySelector('footer');
//     myRequest = new Request('footer.html');
//     fetch(myRequest).then(function(response) {
//         return response.text().then(function(text) {
//             footer.innerHTML = text;
//         });
//     });
// })();

$(document).ready(function() {
    $('#header-nav').load('./navigation.html');
    $('#footer').load('/footer.html');
});
