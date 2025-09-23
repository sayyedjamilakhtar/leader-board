import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onInc } from "../../store/action";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function index() {
  const players = useSelector((state) => state.players);

  return (
    <>
      {players.map((player) => {
        return (
          <>
            <h4>{player.playerName}</h4>
            <h4>{player.playerScore}</h4>
          </>
        );
      })}
    </>
  );
}

export default index;
