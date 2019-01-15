"use strict";

window.onload = function () {
  var hoverProductArr = document.getElementsByClassName('hover-product');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var hoverProduct = _step.value;
      // убираем ссылку на продукт
      // ВРЕМЕННО
      hoverProduct.getElementsByClassName('product')[0].addEventListener('click', function (event) {
        event.preventDefault();
      }); // добавляем в корзину

      hoverProduct.getElementsByClassName('add-to-cart')[0].addEventListener('click', function (event) {
        event.preventDefault();
        var productNum = hoverProduct.getElementsByClassName('product-img')[0].alt;
        var str = localStorage.getItem('cart');

        if (str) {
          str += ",".concat(productNum);
          localStorage.setItem('cart', str);
        } else {
          localStorage.setItem('cart', productNum);
        } //localStorage.clear();


        console.log('Cart: ' + localStorage.getItem('cart')); //console.log(localStorage);
      });
    };

    for (var _iterator = hoverProductArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
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
};