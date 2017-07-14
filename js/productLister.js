(function getProducts(productListed){
    var element;
    var products = '';
    if (!productListed){
        productListed = productList;
    }
    for (var i = 0; i < productListed.length; i++){
        var product = productListed[i];
        products += '<div class="col-md-3 col-sm-6 product-listing">' +
            '<div class="single-shop-product">' +
            '<div class="product-upper">' +
            '<img src="' + product.img + '" alt="" class="img-PLP">' +
            '</div>' +
            '<h2><a class="product-name" href="">' + product.name + '</a></h2>' +
            '<div class="product-carousel-price">' +
            '<ins>€' + (product.price).formatMoney(2, ',', '.') + '</ins>' +
            '</div>' +
            '<div class="product-option-shop">' +
            '<a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="#">Add to cart</a>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    element = document.getElementById('product-list');
    element.innerHTML = products

})();
/**
 * Created by jesha.kuizenga on 14-7-2017.
 */
