import styles from "./ProjectCard.module.css";
import {Link} from 'react-router-dom'
import {useState} from 'react';
import {BsPencil, BsFillTrashFill} from 'react-icons/bs';
import Modal from 'react-modal';

function ProjectCard({name, budget, id, category, handleRemove}) {
    const [showModal, setShowModal] = useState(false);

    // const remove = (e) => {
    //     e.preventDefault();
    //     handleRemove(id);
    // } chamaria <BsFillTrashFill onClick={openModal} className={styles.icon}/> se não tivesse o modal

    //set o estado do modal
    function openModal() {
        setShowModal(true);
      }

    return (
        <div className={styles.project_card}>
            <h4 className={styles.card_title}>{name}</h4>
            <div className={styles.card_cost}> <span>Custo:</span> R${budget}</div>
            <div className={styles.card_category}><span className={`${styles.category_highlighter} ${styles[category.toLowerCase()]}`}></span> {category}</div>
            <div className={styles.container_icons}>
                <Link to={`/project/${id}`}>
                    <BsPencil className={styles.icon}/>
                </Link>
                <BsFillTrashFill onClick={openModal} className={styles.icon}/>
            </div>

            <Modal isOpen={showModal}
                className={styles.custom_modal}
                overlayClassName={styles.custom_overlay}>
                    <div className={styles.modal_container}>
                        <h3>Tem certeza que deseja excluir o projeto?</h3>
                        <div className={styles.container_buttons}>
                            <button className={styles.buttons_modal} onClick={() => setShowModal(false)}>Cancelar</button>
                            <button className={styles.buttons_modal} onClick={(e) => {
                                e.preventDefault();
                                handleRemove(id);
                                setShowModal(false);
                            }}>Excluir</button>
                        </div>
                    </div>
            </Modal>
        </div>
    );
}

export default ProjectCard;