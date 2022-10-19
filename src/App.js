import "./App.css";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
