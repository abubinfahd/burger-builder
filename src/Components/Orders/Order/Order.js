import React from "react";

const Order = (props) => {
    const ingredientSummary = props.order.ingredients.map(item => {
        return( 
            <span style={{
                border: "1px solid grey",
                boxShadow: "1px 1px solid #888888",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px",
    
            }}key={item.type}>{item.amount} x <span style={{textTransform:"capitalize"}}>{item.type}</span></span>
        )
    })
    return ( 
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px solid #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px",

        }}>
            <p><b>Order Number: </b>{props.order.id}</p>
            <p><b>Delivery Address: </b>{props.order.customer.deliveryAddress}</p>
            {ingredientSummary}
            <hr />
            <p><b>Total: </b>{props.order.price}</p>
        </div>
    )
}

export default Order;