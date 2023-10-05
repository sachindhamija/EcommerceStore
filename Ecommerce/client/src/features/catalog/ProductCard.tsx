import { Product } from '../../app/models/Product'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

interface Props {
    product: Product;
}
function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{backgroundColor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{sx:{fontWeight:'bold',color:'primary.main'}}}
            />
            <CardMedia
                sx={{ height: 140,bgcolor:'primary.main'}}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand}/{product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
export default ProductCard
