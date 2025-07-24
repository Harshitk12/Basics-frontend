import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "test-c144f.firebaseapp.com",
  projectId: "test-c144f",
  storageBucket: "test-c144f.firebasestorage.app",
  messagingSenderId: "872695177145",
  appId: "1:872695177145:web:e0c03cc69c70bc5c56e068"
};

export const app = initializeApp(firebaseConfig);