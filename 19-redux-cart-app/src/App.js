import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
// import { uiActions } from "./store/ui-slice";
import { sendCartData } from "./store/cart-slice";

// is not set everytime App renders, hence declare outside
let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    // const sendCartData = async () => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending cart data!",
    //   })
    // );

    // const response = await fetch(
    //   "https://food-order-app-a4aeb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error("Sending cart data failed.");
    // }

    // dispatch(
    //   uiActions.showNotification({
    //     status: "success",
    //     title: "Success!",
    //     message: "Sent cart data successfully!",
    //   })
    // );
    // };

    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart))

    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error!",
    //       message: "Sending cart data failed!",
    //     })
    //   );
    // });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
