// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrOslLxQGV_xBTWYgKcqvQbOwe1daWg2E",
  authDomain: "henry-shipping-delivery-team.firebaseapp.com",
  projectId: "henry-shipping-delivery-team",
  storageBucket: "henry-shipping-delivery-team.firebasestorage.app",
  messagingSenderId: "273718178411",
  appId: "1:273718178411:web:6d518fb7f9fe04f359b72e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make Firestore available to other files
export { db };
