
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9cXsrgHqAdvL3jdSXAvRjnU_vHohCE28",
  authDomain: "timer-app-5d1d1.firebaseapp.com",
  projectId: "timer-app-5d1d1",
  storageBucket: "timer-app-5d1d1.appspot.com",
  messagingSenderId: "223168994230",
  appId: "1:223168994230:web:1a07505f0cbfc005a77f17"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {

  try {
    const result = await signInWithPopup(auth, provider)

    let name = result.user.displayName
    let email = result.user.email

    name && localStorage.setItem('name', name)
    email && localStorage.setItem('email', email)

  } catch (error) {
    alert('error logging in')
    console.log(error)
  }


}

