import auth from '@react-native-firebase/auth';
import { createDocument } from '../firebase/firebase.service';

export const signUpUser = (email: string, password: string) => {
    auth().createUserWithEmailAndPassword(email, password).then(
        () => {
            console.log("Sign up success!")
            createDocument(auth().currentUser)
        }
    ).catch(
        (error) => console.log("Failed to sign up. Reason: ", error)
        //navigate to error sreen on error
    )
}

export const loginUser = (email: string, password: string) => {
    auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log('Login in success!');
    }).catch((error) => {
        console.log('Failed to login. Reason: ', error);
        //navigate to error sreen on error
    })
}

export const signOutUser = () => {
    auth().signOut()
 }
