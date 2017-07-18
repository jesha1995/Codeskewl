function getProducts(filter) {
    var element;
    var products = '';
    var productListed = [];
    if (filter) {
        productListed = filterItems(filter, productList);
    } else {
        productListed = productList;
    }
    for (var i = 0; i < productListed.length; i++) {
        var product = productListed[i];
        products += '<div class="col-md-3 col-sm-6 product-listing">' +
            '<div class="single-shop-product">' +
            '<div class="product-upper">' +
            '<img src="' + product.img + '" alt="" class="img-PLP">' +
            '</div>' +
            '<h2><a class="product-name" href="">' + product.name + '</a></h2>' +
            '<h5><a class="product-name" href="">' + product.brand + '</a></h5>' +
            '<div class="product-carousel-price">' +
            '<ins>€' + (product.price).formatMoney(2, ',', '.') + '</ins>' +
            '</div>' +
            '<div class="product-option-shop">' +
            '<a class="add_to_cart_button"  href="#" onclick="addToCart('+'\''+ product.id + '\''+')">Add to cart</a>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    element = document.getElementById('product-list');
    if (!products) {
        window.alert("there is no such item!");
        element.innerHTML = '';
    }
    else{
        element.innerHTML = products;
    }
}
getProducts();
function filterItems(filter, products) {
    return products.filter(function(el) {
        return el.name.toLowerCase().indexOf(filter.toLowerCase()) > -1  || el.brand.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })
}