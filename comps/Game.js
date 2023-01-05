import { useEffect, useRef, useState } from "react";
import styles from "../styles/Game.module.css";

const Game = (props) => {
  const yourCls = { className: "", src: "/icon-paper.svg" };
  const [house, setHouse] = useState({ className: "", src: "", loaded: false });
  const [showResult, setshowResult] = useState(false);
  const result = useRef(null);
  const [res, setRes] = useState("");

  if (props.pick == "rock") {
    yourCls.className = styles.rock;
    yourCls.src = "/icon-rock.svg";
  } else if (props.pick == "paper") {
    yourCls.className = styles.paper;
    yourCls.src = "/icon-paper.svg";
  } else if (props.pick == "scissors") {
    yourCls.className = styles.scissors;
    yourCls.src = "/icon-scissors.svg";
  }

  const checkForResult = (you, comps) => {
    const resDiv = document.getElementById("incremental");
    if (you === comps) {
      setRes("DRAW");
    } else if (you === "rock" && comps === "paper") {
      setRes("YOU LOSE");
      props.decrement();
    } else if (you === "rock" && comps === "scissors") {
      setRes("YOU WIN");
      props.increment();
    } else if (you === "paper" && comps === "rock") {
      setRes("YOU WIN");
      props.increment();
    } else if (you === "paper" && comps === "scissors") {
      setRes("YOU LOSE");
      props.decrement();
    } else if (you === "scissors" && comps === "paper") {
      setRes("YOU WIN");
      props.increment();
    } else if (you === "scissors" && comps === "rock") {
      setRes("YOU LOSE");
      props.decrement();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const options = ["rock", "paper", "scissors"];
      let shuffled = options
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      const random = Math.floor(Math.random() * shuffled.length);

      if (shuffled[random] == "rock") {
        setHouse({
          className: styles.rock,
          src: "/icon-rock.svg",
          loaded: true,
        });
      } else if (shuffled[random] == "paper") {
        setHouse({
          className: styles.paper,
          src: "/icon-paper.svg",
          loaded: true,
        });
      } else if (shuffled[random] == "scissors") {
        setHouse({
          className: styles.scissors,
          src: "/icon-scissors.svg",
          loaded: true,
        });
      }
      checkForResult(yourCls.src.split("-")[1].split(".")[0], shuffled[random]);
    }, 500);
    setTimeout(() => {
      setshowResult(true);
    }, 300);
  }, []);

  return (
    <div className={styles.wrapper} id="incremental">
      <div className={styles.up}>
        <div className={styles.yourPick}>
          <div className={yourCls.className}>
            <img
              src={yourCls.src}
              alt={yourCls.src.split("-")[1].split(".")[0]}
            />
          </div>
          <p>YOU PICKED</p>
        </div>
        {house.loaded ? (
          <div className={styles.housePick}>
            <div className={house.className}>
              <img
                src={house.src}
                alt={house.src.split("-")[1].split(".")[0]}
              />
            </div>
            <p>THE HOUSE PICKED</p>
          </div>
        ) : (
          <div className={styles.housePick}>
            <div className={styles.empty}></div>
            <p>THE HOUSE PICKED</p>
          </div>
        )}
      </div>

      <div className={styles.result} id={showResult ? "" : "hide2"}>
        <p ref={result}>{res}</p>
        <button onClick={props.goHome}>PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default Game;
