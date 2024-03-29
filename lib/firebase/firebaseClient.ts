import { FirebaseApp } from "firebase/app"
import firebase from "firebase/compat/app"
import "firebase/compat/analytics"

let app: FirebaseApp

// Initialize Firebase
if (typeof window !== undefined && !firebase.apps.length) {
    app = firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    })
} else if (typeof window !== "undefined") {
    app = firebase.apps[0]
}


export { firebase }
