import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJEeHR5_vxFSEpOBYgmYPKu7b8raJDP7I",
  authDomain: "divyam-portfillo.firebaseapp.com",
  projectId: "divyam-portfillo",
  storageBucket: "divyam-portfillo.firebasestorage.app",
  messagingSenderId: "954935874419",
  appId: "1:954935874419:web:7054cc9040a8b9aab86b06",
  measurementId: "G-R0MLG75HSZ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const userInfo = document.getElementById("user-info");

const userPhoto = document.getElementById("user-photo");

const userName = document.getElementById("user-name");

const logoutBtn = document.getElementById("logout-btn");

onAuthStateChanged(auth, (user) => {

    if (user) {

        userInfo.style.display = "block";

        userPhoto.src = user.photoURL;

        userName.textContent =
            "Welcome " + user.displayName;

    } else {

        signInWithPopup(auth, provider)
        .catch((error) => {

            console.log(error);

        });

    }

});

logoutBtn.addEventListener("click", () => {

    signOut(auth);

});