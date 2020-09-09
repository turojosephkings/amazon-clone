import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
//import { initialState } from "./reducer";
import { useStateValue } from './StateProvider';



//try

function getBasketTotal(basket) {
    const totalCost = basket.reduce((total, item) => total + item.price, 0);
    return totalCost; 
} 

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>{/* part of the homework start watching video at 1:15:00 */}
                        Subtotal ({basket.length} items):
                        <strong>{ `${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2} 
            value={getBasketTotal(basket)} //part of homework
            displayType={"text"} 
            thousansSeparator={true} 
            prefix={"$"} />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
