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
class AllProducts {
    constructor (id, img, name, description, star, price){
        this.id = id;
        this.img = img;
        this.name = name;
        this.description = description;
        this.star = star;
        this.price = price;
    }

    static addAllProducts(obj) {
        return `
        <div class="card product box" id="${obj.id}">
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
                <a href="#" data-id="${obj.id}" data-name="${obj.name}" data-img="${obj.img}" data-price="${obj.price}" class="addToCart"><i class='bx bx-cart-alt cart'></i></a>
        </div>
        `;
    }
}

function setProducts() {
    let allProductsDetails = "json/all_products.json";
    $.ajax({
        type: "GET",
        url: allProductsDetails,
        dataType: "json", 
        success: function(data) {
            for (let index = 0; index < data.length; index++) {
                $(".allProducts").append(AllProducts.addAllProducts(data[index]));
            }
        }
    });
}
setProducts();

            /* Add To Cart */
class DataToCart {
    constructor (name, img, price, id, quantity) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.quantity = quantity;
    }

    static addToCartProducts(obj){
        let createRow = `<tr data-rowid="${obj.id}">
                            <td><i class='bx bxs-trash clearCart' data-id="${obj.id}"></i></td>
                            <td><img src="${obj.img}" height="50" width="50"></td>
                            <td>${obj.name}</td>
                            <td>${obj.price}</td>
                            <td>
                                <input type="number" size="4" value="1" class="totalProducts" data-id="${obj.id}" data-price="${obj.price}">
                            </td>
                            <td id="amount_${obj.id}" data-amount="${Number.parseFloat(obj.price) * Number.parseInt(obj.quantity)}">${Number.parseFloat(obj.price) * Number.parseInt(obj.quantity)}</td>
                        </tr>
        `;
        
        let currentProductOnTheCart = localStorage.getItem("cart");
        currentProductOnTheCart += createRow;
        
        localStorage.setItem("cart", currentProductOnTheCart);

        //To change the number on the shopping cart
        let getNumberProduct = Number.parseInt(localStorage.getItem("carticon")); 
        localStorage.setItem("carticon", getNumberProduct + 1);
        $(".counter").text(localStorage.getItem("carticon"));
        
        return createRow;
    }
}

$(document).on("click", ".addToCart", function(e){
    let dataProduct = $(this).data();
    dataProduct.quantity = 1;
    DataToCart.addToCartProducts(dataProduct);
    
    e.preventDefault();
    returnMsgSuccess("You have successfully added to the cart!");
});


    /* Show more or less Cards */
$(document).on("click", '#showMore', function() { 
    $("#showLess").prop("disabled", false);
    $('#product1 .box:hidden').slice(0, 4).slideDown(100).addClass('show-hide');
        if ($("#product1 .box:hidden").length == 0) {
          // .prop qe shton disbled butonin kur nuk ka me elemente per me shtu
          $("#showMore").prop("disabled", true);
        }
});


$(document).on('click', '#showLess', function(){
    if ($(".show-hide").length > 4) {
        // Gjatesia e div elementeve qe kane klasen show-hide ne menyre qe
        // te specifikohet cilet div elemente do te behen slideUp()
        let x = $(".show-hide").length;
        for(let index = 0; index <= x; index++){
            $('.show-hide').slice(x - 4 ,x).removeClass('show-hide').slideUp();
            // qe largon property disabled nga butoni kur klikohet butoni show less
            $("#showMore").removeAttr('disabled');
        }
    } else {
        $("#showLess").prop("disabled", true);
        $('.show-hide').slice(0 ,4).removeClass('show-hide').slideUp();
    }
});


/* Message Success For Adding Product To Cart */
function returnMsgSuccess(msg) {
    $("#showMsg").prop("hidden", false);
    $("#setMsg").text(msg);

    setTimeout(function () {
        $("#showMsg").prop("hidden", true);
        $("#setMsg").text('');
    }, 1000);
}