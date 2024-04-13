import { useState } from 'react';

import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import CardsPage from "./CardsPage";
import MainArea from './MainArea';

function App() {
  const [page, setPage] = useState("home"); 

  return (
    <>
      <Header setPage={setPage}/>
      {page === 'home' && <Home/>}
      {page === 'about' && <About/>}
      {page === 'cats' && <CardsPage setPage={setPage} />}
      <MainArea/>
      <Footer/>
    </>
  );
}

export default App;
