//import styles from "./Home.modules.css";
import "./Home.modules.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
    return (
        <section className="section_home">
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Gerencie agora seus projetos de maneira ágil e fácil!</p>
            <LinkButton to="newproject" text="Criar Projeto"/>
            <img className="img_savings" src={savings} alt="imagem savings"/>
        </section>
    )
}

export default Home;