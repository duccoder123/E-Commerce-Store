import { Grid } from "@mui/material";
import { Product } from "../../app/model/product";
import ProductCard from "./ProductCard";
interface Props {
  products: Product[];
}
export default function ProductList({ products }: Props) {
  return (
    <div>
      <Grid container spacing={4}>
        {products.map((product: Product) => (
          <Grid item xs={4} key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
