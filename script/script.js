/* Show Hidden Navbar menu for Mobile */

$(document).on("click", "#bar", function(){
    const nav = document.getElementById('navbar');
    nav.classList.add('active');
});

$(document).on("click", "#close", function(){
    const nav = document.getElementById('navbar');
    nav.classList.remove('active');
});

/* Class for adding products in index.html */
class Products {
    constructor (id, img, name, description, star, price){
        this.id = id;
        this.img = img;
        this.name = name;
        this.description = description;
        this.star = star;
        this.price = price;
    }

    static addProducts(obj) {
        return `
        <div class="card product id="${obj.id}">
              <img class="card-img-top" src="${obj.img}" alt="Card image">
              <div class="card-body description">
                <span class="card-title">${obj.name}</span>
                <h5 class="card-text">${obj.description}</h5>
                <div class="star">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                </div>
                <h4>${obj.price}€</h4>
                </div>
                <a href="#" type="button" data-id="${obj.id}" data-name="${obj.name}" data-img="${obj.img}" data-price="${obj.price}" class="addToCart"><i class='bx bx-cart-alt cart' ></i></a>
            </div>
        `;
    }
}

function getProducts(urlProducts) {
    $(document).ready(function(){
        $.ajax({
            async: false,
            type: "GET",
            url: urlProducts,
            dataType: "json",
            success: function(data){
                if(urlProducts == 'json/best_products.json'){
                    for (let index = 0; index < data.length; index++) {
                        $(".setProducts").append(Products.addProducts(data[index]));
                    }
                } else {
                    for (let index = 0; index < data.length; index++) {
                        $(".setNewProducts").append(Products.addProducts(data[index]));
                    }
                }
            }
        });
    });
}
getProducts("json/best_products.json");
getProducts("json/new_arrivals.json");