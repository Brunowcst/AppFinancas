import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';

import "./Project.module.css"
import Message from "../layout/Message";

function Projects() {
    // const [projetos, setProjetos] = useState([]);
    const location = useLocation();
    let message = '';
    if(location.state)  {
        message = location.state.message
    }
 
    return (
        <div>
            <h1>Projetos</h1>
            {message && <Message type="success" msg={message}/>}
        </div>
    );
}

export default Projects;

// useEffect(() => {
//     fetch('http://localhost:5000/projects', {
//     method:"GET",
//     headers:{'Content-Type': 'application/json'}
//     }).then((resp)=> resp.json())
//     .then((data) => setTest(projetos))
//     .catch(err => console.log(err));
// }, []);


// {teste.length > 0 ? (
//     <div>
//         {teste.map((e) => (
//             <div className="cards-projetos">Nome: {e.name} <br></br>
//             Custo: R$ {e.budget}  <br></br>
//             Categoria: {e.category.name} <br></br>
//             <br></br>
//             </div>
//         ))}
//     </div>
//     ): (<p>Nenhum projeto cadastrado!</p>)}