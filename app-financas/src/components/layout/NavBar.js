import { Link } from "react-router-dom";
import "./NavBar.modules.css"
import logo from "../../img/costs_logo.png";

function NavBar() {
    return (
        <header className="header">
            <nav className="navbar">
                    <div>
                        <Link to={"/"}><img className="img_logo" src={logo} alt="logo costs"></img></Link>
                    </div>
                    <ul className="lista_links">
                        <li>
                            <Link id="link_gold" className="nav_link" to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to={"/projects"}>Projetos</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to={"/contacts"}>Contatos</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to={"/company"}>Empresa</Link>
                        </li>
                    </ul>
            </nav>
        </header>
    );
}

export default NavBar;