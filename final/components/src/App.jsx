import { useState } from 'react';

import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Impact from "./Impact";
import Biography from "./Biography";
import Legacy from './Legacy';
import Gallery from './Gallery';

function App() {
  const [page, setPage] = useState("home"); 

  return (
    <div className="app-container">
      <Header setPage={setPage} />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content">
        {page === 'home' && <Home setPage={setPage}/>}
        {page === 'impact' && <Impact />}
        {page === 'biography' && <Biography />}
        {page === 'legacy' && <Legacy />} 
        {page === 'gallery' && <Gallery />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
