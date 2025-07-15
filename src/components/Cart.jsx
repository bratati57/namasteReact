import {useSelector} from "react-redux"
import MenuItem from "./MenuItem"
import { useDispatch } from "react-redux"
import { emptyCart, addItem, deleteItem} from "../reduxStore/cartSlice"

const Cart=()=>{
    const cartItems=useSelector((state)=>state.cart.items)
    const dispatch=useDispatch()
    const handleStoreItem=(itemInside)=>{
        
dispatch(deleteItem(itemInside))
    }
    console.log("cartItems", cartItems)
    if (cartItems.length===0){
        return(
               <div className="text-center m-auto p-4  w-6/12 mt-4">
            <h3 className="text-shadow-lg">Your Cart feels light. Add from the wide range of yumm menu items.</h3>
            </div>
        )
    }
    return(
        <div className="text-center m-auto p-4  w-6/12 ">
             {/* <h1 className="font-bold">Cart- </h1> */}
<div className="flex justify-center">
            <h1 className="font-bold mr-3 p-1 cursor-pointer font-medium">Total Cart Items-{cartItems.length}</h1>
            <div className="mb-3 p-1 bg-black text-sm rounded-lg text-white ">Clear Cart</div>
            </div>
            {cartItems.map((item)=>{
                return(<MenuItem fromCart key={item.id||item.name} itemInside={item}/>)
            })}

        </div>
    )
}
export default Cart