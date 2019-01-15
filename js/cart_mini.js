"use strict"

renderCartMini();

function renderCartMini() {
	let cart = document.getElementById('cart-box');
	cart.innerHTML = '';
	let cartStr = localStorage.getItem('cart');
	let cartArr = [];
	if (cartStr) {
		cartArr = cartStr.split(',');
	}

	let allCount = 0;	// общее кол-во продуктов

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

		allCount += count;

		// отображаем продукт в корзине
		new ProductItemMini(prodNum, count, cart);

		// удаляем данный продукт из массива
		cartArr = cartArr.filter(int => int !== prodNum);
	}

	// вешаем события на кнопки
	btnDelActionMini();
	// добавляем низ корзины
	new CartMiniFooter(allCount*150, cart);
}

function btnDelActionMini() {
	// получаем кнопки
	let btnDelArr = document.getElementsByClassName('delete-product_cartMini');
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
			renderCartMini();
		})
	}
}