
// Load products data from the external file
import { products } from '../data/products.js';
import { addToCart,updateCartQuantity} from './cart.js';
import { cart } from './cart.js';
import { formatMoney } from '../util/money.js';


let htmlContent = '';
if(products && products.length > 0) {
  products.forEach(product =>{
  htmlContent+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${formatMoney(product.priceCents)}
          </div>
          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-added-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`
})

document.querySelector('.products-grid').innerHTML = htmlContent;
updateCartQuantity();
document.querySelectorAll('.js-added-to-cart').forEach(button => {

  button.addEventListener('click', () => {
    console.log('Added to cart');
    console.log(button);

    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();

  });
});
}
