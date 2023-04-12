import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contacts from './components/pages/Contacts';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import ErrorPage from './components/pages/ErrorPage';
import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import Projects from './components/pages/Projects';
import Footer from './components/layout/Footer';


function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='contacts' element={<Contacts/>}/>
            <Route path='newproject' element={<NewProject/>}/>
            <Route path='company' element={<Company/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
      </Container>
        <Footer/>
    </Router>
    </>
  )
}



export default App;

/* <Routes>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contatos</Link>
          <Link to="/company">Companhia</Link>
          <Link to="/NewProject">Novo Projeto</Link>
        </div>
        <Route path='/' element={<Contacts/>}/>
      </Routes> 
*/


/*capturar hora
import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleClick}>Atualizar hora</button>
    </div>
  );
}

export default App;



*/