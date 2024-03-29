import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import {
  Products,
  Notice,
  Navbar,
  Cart,
  Banner,
  Landing,
  MerchItem,
  Checkout,
  Footer,
  ContactForm,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

const defaultTheme = createTheme();

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 430,
      md: 600,
      lg: 1000,
      xl: 1536,
    },
  },
  overrides: {
    MuiTypography: {
      h6: {
        fontSize: 13,
      },
    },
    MuiGrid: {
      "grid-xs-12": {
        margin: "1rem 0",
      },
    },

    MuiToolbar: {
      root: {
        display: "flex",
        position: "relative",
        alignItems: "center",

        [defaultTheme.breakpoints.up("xs")]: {
          flexDirection: "column",
        },
        [defaultTheme.breakpoints.up("sm")]: {
          flexDirection: "row",
          justifyContent: "flex-end",
        },
        [defaultTheme.breakpoints.down("sm")]: {
          minHeight: "24px",
        },
      },
      gutters: {
        [defaultTheme.breakpoints.up("xs")]: {
          padding: "0",
        },
      },
    },
    MuiIconButton: {
      root: {
        marginTop: ".5rem",
        padding: "12px 12px",
        marginRight: "0",
      },
    },
  },
});

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log(data);

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity, variantData) => {
    const { cart } = await commerce.cart.add(productId, quantity, variantData);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar totalItems={cart.total_items} />
          <Banner />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/products">
              <Notice />
              <Products products={products} />
            </Route>
            <Route exact path="/merchitem/:id">
              <MerchItem handleAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route exact path="/checkout">
              <Checkout
                cart={cart}
                order={order}
                handleCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
            <Route exact path="/contact">
              <ContactForm />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
