import styles from "../styles/Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src="/logo.svg" className={styles.img} alt="logo" />
      <div className={styles.scoreDiv}>
        <p className={styles.title}>SCORE</p>
        <p className={styles.score}>{props.score}</p>
      </div>
    </div>
  );
};

export default Header;
