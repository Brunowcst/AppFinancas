import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Loading from '../layout/Loading';
import Container from '../layout/Container'
import styles from './Project.module.css'

function Project(props) {
    const {id} = useParams();
    const [project, setProject] = useState([]);
    const[removeLoading, setRemoveLoading] = useState(false)
    const[showProject, setShowProject] = useState(false)
    // console.log(id)

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
        method:"GET",
        headers:{'Content-Type': 'application/json'}
        }).then((resp)=> resp.json())
        .then((data) => { 
            setProject(data)
            setRemoveLoading(true)
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        });
    }, [id]);

    function toggleProjectForm() {
        setShowProject(!showProject)
    }

    return (
        <>
        {project.name ? (
            <div className={styles.mainContainer}>
                <Container customClass="column">
                    <h2>Projeto: {project.name}</h2>
                    <button onClick={toggleProjectForm}>{!showProject ? 'Editar Projeto' : 'Fechar'}</button>
                    {!showProject ?
                    (<div className={styles.projectsInformations}>
                        <p>
                            <span>Categoria: </span>
                            {project.category.name}
                        </p>
                        <p>
                            <span>Orçamento Total: </span>
                            R$ {Number(project.budget).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <p>
                            <span>Total utilizado: </span>
                            R$ {Number(project.cost).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                    </div>
                    ) : ("")}
                </Container>
            </div>
        ) : (<Loading/>)}
        </>
    );
}

export default Project;