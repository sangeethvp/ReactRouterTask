import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from 'axios';


const ProductList = ({addToCart,cartItems}) =>{

    const [products,setProducts] = useState([]);

    

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            setProducts(response.data)
        }).catch((error) => {
            console.error('erroe fetching data',error)
        });
    },[]);

    return(
        <div className="grid grid-row-3 grid-cols-3 justify-between items-center gap-5">
            {products.map((product) =>(
                <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                cartItems={cartItems}/>
            ))}
        </div>
    )

}

export default ProductList