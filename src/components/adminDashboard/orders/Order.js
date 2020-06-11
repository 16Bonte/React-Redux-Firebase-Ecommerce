import Product from './Product'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateOrderStatus } from '../../../store/actions/ordersAction'

const Order = ({ order, prodList, updateOrderStatus }) => {

    let [myOrder, setMyOrder] = useState(order)
    let [submitted, setSubmited] = useState(false)

    let changeOrderStatus = (e) => {
        setMyOrder({ ...myOrder, status: e.target.name })
        setSubmited(true)
    }

    useEffect(() => {
        if (submitted) {
            updateOrderStatus(myOrder)
            setSubmited(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeOrderStatus])


    return (
        <div className="collection-item">
            <button onClick={changeOrderStatus} name='pending'>En attente</button>
            <button onClick={changeOrderStatus} name='onHisWay'>En route</button>
            <button onClick={changeOrderStatus} name='delivered'>Livrée</button>
            <button onClick={changeOrderStatus} name='cancelled'>Annulé</button>
            {order.products.map((product, i) => {
                let prodRef = prodList.find(prod => prod['id'] === product.productId)
                return (
                    <Product key={i} prodRef={prodRef} details={product} order={order} />
                )
            })}
        </div>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateOrderStatus: (order) => dispatch(updateOrderStatus(order)),
    }
}

export default connect(null, mapDispatchToProps)(Order)
