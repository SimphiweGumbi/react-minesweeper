//importing the nescary dependiecs
import React from "react";
import { Link } from "react-router-dom";
// cratin an alert and creating a link
function Heading() {
  const handleClick = () => {
    alert(
      "click on the numbers to win the game try by all means to avoid the bombs if you click on all numbers you win and if click on the bomb you lose"
    );
  };
  //returning buttons with on click function
  return (
    <div>
      <button onClick={handleClick}>Rules</button>

      <Link to="/">
        <button>Exit</button>
      </Link>
      <button onClick={() => window.location.reload()}>Restart</button>
    </div>
  );
}
//exporting component
export default Heading;
