import React, { useState } from 'react'
import Order from './Order'

let OrderList = ({ orders, prodList }) => {

    let [ordersShown, setOrderShown] = useState('pending')

    let orderNumber = 0

    let changeOrdersShown = (e) => setOrderShown(e.target.name)

    return (
        <div>
            <h5>Liste des commandes</h5>
            <button name='pending' onClick={changeOrdersShown}>Commandes à venir</button>
            <button name='onHisWay' onClick={changeOrdersShown}>En route</button>
            <button name='past' onClick={changeOrdersShown}>Livrés</button>
            <button name='cancelled' onClick={changeOrdersShown}>Commandes annulés</button>
            <div className="collection">
                {orders.map((order, i) => {
                        if (order.status === ordersShown) {
                            return (
                                <Order order={order} key={i} prodList={prodList} />
                            )
                        } else {
                            orderNumber++
                            if (orders.length === orderNumber) {
                                return <h3 key={i}>Aucune {ordersShown}</h3>
                            }
                        }
                        return null 
                    } 
                    )
                }
            </div>
        </div>
    )
}

export default OrderList
