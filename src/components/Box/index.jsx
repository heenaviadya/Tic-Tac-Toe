import React, { useState, useEffect } from "react";
import "./styles.css";

export const Box = ({ changePlayer, activePlayer, id }) => {
  const [isClicked, setisClicked] = useState(false);
  const [status, setstatus] = useState("");

  const changeHandler = () => {
    if (!isClicked) {
      if (activePlayer == "player1") {
        setstatus("O");
      }
      if (activePlayer == "player2") {
        setstatus("X");
      }
      setisClicked(!isClicked);
      changePlayer(id);
    }
  };

  return (
    <div className="box" onClick={changeHandler}>
      {isClicked && status}
    </div>
  );
};
