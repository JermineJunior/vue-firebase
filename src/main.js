/* eslint-disable no-unused-vars */
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCNUWBI2zsMoQX-b1gR6kTMnVrlMfbzUCI",

  authDomain: "tasks-fa11b.firebaseapp.com",

  projectId: "tasks-fa11b",

  storageBucket: "tasks-fa11b.appspot.com",

  messagingSenderId: "62380145804",

  appId: "1:62380145804:web:9104bc3a401b9bbd26cfa9",

  measurementId: "G-BW88PR5WD9",
};

// Initialize Firebase

initializeApp(firebaseConfig);

const app = createApp(App);
//const analytics = getAnalytics(app);

app.use(router);

app.mount("#app");
