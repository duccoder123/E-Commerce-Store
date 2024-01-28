import { Button } from "@mui/material";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5034/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
