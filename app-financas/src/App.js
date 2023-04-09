import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Contacts from './components/pages/Contacts';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import ErrorPage from './components/pages/ErrorPage';
import NavBar from './components/NavBar';

import './app.css';

function App() {

  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='newproject' element={<NewProject/>}/>
          <Route path='company' element={<Company/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <p>footer</p>
    </Router>
  </>
  );
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
