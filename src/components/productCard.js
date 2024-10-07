const ProductCard = ({product,addToCart,cartItems}) => {
    const isInCart = cartItems.some((item)=> item.id === product.id);

    const handleAddToCart = () => {
        if(isInCart){
            alert('item already exist in the cart')
        }else{
            addToCart(product)
        }
    }
    return(
        <div className="border p-6 rounded-lg bg-stone-200 hover:translate-y-1 hover:scale-y-100 flex flex-col justify-between items-center" >
            <img src={product.image} alt={product.title} className="mx-auto h-40"/>
            <h2 className="font-bold" >{product.title}</h2>
            <p className="font-semibold text-white-300">${product.price}</p>
            <button 
            onClick={handleAddToCart}
            className={`mt-2 px-4 py-2 bg-green-500 text-blue rounded-lg`}>
            
                Add To cart</button>
        </div>

    )
}
export default ProductCard