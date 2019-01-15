"use strict"

class ProductItem {
	constructor(prodNum, count = 0, container, prodName = 'Mango People T-shirt', color = 'Red', size = 'XXL', price = 150) {
		this.prodNum = prodNum;
		this.count = count;
		this.container = container;
		this.prodName = prodName;
		this.color = color;
		this.size = size;
		this.price = price;
		this._render(this.container);
	}
	_render(container) {
		let wrapper = document.createElement('div');
		wrapper.className = 'sc-product';

		let a = document.createElement('a');
		a.href = 'singlepage.html';

		let img = document.createElement('img');
		img.src = `img/items-${this.prodNum}.png`;
		img.width = '100';
		img.height = '115';

		let product__title = document.createElement('div');
		product__title.className = 'sc-product__title';
		product__title.innerHTML = `<h2>Mango People T-shirt</h2><p>Color: <span>${this.color}</span></p><p>Size: <span>${this.size}</span></p>`;

		let product__price = document.createElement('div');
		product__price.className = 'sc-product__price';
		product__price.innerText = `$${this.price}`;

		let product__quantity = document.createElement('div');
		product__quantity.className = 'sc-product__quantity';
		product__quantity.innerText = this.count;

		let product__shipping = document.createElement('div');
		product__shipping.className = 'sc-product__shipping';
		product__shipping.innerText = 'FREE';

		let product__price_total = document.createElement('div');
		product__price_total.className = 'sc-product__price-total';
		product__price_total.innerText = `${this.price * this.count}`;

		let product__delete = document.createElement('div');
		product__delete.className = 'sc-product__delete';

		let delete_button = document.createElement('a');
		delete_button.className = 'sc-product__delete-button';
		delete_button.href = '#';
		delete_button.innerHTML = `<i class="fas fa-times-circle"></i>`;
		delete_button.setAttribute(`data-prodnum`, this.prodNum);

		// раскладывваем все по своим местам
		a.appendChild(img);
		wrapper.appendChild(a);
		wrapper.appendChild(product__title);
		wrapper.appendChild(product__price);
		wrapper.appendChild(product__quantity);
		wrapper.appendChild(product__shipping);
		wrapper.appendChild(product__price_total);
		product__delete.appendChild(delete_button);
		wrapper.appendChild(product__delete);
		container.appendChild(wrapper);
	}
}