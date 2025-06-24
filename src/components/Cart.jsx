import {useSelector} from "react-redux"

const Cart=()=>{
    const cartItems=useSelector((state)=>state.cart.items)
    console.log(cartItems)
    return(
        <div className="text-center m-auto p-4">
             {/* <h1 className="font-bold">Cart- </h1> */}

            <h1 className="font-bold">Cart-{cartItems.length} items</h1>

        </div>
    )
}
export default Cart