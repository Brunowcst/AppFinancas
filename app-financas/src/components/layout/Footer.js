import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'
import "./Footer.modules.css";

function Footer() {
    return (
        <footer>
            <ul className='lista_icons'>
                <li className='item_icon'><FaFacebook/></li>

                <a href="https://www.instagram.com/brwnocp/" target="_blank" rel="noopener noreferrer">
                    <li className='item_icon'><FaInstagram/></li>
                </a>
                <a href="https://github.com/Brunowcst" target="_blank" rel="noopener noreferrer">
                    <li className='item_icon'><FaGithub/></li>
                </a>
            </ul>
            <p className='copyright'><span className='span_costs'>Costs</span> &copy; 2023</p>
        </footer>
    );
}

export default Footer;