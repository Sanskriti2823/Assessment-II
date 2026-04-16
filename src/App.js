import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/productlist";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";

const API_URL = "https://fakestoreapi.com/products";

function App() {
  
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState(0);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
      setFiltered(data);
    } catch {
      alert("API failed");
    }
  };

  // Filtering Logic
  useEffect(() => {
    let temp = [...products];

    if (category !== "all") {
      temp = temp.filter(p => p.category === category);
    }

    if (search) {
      temp = temp.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFiltered(temp);
  }, [category, search, sort, products]);

  return (
    <div>
      <Navbar cart={cart} />

      <div className="container mt-4">
        <Filters
          products={products}
          setCategory={setCategory}
          setSearch={setSearch}
          setSort={setSort}
        />

        <ProductList
          products={filtered}
          addToCart={() => setCart(cart + 1)}
        />
      </div>
    </div>
  );
}

export default App;