let carts = document.querySelectorAll('.add-cart');

let products = [
    {
    name: 'Template Ratio',
    tag: 'templateratio',
    price: 450,
    inCart: 0
    },
    {
        name: 'Template WriteUp',
        tag: 'templatewriteup',
        price: 470,
        inCart: 0
    },
    {
        name: 'Template Kaplan',
        tag: 'templatekaplan',
        price: 470,
        incart: 0
    },
    {
        name: 'Template November',
        tag: 'templatenovember',
        price: 470,
        inCart: 0
    },
    {
        name: 'Template Morpho',
        tag: 'templatemorpho',
        price: 470,
        inCart: 0
    },
    {
        name: 'Template CheerUp',
        tag: 'templatecheerup',
        price: 470,
        inCart: 0
    },
    {
        name: 'Template Carolina',
        tag: 'templatecarolina',
        price: 470,
        inCart: 0
    },
    {
        name: 'Template Everyday',
        tag: 'templateeveryday',
        price: 470,
        inCart: 0
    },
    {
        name: 'Template TheBlogger',
        tag: 'templatetheblogger',
        price: 470,
        inCart: 0
    }
    

]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })

}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
} else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
}

setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        
    }

    }

    localStorage.setItem("productsInCart", JSON.stringfy
    (cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", product.price);
}

if(cartCost != null) {
    localStorage.setItem("totalCost", cartCost + product.price);
} else {
    localStorage.setItem("totalCost", product.price);
}


onLoadCartNumbers();
