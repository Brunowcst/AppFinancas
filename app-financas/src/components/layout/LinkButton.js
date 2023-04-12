import { Link } from "react-router-dom";
import "./LinkButton.modules.css";

function LinkButton({text, to}) {
    return (
        <Link className="link_button" to={to}>{text}</Link>
    );
}

export default LinkButton;