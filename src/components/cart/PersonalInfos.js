import React, { useEffect } from 'react'

const PersonalInfos = ({ users, setCartStatus, auth, upDateInfos, userInfo, setUserInfo }) => {

    useEffect(() => {
        if (auth.uid) {
            let user = users.find(user => user['id'] === auth.uid)
            setUserInfo({
                ...userInfo,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                address: user.address,
                moreInfo: user.moreInfo,
                zip: user.zip,
                phone: user.phone,
                uid: auth.uid
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let { firstName, lastName, email, address, moreInfo, zip, phone } = userInfo

    let previous = () => setCartStatus({personalInfos: false, init: true})

    let handleChange = e => {
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
        console.log(userInfo)
    }

    let handleSubmit = e => {
        e.preventDefault()
        if (auth.uid) {
            upDateInfos(userInfo)
        }
        console.log(userInfo)
        setCartStatus({ personalInfos: false, payment: true })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className='grey-text text-darken-3'>Informations de livraison</h5>
                <div className="input-field">
                    <label htmlFor="firstName">Prénom</label>
                    <input required type="text" id="firstName" value={firstName} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Nom</label>
                    <input required type="text" id="lastName" value={lastName} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input required type="email" id="email" value={email} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="address">Adresse</label>
                    <input required type="text" id="address" value={address} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="moreInfo">Étage, batiment, informations complémentaires ..</label>
                    <input type="text" id="moreInfo" value={moreInfo} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="zip">Code postal</label>
                    <input required type="text" id="zip" value={zip} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="phone">Téléphone</label>
                    <input required type="text" id="phone" value={phone} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth">Valider les informations</button>
                </div>
                <button onClick={previous}>Précédent</button>
                <div className="red-text center">
                </div>
            </form>
        </div>
    )
}

export default PersonalInfos
