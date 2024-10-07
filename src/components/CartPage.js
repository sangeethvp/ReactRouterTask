import { Link } from "react-router-dom"

const CartPage = ({cartItems,removeFromCart}) => {

  
    return(
        <div className="fixed inset-1 bg-blue-600 bg-opacity-50 flex justify-center items-center text-slate-200">
            <div >
                <h2 className="font-bold text-black">Your Cart</h2>
                {cartItems.length === 0 ?(
                    <p>Your Cart is empty</p>
                ) :(
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id}className="p-2 mb-4">
                                <span>{item.title}</span>
                                <button 
                                onClick={() => removeFromCart(item.id)}
                                className="bg-gray-900 text-white px-4 py-2 rounded-lg">Remove</button>
                                </div>
                                
                        ))}
                        
                    </div>
                )}
                <div>
                <p><Link to='/products'>Close</Link></p>
                </div>
               
            </div>
            
        </div>
    )
    
    }
    export default CartPage