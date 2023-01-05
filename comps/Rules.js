import { useRef } from "react";
import styles from "../styles/Rules.module.css";

const Rules = (props) => {
  const wrapper = useRef(null);

  return (
    <div ref={wrapper} className={styles.wrapper}>
      <p className={styles.title}>RULES</p>
      <img src="/image-rules.svg" alt="rules" className={styles.rules} />
      <img
        src="/icon-close.svg"
        alt="close"
        onClick={() => {
          wrapper.current.id = "hide";
          props.hide(false);
        }}
        className={styles.close}
      />
    </div>
  );
};

export default Rules;
