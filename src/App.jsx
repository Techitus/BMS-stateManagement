/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import EditBlog from "./pages/blog/EditBlog";
import { Provider } from "react-redux";
import store from "../store/store";
import { Suspense, lazy } from "react";
import Parent from "../useCallback/Parent";
import Hook from "./pages/hookPage/Hook";

const SingleBlog = lazy(() => import('./pages/blog/SingleBlog'));
const Register = lazy(() => import('./pages/auth/Register'));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/add-blog" element={<AddBlog />} />
              <Route path="/edit-blog/:id" element={<EditBlog />} />
              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route path="/parent" element={<Parent />} />
              <Route path="/hook" element={<Hook />} />
            </Routes>
          </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
