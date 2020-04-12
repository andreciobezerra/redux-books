import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiShoppingBag } from 'react-icons/fi'
import './home.css'
import api from '../../services/api'
import * as CartActions from '../../store/modules/cart/actions'

const Home = () => {
  const [books, setBooks] = useState([])
  const amount = useSelector(state => state.cart.reduce((sumAmount, book) => {
    sumAmount[book.id] = book.amount

    return sumAmount
  }, {}))

  const dispatch = useDispatch()

  function handleAddProduct(book) {
    dispatch(CartActions.addToCart(book))
  }

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books')
      setBooks(response.data)
    }

    loadBooks()
  }, [])

  return (
    <main className='container'>
      <ul className='book-catalog'>
        {books.map(book => (
          <li className="book-container" key={book.id}>
            <img src={book.image} alt={book.title} />
            <strong>{book.title}</strong>
            <span>R${book.price}</span>

            <button type="button" onClick={() => handleAddProduct(book)} >
              <div>
                <FiShoppingBag size={16} color="rgb(38, 42, 43)" />{' '}
                {amount[book.id] || 0}
              </div>

              <span>Adiconar</span>
            </button>
          </li>))}


      </ul>
    </main>
  )
}

export default Home