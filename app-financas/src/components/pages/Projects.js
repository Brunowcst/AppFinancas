import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';

import "./Projects.modules.css"
import Message from "../layout/Message";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Input from '../form/Input';
import Loading from '../layout/Loading';

function Projects() {
    const [projetos, setProjetos] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
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
        .then((data) => { 
            setProjetos(data)
            setRemoveLoading(true)
        })
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
                {project.length > 0 &&
                    <div className="card_container">
                        {project.map((e) => (
                            <ProjectCard key={e.id}
                            name={e.name}
                            budget= {Number(e.budget).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            category={e.category.name}/>
                    ))}
                    </div>
                }
                {!removeLoading && <Loading/>}
                {removeLoading && project.length === 0 && (
                    <div>
                    <p className="msg_erro_project">Nenhum projeto encontrado!</p> <p className="msg_erro_project">Verifique as infomações passadas ou se o projeto está cadastrado. </p>
                </div>
                )} 
            </div>
        </section>
    );
}

export default Projects;




