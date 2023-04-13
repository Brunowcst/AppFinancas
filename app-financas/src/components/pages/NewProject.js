import ProjectForm from "../project/ProjectForm";
import "./NewProject.modules.css"

function NewProject() {
    return (
        <div className="cad_projeto">
            <h1>Crie seu projeto</h1>
            <p>Cadastre um projeto para adicionar serviços a ele.</p>
            <ProjectForm btnText="Cadastrar projeto"/> 
        </div> 
    );
}

export default NewProject;