import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/model/product";
interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar>{product.name.charAt(0).toUpperCase()}</Avatar>}
        title={product.name}
      />
      <CardMedia
        sx={{ height: 140 }}
        image="http://picsum.photos/200"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          veniam debitis asperiores nemo, dolore sapiente. Similique voluptatem
          blanditiis temporibus, aliquid, molestiae aut totam praesentium
          accusamus dicta dolores voluptas quam adipisci!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn more</Button>
      </CardActions>
    </Card>
  );
}
