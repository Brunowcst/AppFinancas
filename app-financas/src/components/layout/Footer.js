import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'
import Container from "./Container";
import styles from "./Footer.modules.css";

function Footer() {
    return (
        <footer>
            <ul className='lista_icons'>
                <li className='item_icon'><FaFacebook/></li>

                <a href="https://www.instagram.com/brwnocp/" target="_blank">
                    <li className='item_icon'><FaInstagram/></li>
                </a>
                <a href="https://github.com/Brunowcst" target="_blank">
                    <li className='item_icon'><FaGithub/></li>
                </a>
            </ul>
            <p className='copyright'><span className='span_costs'>Costs</span> &copy; 2023</p>
        </footer>
    );
}

export default Footer;