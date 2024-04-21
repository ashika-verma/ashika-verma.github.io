import { useEffect, useState } from "react";
import { requestRepoInfo } from "./api/github";

export const Footer = () => {
  const [dateEdited, setDateEdited] = useState("0/0/00");
  useEffect(() => {
    requestRepoInfo().then(setDateEdited);
  }, []);

  return (
    <div className="flex pt-3 justify-between text-[9px] border-slate-400 border-opacity-30 border-t">
      <p>
        roll the dice <button>🎲</button>
      </p>
      <p>last edited: {dateEdited}</p>
    </div>
  );
};
