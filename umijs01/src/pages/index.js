import styles from './index.css';
import Link from 'umi/link';
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />

      <a href="https://umijs.org/guide/getting-started.html">
        Getting Started
      </a><br/><br/>
      <Link to={"/user/user"}>进入user页面</Link><br/>
      <Link to={"/login"}>进入login页面</Link><br/>
      <Link to={"/test"}>进入test页面</Link><br/>
    </div>
  );
}
