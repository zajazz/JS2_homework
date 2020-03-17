class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    /**
     * Метод возвращает сумму всех товаров.
     * @returns {number} sum
     */
    sum() {
        let sum = 0;
        for (let item of this.goods) {
            sum += item.price;
        }
        return sum;
    }
}

class ProductItem {
    constructor(product, img='http://dummyimage.com/150/fefa99/ba8eb1&text=No+image') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="product__atc">Добавить в корзину</button>
                </div>
            </div>`;

    }
}

const products = new ProductList();
console.log("Сумма всех товаров " + products.sum());



class Cart {
    constructor() {
        this.goodsInCart = [];
    }

    add(item) {

    }

    remove(item) {

    }

    _render() {

    }
}

class CartItem {
    constructor(item, qty = 1) {
        this.qty = qty;
    }

    _render() {

    }

    // Или increase/decrease
    changeQty() {

    }
}


