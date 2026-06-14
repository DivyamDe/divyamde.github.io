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

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {

    signInWithPopup(auth, provider)
    .then((result) => {

        const user = result.user;

        userInfo.style.display = "block";

        userPhoto.src = user.photoURL;

        userName.textContent =
            "Welcome " + user.displayName;

        loginBtn.style.display = "none";

    })
    .catch((error) => {

        console.log(error);

    });

});

onAuthStateChanged(auth, (user) => {

    if (user) {

        userInfo.style.display = "block";

        userPhoto.src = user.photoURL;

        userName.textContent =
            "Welcome " + user.displayName;

        loginBtn.style.display = "none";

    }

});

logoutBtn.addEventListener("click", () => {

    signOut(auth);

    userInfo.style.display = "none";

    loginBtn.style.display = "inline-block";

});