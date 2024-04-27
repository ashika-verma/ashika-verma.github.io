import { useEffect, useState } from "react";
import { requestRepoInfo } from "./api/github";
import { generateRandomColor, setFunColors } from "./util";

const emojiList = [`🤏`, `🍕`, `🌯`, `🥭`, `🍪`, `🌮`];

export const Footer = () => {
  const [dateEdited, setDateEdited] = useState("0/0/00");
  const [diceRolls, setDiceRolls] = useState(0);

  function rollTheDice() {
    const filledArray = [...new Array(5)].map(() => generateRandomColor());
    setFunColors(
      filledArray[0],
      filledArray[1],
      filledArray[2],
      filledArray[3],
      filledArray[4]
    );
    if (diceRolls > 4) {
      const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
      document.body.style[
        "cursor"
      ] = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='50' height='50' viewport='0 0 50 50' style='fill:black;font-size:24px;'><text y='50%'>${emoji}</text></svg>")
  16 0,
auto`;
    }
    setDiceRolls((prev) => prev + 1);
  }

  useEffect(() => {
    requestRepoInfo().then(setDateEdited);
  }, []);

  return (
    <div className="flex pt-3 justify-between text-[9px] border-slate-400 border-opacity-30 border-t">
      <p>
        roll the dice{" "}
        <button className="hover:animate-spin" onClick={rollTheDice}>
          🎲
        </button>
      </p>
      <p>last edited: {dateEdited}</p>
    </div>
  );
};
