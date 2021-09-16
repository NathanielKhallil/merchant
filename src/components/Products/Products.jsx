import React from "react";
import { Grid } from '@material-ui/core';
import Product from "./Product/Product";
import useStyles from './styles';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$50', image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f9b52c1f-ca36-4492-8836-7a84c6bfd789/quest-3-running-shoes-tHzGtw.png' },
    {id: 2, name: 'Shirt', description: 'Band Shirt.', price: '$25', image:'https://static.highsnobiety.com/thumbor/FAY7UKlrHbRX7AuP9fzMiLpE2LM=/1600x1067/static.highsnobiety.com/wp-content/uploads/2016/08/02092439/band-tee-main.jpg'}
]

const Products = () => {
    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
        {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
                </Grid>
        ))}
        </Grid>
    </main>
    )}

export default Products;