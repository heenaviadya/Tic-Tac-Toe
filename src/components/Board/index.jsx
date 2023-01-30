import React, { useEffect, useState } from "react";
import { Box } from "../Box";
import "./styles.css";

const Board = () => {
  const [player, setplayer] = useState("player1");
  const [player1, setplayer1] = useState([]);
  const [player2, setplayer2] = useState([]);
  const [winner, setWinner] = useState("");

  const changePlayer = (id) => {
    if (player == "player1") {
      setplayer("player2");
      const newplayer1 = [...player1];
      newplayer1.push(id);
      setplayer1(newplayer1);
    }
    if (player == "player2") {
      setplayer("player1");
      const newplayer2 = [...player2];
      newplayer2.push(id);
      setplayer2(newplayer2);
    }
  };

  const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const checkplayer1 = (superset, set) => {
    let issuperset = false;
    for (let i = 0; i < set.length; i++) {
      let j = 0;

      if (
        superset.includes(set[i][j]) &&
        superset.includes(set[i][j + 1]) &&
        superset.includes(set[i][j + 2])
      ) {
        issuperset = true;
      }
    }
    return issuperset;
  };
  const result1 = checkplayer1(player1, winConditions);

  const checkplayer2 = (superset, set) => {
    let issuperset = false;
    for (let i = 0; i < set.length; i++) {
      let j = 0;

      if (
        superset.includes(set[i][j]) &&
        superset.includes(set[i][j + 1]) &&
        superset.includes(set[i][j + 2])
      ) {
        issuperset = true;
      }
    }
    return issuperset;
  };
  const result2 = checkplayer2(player2, winConditions);
  useEffect(() => {
    if (result1 === true && result2 === false) {
      setWinner("Player 1 is the winner!!!!");
      setplayer(null);
    }
    if (result2 === true && result1 === false) {
      setWinner("Player 2 is the winner!!!! ");
      setplayer(null);
    }
    if (
      result1 === false &&
      result2 === false &&
      player1[4] != null &&
      player2[3] != null
    ) {
      setWinner("Draw! Nobody Won.");
    }
  }, [player1, player2]);

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        <div className="board-row">
          <Box id={1} changePlayer={changePlayer} activePlayer={player} />
          <Box id={2} changePlayer={changePlayer} activePlayer={player} />
          <Box id={3} changePlayer={changePlayer} activePlayer={player} />
        </div>
        <div className="board-row">
          <Box id={4} changePlayer={changePlayer} activePlayer={player} />
          <Box id={5} changePlayer={changePlayer} activePlayer={player} />
          <Box id={6} changePlayer={changePlayer} activePlayer={player} />
        </div>
        <div className="board-row">
          <Box id={7} changePlayer={changePlayer} activePlayer={player} />
          <Box id={8} changePlayer={changePlayer} activePlayer={player} />
          <Box id={9} changePlayer={changePlayer} activePlayer={player} />
        </div>
      </div>

      <div className="winner-text">{winner}</div>
    </>
  );
};

export default Board;
