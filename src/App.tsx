// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Footer from './components/Footer';
// import './styles/App.css';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="loader-container">
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/menu" element={<Menu />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <Router>
      {/* 🔔 Toast container */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#111',
            color: '#fff',
            border: '1px solid #ffcc00',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          },
          success: {
            iconTheme: {
              primary: '#ffcc00',
              secondary: '#000',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4d4f',
              secondary: '#000',
            },
          },
        }}
      />

      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
