export let signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let firebase = getFirebase()
        let firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                email: newUser.email,
                address: '',
                moreInfo: '',
                zip: '',
                phone: ''
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export let signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        let firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export let signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        let firebase = getFirebase()

        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'})
            firebase.logout();

        })


    }
}

export let upDateInfos = (userInfo) => {
    return (dispatch, getState, {getFirestore}) => {
        let firestore = getFirestore()
        firestore.collection('users').doc(userInfo.uid).set({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            initials: userInfo.firstName[0] + userInfo.lastName[0],
            email: userInfo.email,
            address: userInfo.address,
            moreInfo: userInfo.moreInfo,
            zip: userInfo.zip,
            phone: userInfo.phone
        })
    }
}