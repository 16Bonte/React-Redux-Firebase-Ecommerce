export let createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore()
        let profile = getState().firebase.profile
        let authorId = getState().firebase.auth.uid

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastTime: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}