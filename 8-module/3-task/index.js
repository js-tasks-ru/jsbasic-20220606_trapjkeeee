export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    
  }

  addProduct(product) {
    if (!product) {
      return;
    }
<<<<<<< HEAD
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
    
    
=======

    let cartItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if (!cartItem) {
      cartItem = {
        product,
        count: 1
      };
      this.cartItems.push(cartItem);
    } else {
      cartItem.count++;
    }

    this.onProductUpdate(cartItem);
>>>>>>> c7aea054dac9711c0b2b728eae723921c198b589
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(item => item.product.id == productId);
    cartItem.count += amount;

    if (cartItem.count === 0) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }

    this.onProductUpdate(cartItem);
  }

<<<<<<< HEAD
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
=======
  onProductUpdate() {
>>>>>>> c7aea054dac9711c0b2b728eae723921c198b589
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.count,
      0
    );
  }
}

