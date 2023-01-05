import styles from "../styles/Main.module.css";

const Main = (props) => {
  const showGame = (e) => {
    props.showGame(e);
  };

  return (
    <div className={styles.wrapper}>
      <img src="/bg-triangle.svg" className={styles.bg} alt="bg" />
      <div onClick={() => showGame("paper")} className={styles.paper}>
        <img src="/icon-paper.svg" alt="paper" />
      </div>
      <div onClick={() => showGame("rock")} className={styles.rock}>
        <img src="/icon-rock.svg" alt="rock" />
      </div>
      <div onClick={() => showGame("scissors")} className={styles.scissors}>
        <img src="/icon-scissors.svg" alt="scissors" />
      </div>
    </div>
  );
};

export default Main;
