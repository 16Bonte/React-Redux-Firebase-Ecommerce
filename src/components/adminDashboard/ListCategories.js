import React from 'react'

const ListCategories = ({ cateList }) => {

    let handleClick = () => {
        console.log(cateList)
    }

    return (
        <div onClick={handleClick}>
            ProductList
        </div>
    )
}

export default ListCategories