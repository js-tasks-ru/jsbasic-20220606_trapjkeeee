export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    
  }

  addProduct(product) {
    if (!product) {
      return;
    }
    let isContain = false;
    let cartItem = {};
    if (this.cartItems.length > 0) {
      this.cartItems.forEach((i) => {
        if (i.product.id === product.id) {
          i.count += 1;
          cartItem = i;
          console.log(i.product.id)
          isContain = true;
        }
      });
    }
    if (!isContain) {
      cartItem = {
        product,
        count: 1,
      };
      this.cartItems.push(cartItem);
      console.log(this.cartItems)
    }
    // this.onProductUpdate(cartItem);
    
    
  }

  updateProductCount(productId, amount) {
    // ваш код
  }

  isEmpty() {
    return this.cartItems.length === 0 ? true : false
  }

  getTotalCount() {
    // ваш код
  }

  getTotalPrice() {
    // ваш код
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

