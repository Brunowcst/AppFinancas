import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"contacts"}>Contatos</Link>
                <Link to={"/company"}>Companhia</Link>
                <Link to={"/newproject"}>Novo Projeto</Link>
            </div>
        </>
    );
}

export default NavBar;