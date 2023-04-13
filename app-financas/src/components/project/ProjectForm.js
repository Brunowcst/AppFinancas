import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import "./ProjectForm.modules.css";

function ProjectForm({btnText}) {
    return (
        <form className="form_projeto">
            <Input type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Digite o nome do projeto"/>

            <Input type="number" 
            text="Custos" 
            name="budget" 
            placeholder="Informe o custo do projeto"/>

            <Select name="category_id" text="Informe a categoria"/>

            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;