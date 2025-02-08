import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value =>
      (() => {
        const {cartList, removeAllCartItems} = value
        const showEmptyView = cartList.length === 0

        const getTotalPrice = () =>
          cartList.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          )

        return (
          <>
            <Header />
            <div className="cart-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    onClick={removeAllCartItems}
                    className="remove-all-button"
                  >
                    Remove All
                  </button>
                  <CartListView />
                  <CartSummary totalPrice={getTotalPrice()} />
                </div>
              )}
            </div>
          </>
        )
      })()
    }
  </CartContext.Consumer>
)
export default Cart
