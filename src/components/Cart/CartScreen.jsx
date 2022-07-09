import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCartGlobal } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './style/cartScreen.css'


const CartScreen = () => {

  const dispatch = useDispatch();
  const [confirmPurchases, setConfirmPurchases] = useState(false)

  const postPurchase = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, objPurchase, getConfig())
      .then(res => {
        setConfirmPurchases(true)
        dispatch(setCartGlobal(null))
        setTimeout(() => {
          setConfirmPurchases(false)
        }, 3000)
      })
      .catch(err => console.log(err.data))
  }

  const cart = useSelector(state => state.cart)

  let totalPriceCart = 0;
  if (cart) {
    const cb = (acc, cv) => {
      return acc + (cv.price * cv.productsInCart.quantity)
    }  
    totalPriceCart = cart.reduce(cb,0)
  }

  return (
    <div className='cart'>
      <h2 className='cart__title'>My Cart</h2>
      <div className='cart__container'>
        {
          cart?.map(productCart => (
            <CartInfo
            key={productCart.id}
            productCart={productCart}
            />
            ))
        }
      </div>
      {
        cart ? 
        <div className="cart__total-container">
          <div className="cart__total">
            <h2>
              <span className="cart__total-label">Total: $</span> 
              <span className="cart__total-label">{totalPriceCart}</span> 
            </h2>
          </div>
          <div className="cart__button">
            <button
              className='cart__btn'
              onClick={postPurchase}
              >Confirm Purchase <i className="fa-solid fa-hand-holding-dollar"></i>
            </button>
          </div>
        </div>
        
        :
        <div className="cart__cart-empty">
          <h2>The Cart is empty <i className="fa-solid fa-store-slash"></i></h2>
        </div>
      }
    </div>  
  )
}

export default CartScreen