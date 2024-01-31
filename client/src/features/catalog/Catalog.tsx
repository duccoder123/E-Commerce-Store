import agent from "../../app/api/agent";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    agent.Catalog.list().then((prs) => setProducts(prs));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
