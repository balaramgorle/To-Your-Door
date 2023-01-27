
// fetch the details(products)
// add to local storage
// pass the id to add to cart function and change id to num 

let productDataUrl = 'https://my-json-server.typicode.com/balaramgorle/api-server/db' 

async function getProducts(productDataUrl) {
    fetch(productDataUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let productsData = data.product;
            console.log(productsData);
            let cards = '';

            productsData.forEach((product) => {
                // console.log(product)
                cards = cards + `
                <div class="box">
                <div class="image">
                    <img src="${product.source}" alt="">
                    <a href="#" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>${product.name}</h3>
                    <p>${product.imagename}</p>
                    <a href="" class="btn" onclick="cart.addToCart('${encodeURI(JSON.stringify(product))}')">add to cart</a>
                    <span class="price">${product.price}</span>
                </div>
            </div>
                `;
            });

            document.getElementById('product').innerHTML = cards;

            // console.log(cards);

        });

}
getProducts(productDataUrl)
// https://codepen.io/gerrardcss/pen/OJjQjWr