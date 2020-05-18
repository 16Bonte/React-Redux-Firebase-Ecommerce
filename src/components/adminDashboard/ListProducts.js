import React from 'react'

const ListProducts = ({ prodList }) => {

    let handleClick = () => {
        console.log(prodList)
    }

    return (
        <div onClick={handleClick}>
            ProductList
        </div>
    )
}

export default ListProducts