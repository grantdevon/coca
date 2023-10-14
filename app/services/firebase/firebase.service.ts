import firestore from '@react-native-firebase/firestore';


export const createDocument = (userDetails: Object) => {
    firestore().collection('User').add({
        ...userDetails,
        partner: ''
    }).then(
        () => console.log("Document created!"))
        .catch(
        (error) => console.log('Failed to create document. Reason: ', error)
    )
}