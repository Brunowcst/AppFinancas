import ProjectForm from "../project/ProjectForm";
import "./NewProject.modules.css"

import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewProject() {
    const navigate = useNavigate();

    function createPost(project) {
        //Inicialização de props vazias
        //project.id = uuidv4(); // gera um novo id único
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate('/projects', {state: {message: `Projeto ${data.name} cadastrado com sucesso!`  }});
        })
        .catch(err => console.log(err));  
    }

    return (
        <div className="cad_projeto">
            <h1>Crie seu projeto</h1>
            <p>Cadastre um projeto para adicionar serviços a ele.</p>
            <ProjectForm handleSubmit={createPost} btnText="Cadastrar projeto"/> 
        </div> 
    );
}

export default NewProject;

//usar useNavigate() invés de useHistory()