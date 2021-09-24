import React, {useState, useEffect} from 'react';
import {Select, MenuItem} from '@material-ui/core';
import {commerce} from '../../../lib/commerce';


const Dropdown = () => {
    const [sizeOption, setSizeOption] = useState();
    const [product, setProduct] = useState({});

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        console.log(response);
        const { name, price, media, quantity, description, variant_groups,} = response;

        setProduct({
        id,
        name,
        quantity,
        description,
        src: media.source,
        price: price.formatted_with_symbol,
        variant_groups,
        
        });



        // const sizeTest = Object.entries(product.variant_groups).map(([code, name]) => ({id: code, label: name }));
        // console.log(sizeTest);

        // const sizeTest2 = Object.values(sizeTest)[0].label;
        // console.log(sizeTest2);
        // console.log(product.variant_groups);
    };

 
    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
      }, []);

    return (
        <div>
            Sizes
        </div>
    )
}

export default Dropdown;
