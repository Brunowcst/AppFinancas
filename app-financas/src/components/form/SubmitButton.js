import "./SubmitButton.modules.css";

function Submit({text}) {
    return (
        <div>
            <button className="botao_enviar">{text}</button>
        </div>
    );
}

export default Submit;