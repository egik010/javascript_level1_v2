var shopCart = {
    listOfProducts: [],
    countBasketPrice: function () {
        var resultPrice = 0
        for (i = 0; i < this.listOfProducts.length; i++) {
            resultPrice += this.listOfProducts[i].price;
        }
        return resultPrice
    }
}
var trainers = {
    name: 'trainers',
    price: 250
};

var tShirts = {
    name: 'tShirts',
    price: 85
};

var jeans = {
    name: 'jeans',
    price: 98
};

function init() {
    const buyButton = document.getElementById("buy-button-cart");
    const trainersCheck = document.getElementById("add-button-trainers");
    const tShirtsCheck = document.getElementById("add-button-t-shirts");
    const jeansCheck = document.getElementById("add-button-jeans");
    trainersCheck.onclick = function(event) {
        shopCart.listOfProducts.push(trainers);
    };
    tShirtsCheck.onclick = function(event) {
        shopCart.listOfProducts.push(tShirts);
    };
    jeansCheck.onclick = function(event) {
        shopCart.listOfProducts.push(jeans);
    };
    buyButton.onclick = function(event) {
        shoppingCarts = document.getElementById("shopping-carts");
        shoppingCarts.innerHTML = `Your products:<br>`;
        for (let i=0; i<shopCart.listOfProducts.length; i++){
            shoppingCarts.innerHTML += `${shopCart.listOfProducts[i].name} ${shopCart.listOfProducts[i].price}<br>`
        }
        shoppingCarts.innerHTML += `Count:${shopCart.countBasketPrice()}`;
    }
    };

window.addEventListener('load', init);