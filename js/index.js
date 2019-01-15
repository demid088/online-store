"use strict"

window.onload = () => {
	let hoverProductArr = document.getElementsByClassName('hover-product');

	for (const hoverProduct of hoverProductArr) {
		// убираем ссылку на продукт
		// ВРЕМЕННО
		hoverProduct.getElementsByClassName('product')[0].addEventListener('click', event => {
			event.preventDefault();
		});
		// добавляем в корзину
		hoverProduct.getElementsByClassName('add-to-cart')[0].addEventListener('click', event => {
			event.preventDefault();
			
			let productNum = hoverProduct.getElementsByClassName('product-img')[0].alt;
			let str = localStorage.getItem('cart');

			if (str) {
				str += `,${productNum}`;
				localStorage.setItem('cart', str);
			} else {
				localStorage.setItem('cart', productNum);
			}
			
			//localStorage.clear();
			console.log('Cart: ' + localStorage.getItem('cart'));
			//console.log(localStorage);
		});
	}
}


