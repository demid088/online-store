"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductItem =
/*#__PURE__*/
function () {
  function ProductItem(prodNum) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var container = arguments.length > 2 ? arguments[2] : undefined;
    var prodName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Mango People T-shirt';
    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Red';
    var size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'XXL';
    var price = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 150;

    _classCallCheck(this, ProductItem);

    this.prodNum = prodNum;
    this.count = count;
    this.container = container;
    this.prodName = prodName;
    this.color = color;
    this.size = size;
    this.price = price;

    this._render(this.container); //this._btnDelAction();

  }

  _createClass(ProductItem, [{
    key: "_render",
    value: function _render(container) {
      var wrapper = document.createElement('div');
      wrapper.className = 'sc-product';
      var a = document.createElement('a');
      a.href = 'singlepage.html';
      var img = document.createElement('img');
      img.src = "img/items-".concat(this.prodNum, ".png");
      img.width = '100';
      img.height = '115';
      var product__title = document.createElement('div');
      product__title.className = 'sc-product__title';
      product__title.innerHTML = "<h2>Mango People T-shirt</h2><p>Color: <span>".concat(this.color, "</span></p><p>Size: <span>").concat(this.size, "</span></p>");
      var product__price = document.createElement('div');
      product__price.className = 'sc-product__price';
      product__price.innerText = "$".concat(this.price);
      var product__quantity = document.createElement('div');
      product__quantity.className = 'sc-product__quantity';
      product__quantity.innerText = this.count;
      var product__shipping = document.createElement('div');
      product__shipping.className = 'sc-product__shipping';
      product__shipping.innerText = 'FREE';
      var product__price_total = document.createElement('div');
      product__price_total.className = 'sc-product__price-total';
      product__price_total.innerText = "".concat(this.price * this.count);
      var product__delete = document.createElement('div');
      product__delete.className = 'sc-product__delete';
      var delete_button = document.createElement('a');
      delete_button.className = 'sc-product__delete-button';
      delete_button.href = '#';
      delete_button.innerHTML = "<i class=\"fas fa-times-circle\"></i>";
      delete_button.setAttribute("data-prodnum", this.prodNum); // раскладывваем все по своим местам

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
  }]);

  return ProductItem;
}();