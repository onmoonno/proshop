import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Added into the boiler plate, replaced by the customed bootstrap theme
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> use RouterProvider to pass in the router as a props*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
