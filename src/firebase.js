import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged} from "firebase/auth";
import { toast } from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth()

onAuthStateChanged(auth, user => {
   userHandle(user || false)
})

export const login = async (email, password) => {
	try {
	 const response = await signInWithEmailAndPassword(auth, email, password)
     console.log(response)
	} catch (err) {
		toast.error(err.code)
	}
}

export const register = async ({email, password, full_name, username}) => {
	try {
	 const response = await createUserWithEmailAndPassword(auth, email, password)
	 console.log(response)
	 await updateProfile(auth.currentUser,{
		displayName: full_name
	 })
     } catch (err) {
		toast.error(err.code)
	   }
}

export const logout = async () => {
    try {
        await signOut(auth)
    }catch(err){
        toast.error(err.code)
    }
}