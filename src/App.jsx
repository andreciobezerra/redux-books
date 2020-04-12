import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Header from './components/header/Header'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cart' exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App