import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';

import "./Projects.modules.css"
import Message from "../layout/Message";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Input from '../form/Input';

function Projects() {
    const [projetos, setProjetos] = useState([]);
    const [search, setSearch] = useState("");

    const project = projetos.filter((p) =>
     p.name.toLowerCase().includes(search.toLowerCase()))// pode adicionar uma condicao de 'ou' e filtrar tbm pela categoria.

    function handleChange(e) {
        setSearch(e.target.value);
    }

    //puxar projetos da api
    useEffect(() => {
        fetch('http://localhost:5000/projects', {
        method:"GET",
        headers:{'Content-Type': 'application/json'}
        }).then((resp)=> resp.json())
        .then((data) => setProjetos(data))
        .catch(err => console.log(err));
    }, []);

    //trazer a mensagem do useNavigate
    const location = useLocation();
    let message = '';
    if(location.state)  {
        message = location.state.message
    }
 
    return (
        <section className="project_container">
            <div className="tittle_container">
                <h1>Projetos</h1>
                <Input type="search" 
                name="name" 
                placeholder="Procure por um projeto..."
                handleOnChange={handleChange}
                value={search}/>  

                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}

            <div id="bbr">
                {project.length > 0 ? (
                    <div className="bbr">
                        {project.map((e) => (
                            <ProjectCard key={e.id}
                            name={e.name}
                            budget= {Number(e.budget).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            category={e.category.name}/>
                    ))}
                    </div>
                    ): (<p>Nenhum projeto encontrado!</p>)}
            </div>
        </section>
    );
}

export default Projects;




