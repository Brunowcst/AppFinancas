import ProjectForm from "../project/ProjectForm";
import "./NewProject.modules.css"

import {useNavigate} from 'react-router-dom';

function NewProject() {
    const navigate = useNavigate();

    function createPost(project) {
        //Inicialização de props vazias
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
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

//usar useNavigae() invés de useHistory()