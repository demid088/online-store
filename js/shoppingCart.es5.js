"use strict";

renderCart();

function renderCart() {
  var cart = document.getElementById('product_container');
  cart.innerHTML = '';
  var cartStr = localStorage.getItem('cart');
  var cartArr = [];

  if (cartStr) {
    cartArr = cartStr.split(',');
  } // console.log(localStorage);
  // console.log(cartArr);


  var _loop = function _loop() {
    // берем первый продукт из массива
    var prodNum = cartArr[0]; // считаем сколько продуктов данного типа в корзине

    var count = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = cartArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        if (num === prodNum) {
          count++;
        }
      } // отображаем продукт в корзине

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    new ProductItem(prodNum, count, cart); // удаляем данный продукт из массива

    cartArr = cartArr.filter(function (int) {
      return int !== prodNum;
    });
  };

  while (cartArr.length > 0) {
    _loop();
  } // вешаем события на кнопки


  btnDelAction();
}

function btnDelAction() {
  // получаем кнопки
  var btnDelArr = document.getElementsByClassName('sc-product__delete-button'); // вешаем обработчик на каждую кнопку

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop2 = function _loop2() {
      var btn = _step2.value;
      btn.addEventListener('click', function (event) {
        event.preventDefault(); // получаем номер продукта

        var prodNum = btn.dataset.prodnum; // удаляем продукт из localStorage

        var cartArr = [];
        cartArr = localStorage.getItem('cart').split(',');
        cartArr = cartArr.filter(function (int) {
          return int !== prodNum;
        }); //если массив пустой, удаляем localStorage

        if (!cartArr.length) {
          localStorage.clear();
        } else {
          localStorage.setItem('cart', cartArr.join(','));
        } // перерисовывем корзину


        renderCart();
      });
    };

    for (var _iterator2 = btnDelArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}