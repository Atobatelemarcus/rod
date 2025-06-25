import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeGd0PvtisfgW1NkvViJ7EKOC7NR6WsRc",
  authDomain: "studentportal-7f849.firebaseapp.com",
  databaseURL: "https://studentportal-7f849-default-rtdb.firebaseio.com",
  projectId: "studentportal-7f849",
  storageBucket: "studentportal-7f849.firebasestorage.app",
  messagingSenderId: "569439875798",
  appId: "1:569439875798:web:9383591791c73b9d048f77",
  measurementId: "G-9XFRTT1ZBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db,analytics};
