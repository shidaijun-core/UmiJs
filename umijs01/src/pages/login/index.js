
import styles from './index.css';
import router from '@/pages/.umi/router';
export default function() {
  return (
    <div className={styles.normal}>
      <h1>Login</h1>
      <button onClick={()=>{router.goBack()}}>go back</button>
    </div>

  );
}
