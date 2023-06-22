import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from '../components/pages/Contacts';
import Home from '../components/pages/Home';
import Company from '../components/pages/Company';
import NewProject from '../components/pages/NewProject';
import ErrorPage from '../components/pages/ErrorPage';
import NavBar from '../components/layout/NavBar';
import Container from '../components/layout/Container';
import Projects from '../components/pages/Projects';
import Project from '../components/pages/Project';
import Footer from '../components/layout/Footer';


function CustomRoutes() {

  return (
    <Router>
        <NavBar/>
        <Container customClass="min-height">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/newproject' element={<NewProject/>}/>
                <Route path='/company' element={<Company/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/project/:id' element={<Project/>}/>

                {/* Rota para urls inexistentes */}
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </Container>
        <Footer/>
    </Router>
  )
}


export default CustomRoutes;