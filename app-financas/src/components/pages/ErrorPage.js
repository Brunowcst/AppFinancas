import styles from './ErrorPage.module.css'
import ErrorPageSvg from '../../img/page_not_found.svg'

function ErrorPage() {
    return (
        <div className={styles.container}>
            <img className={styles.imageError} src={ErrorPageSvg}/>
        </div>
    );
}

export default ErrorPage;