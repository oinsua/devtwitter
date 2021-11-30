import Link from 'next/Link'
import styles from  '../../styles/TimeLine.module.css'

export default function TimeLine({userName = 'Ossany'}){
    return(
    <>
        <h1 className={styles.timeLine} >
            <Link href="/">Time Line ⏲️</Link>
        </h1>
        <span>Text of examples {userName}</span>
    </>
    );
};

TimeLine.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
             .then(res => res.json())  
             .then(json => json)
             .catch(err => console.log(err));
}