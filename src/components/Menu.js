//importing nescary dependiecs
import React from "react";
import { Link } from "react-router-dom";
//link to game
function Menu() {
  return (
    <div>
      <h1 className="Heading">Minesweeper</h1>
      <h3>Click start to begin the game</h3>
      <Link to="board">
        <button>Start</button>
      </Link>
    </div>
  );
}
//exporting game
export default Menu;
