"use strict"

class ProductItemMini {
	constructor(prodNum, count = 0, container, prodName = 'REBOX ZANE', price = 150) {
		this.prodNum = prodNum;
		this.count = count;
		this.container = container;
		this.prodName = prodName;
		this.price = price;
		this._render(this.container);
	}
	_render(container) {
		let wrapper = document.createElement('div');
		wrapper.className = 'cart-product';

		let photo = document.createElement('div');
		photo.className = 'photo-product';

		let img = document.createElement('img');
		img.src = `img/items-${this.prodNum}.png`;
		img.width = '72';
		img.height = '85';

		let text_product = document.createElement('div');
		text_product.className = 'text-product';
		text_product.innerHTML = `<h2>${this.prodName}</h2>
																<p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
									 								class="fas fa-star-half-alt"></i></p>
																<span>${this.count} x ${this.price}</span>`;

		let delete_button_mini = document.createElement('a');
		delete_button_mini.className = 'delete-product_cartMini sc-product__delete-button';
		delete_button_mini.href = '#';
		delete_button_mini.innerHTML = `<i class="fas fa-times-circle"></i>`;
		delete_button_mini.setAttribute(`data-prodnum`, this.prodNum);

		// раскладывваем все по своим местам
		photo.appendChild(img);
		wrapper.appendChild(photo);
		wrapper.appendChild(text_product);
		wrapper.appendChild(delete_button_mini);
		container.appendChild(wrapper);
	}
}

class CartMiniFooter {
	constructor(total_price, container) {
		this.total_price = total_price;
		this.container = container;
		this._render(this.container);
	}
	_render(container) {
		// добвляем ДОП инфо
		let h2 = document.createElement('h2');
		h2.innerText = `TOTAL`;

		let total_price = document.createElement('span');
		total_price.innerText = `$${this.total_price}`;

		let cart_buttons = document.createElement('div');
		cart_buttons.className = 'cart-buttons';

		let checkout = document.createElement('div');
		checkout.className = 'checkout';

		let a_checkout = document.createElement('a');
		a_checkout.href = 'checkout.html';
		a_checkout.innerText = "Checkout";

		let go_to_cart = document.createElement('div');
		go_to_cart.className = 'go-to-cart';

		let a_shoppingcart = document.createElement('a');
		a_shoppingcart.href = 'shoppingcart.html';
		a_shoppingcart.innerText = 'Go to cart';

		// раскладывваем все по своим местам
		h2.appendChild(total_price);
		container.appendChild(h2);
		checkout.appendChild(a_checkout);
		cart_buttons.appendChild(checkout);
		go_to_cart.appendChild(a_shoppingcart);
		cart_buttons.appendChild(go_to_cart);
		container.appendChild(cart_buttons);
	}
}