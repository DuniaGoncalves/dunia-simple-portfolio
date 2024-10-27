import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <About />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Portfolio />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
