import React, { useState } from 'react'

const AddCategory = ({ createCategory, backToAdminStart }) => {

    let [category, setCategory] = useState({
        name: '',
        shortDescription: '',
        longDescription: ''
    })

    let handleChange = e => setCategory({ ...category, [e.target.id]: e.target.value })

    let handleSubmit = (e) => {
        e.preventDefault()
        createCategory(category)
        backToAdminStart()
    }


    return (
        <div className='container'>
            <button onClick={backToAdminStart}>Retour</button>
            <form onSubmit={handleSubmit} className="white">
                <h5 className='grey-text text-darken-3'>Ajouter une catégorie</h5>
                <div className="input-field">
                    <label htmlFor="title">Nom de la catégorie</label>
                    <input type="text" id="name" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="shortDescription">Description courte</label>
                    <textarea id="shortDescription" className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="longDescription">Description longue</label>
                    <textarea id="longDescription" className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth">Create</button>
                </div>
            </form>
        </div>
    )
}

export default AddCategory