import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { onPlayerFormSubmit } from "../../store/action";

function index() {
  const dispatch = useDispatch();

  const [playerName, setPlayerName] = useState("");
  const [playerScore, setPlayerScore] = useState("");

  const playerData = { playerName, playerScore };

  const handleChange = (e) => {
    if (e.target.id == "playerName") {
      setPlayerName(e.target.value);
    } else if (e.target.id == "playerScore") {
      setPlayerScore(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onPlayerFormSubmit(playerData));
  };

  return (
    <div className="h-[95vh] bg-blue-100 flex flex-col gap-10 justify-center items-center text-center">
      <h1 className="text-[3rem]">Player Form</h1>

      <div className="w-150">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <TextField
            id="playerName"
            label="Player Name"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="playerScore"
            label="Player Score"
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            className="h-15"
          >
            Submit
          </Button>
        </form>

        <div>
          <h2>{playerName}</h2>
          <h2>{playerScore}</h2>
        </div>
      </div>
    </div>
  );
}

export default index;
