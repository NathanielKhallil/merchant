import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import {
  Products,
  Navbar,
  Cart,
  Banner,
  Landing,
  MerchItem,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Banner />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/products">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/merchitem/:id">
            <MerchItem handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
