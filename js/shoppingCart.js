"use strict"

renderCart();

function renderCart() {
	let cart = document.getElementById('product_container');
	cart.innerHTML = '';
	let cartStr = localStorage.getItem('cart');
	let cartArr = [];
	if (cartStr) {
		cartArr = cartStr.split(',');
	}
	
	// console.log(localStorage);
	// console.log(cartArr);
	
	while (cartArr.length > 0) {
		// берем первый продукт из массива
		let prodNum = cartArr[0];

		// считаем сколько продуктов данного типа в корзине
		let count = 0;
		for (const num of cartArr) {
			if (num === prodNum) {
				count++;
			}
		}

		// отображаем продукт в корзине
		new ProductItem(prodNum, count, cart);

		// удаляем данный продукт из массива
		cartArr = cartArr.filter(int => int !== prodNum);
	}
	
	// вешаем события на кнопки
	btnDelAction();
}

function btnDelAction() {
	// получаем кнопки
	let btnDelArr = document.getElementsByClassName('sc-product__delete-button');
	// вешаем обработчик на каждую кнопку
	for (const btn of btnDelArr) {
		btn.addEventListener('click', event => {
			event.preventDefault();
			// получаем номер продукта
			let prodNum = btn.dataset.prodnum;
			// удаляем продукт из localStorage

			let cartArr = [];
			cartArr = localStorage.getItem('cart').split(',');
			cartArr = cartArr.filter(int => int !== prodNum);
			
			//если массив пустой, удаляем localStorage
			if (!cartArr.length) {
				localStorage.clear();
			} else {
				localStorage.setItem('cart', cartArr.join(','))
			}
			// перерисовывем корзину
			renderCart();
		})
	}
}