import React from "react";
import { Link } from "react-router";

function NaveBar() {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-6 bg-blue-300">
        <Link to="/">
          <h1 className="text-[2.5rem] font-semibold">Leader Board</h1>
        </Link>

        <div className="flex gap-10 text-[20px]">
          <Link to="/">Home</Link>
          <Link to="/leader-board/score">Score</Link>
          <Link to="/leader-board/popular-players">Popular Players</Link>
        </div>
      </div>
    </>
  );
}

export default NaveBar;
