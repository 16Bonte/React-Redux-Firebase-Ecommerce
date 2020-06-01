import React from 'react'

const RecapInfos = ({ userInfo, products, shift }) => {

    let { firstName, lastName, address, phone, zip } = userInfo

    return (
        <div>
            <h5>Livraison le {shift.day}</h5>
            <h5>Créneau de livraison {shift.hour}</h5>
            <h5>{firstName} {lastName}</h5>
            <h6>{address} - {zip}</h6>
            <h6>{phone}</h6>
        </div>
    )
}

export default RecapInfos
