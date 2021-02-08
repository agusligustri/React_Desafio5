import React, { useEffect, useState } from "react"
import ItemList from "../components/ItemList";
import itemList from "../mokcs/itemList";


const ItemListContainer = ( {greeting} ) => {

    const [products, setProducts] = React.useState([])
    
    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout (() => resolve(itemList), 2000);
    });
        myPromise.then((result) => setProducts(result));
    }, []);
    
    
    return (
        <div>
            <h2>{ greeting }</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;