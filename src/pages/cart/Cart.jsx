import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiPlusCircle, FiMinusCircle, FiXCircle } from 'react-icons/fi'
import './cart.css'
import * as CartActions from '../../store/modules/cart/actions'

const Cart = () => {
  const cart = useSelector(state => state.cart.map(book => ({ ...book, subtotal: book.price * book.amount })))
  const total = useSelector(state => state.cart.reduce((totalSum, product) => totalSum + product.price * product.amount, 0))
  const dispatch = useDispatch()

  function increment(book) {
    dispatch(CartActions.updateAmount({ id: book.id, amount: book.amount += 1 }))
  }

  function decrement(book) {
    dispatch(CartActions.updateAmount({ id: book.id, amount: book.amount -= 1 }))
  }

  return (<main className="container">
    <div className="bag-container">
      <table className="book-table">
        <thead>
          <tr>
            <th />
            <th>Livro</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(book => (
            <tr key={book.id}>
              <td>
                <img src={book.image} alt={book.title} />
              </td>
              <td>
                <strong>{book.title}</strong>
                <span>R$ {book.price}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(book)}>
                    <FiMinusCircle size={20} color="rgb(38, 42, 43)" />
                  </button>
                  <input type="number" readOnly value={book.amount} />
                  <button type="button" onClick={() => increment(book)}>
                    <FiPlusCircle size={20} color="rgb(38, 42, 43)" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ {book.subtotal.toFixed(2)}</strong>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(book.id))}>
                  <FiXCircle size={20} color="rgb(38, 42 43)" />
                </button>
              </td>
            </tr>))
          }
        </tbody>
      </table>

      <footer>
        <button type="button">Encomendar</button>
        <div className="total">
          <span>Total</span>
          <strong>R$ {total.toFixed(2)}</strong>
        </div>
      </footer>
    </div>
  </main>
  )
}

export default Cart