import { useEffect, useState } from "react";
import { Product } from "../model/product";
import { Container, CssBaseline, Typography } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5034/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {};

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </div>
  );
}

export default App;
