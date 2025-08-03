import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AddCard from "./pages/AddCard";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300 text-gray-800">
      <Navbar />
      <main className="flex-1 p-6">
      <div className="p-6">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
