// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey ,
  authDomain:import.meta.env.VITE_authDomain  ,
  projectId: import.meta.env.VITE_projectId ,
  storageBucket:import.meta.env.VITE_storageBucket  ,
  messagingSenderId: import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCtzJFmACMsCMfC8Rp12x_iHKUAkg4jrEE",
//   authDomain: "toy-kids-3d092.firebaseapp.com",
//   projectId: "toy-kids-3d092",
//   storageBucket: "toy-kids-3d092.appspot.com",
//   messagingSenderId: "705913779488",
//   appId: "1:705913779488:web:66c4e93cfcc24734069345"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app