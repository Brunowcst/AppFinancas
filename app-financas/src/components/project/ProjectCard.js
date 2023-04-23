import styles from "./ProjectCard.module.css";
import {BsPencil, BsFillTrashFill} from 'react-icons/bs';

function ProjectCard({name, budget, id, category, handleRemove}) {
    return (
        <div className={styles.project_card}>
            <h4 className={styles.card_title}>{name}</h4>
            <div className={styles.card_cost}> <span>Custo:</span> R$ {budget}</div>
            <div className={styles.card_category}><span className={`${styles.category_highlighter} ${styles[category.toLowerCase()]}`}></span> {category}</div>
            <div className={styles.container_icons}>
                <BsPencil className={styles.icon}/>
                <BsFillTrashFill className={styles.icon}/>
            </div>
        </div>
    );
}

export default ProjectCard;