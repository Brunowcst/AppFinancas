import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'
import Container from "./Container";
import styles from "./Footer.modules.css"

function Footer() {
    return (
        <footer>
            <ul className='lista_icons'>
                <li className='item_icon'><FaFacebook/></li>
                <li className='item_icon'><FaInstagram/></li>
                <li className='item_icon'><FaGithub/></li>
            </ul>
            <p className='copyright'><span className='span_costs'>Costs</span> &copy; 2023</p>
        </footer>
    );
}

export default Footer;