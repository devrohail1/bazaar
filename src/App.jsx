import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import Books from "./pages/Books";
import All from "./pages/All";
import ProductDescription from "./pages/ProductDescription";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="electronics" element={<Electronics />} />
            <Route
              path="electronics/product/:id"
              element={<ProductDescription />}
            />
            <Route path="fashion" element={<Fashion />} />
            <Route
              path="fashion/product/:id"
              element={<ProductDescription />}
            />
            <Route path="books" element={<Books />} />
            <Route path="books/product/:id" element={<ProductDescription />} />

            <Route path="all" element={<All />} />
            <Route path="all/product/:id" element={<ProductDescription />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
