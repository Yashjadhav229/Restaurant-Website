
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDVsLTO00eqWOIm6oz8BW-ryuT2_8JlSo0",
  authDomain: "resto-a28ae.firebaseapp.com",
  projectId: "resto-a28ae",
  storageBucket: "resto-a28ae.firebasestorage.app",
  messagingSenderId: "858882268645",
  appId: "1:858882268645:web:4b7c9fb7919bcf873ea30c",
  measurementId: "G-1E3JY3F51L"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const form = document.getElementById("orderForm");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const food = document.getElementById("food").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "orders"), {
      name,
      email,
      food,
      message,
      timestamp: new Date()
    });

    alert("Order submitted successfully!");
    form.reset();
  } catch (err) {
    console.error(err);
    alert("Failed to submit order.");
  }
});
