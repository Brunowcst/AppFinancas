import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';

import styles from "./Projects.modules.css"
import Message from "../layout/Message";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

function Projects() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
        method:"GET",
        headers:{'Content-Type': 'application/json'}
        }).then((resp)=> resp.json())
        .then((data) => setProjetos(data))
        .catch(err => console.log(err));
    }, []);

    const location = useLocation();
    let message = '';
    if(location.state)  {
        message = location.state.message
    }
 
    return (
        <section className="project_container">
            <div className="tittle_container">
                <h1>Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}

            <div id="bbr">
                {projetos.length > 0 ? (
                    <div className="bbr">
                        {projetos.map((e) => (
                            <ProjectCard key={e.id}
                            name={e.name}
                            budget= {Number(e.budget).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            category={e.category.name}/>
                    ))}
                    </div>
                    ): (<p>Nenhum projeto cadastrado!</p>)}
            </div>
        </section>
    );
}

export default Projects;




