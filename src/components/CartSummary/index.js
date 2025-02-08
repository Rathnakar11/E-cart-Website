import CartContext from '../../context/CartContext'

const CartSummary = ({totalPrice}) => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsCount = cartList.length

      return (
        <>
          <div className="cart-summary">
            <h1>
              Order Total: <p className="amount">RS {totalPrice}/-</p>
            </h1>
            <p>{cartItemsCount} Items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
