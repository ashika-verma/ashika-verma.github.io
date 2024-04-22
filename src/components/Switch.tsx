import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";

enum ColorScheme {
  light = "light",
  dark = "dark",
}

const BackgroundSwitch = () => {
  const [colorScheme, setColorScheme] = useState(ColorScheme.light);

  const setScheme = (scheme: ColorScheme) => {
    setColorScheme(scheme);
    // document.s
  };

  const toggleTheme = () => {
    if (colorScheme === ColorScheme.dark) {
      setScheme(ColorScheme.light);
    } else {
      setScheme(ColorScheme.dark);
    }
  };

  return (
    <Switch.Root
      checked={colorScheme === ColorScheme.dark}
      onClick={toggleTheme}
      className="w-14 rounded-full border border-slate-700 dark:border-white  p-px shadow-inner shadow-black/50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 duration-300"
    >
      <Switch.Thumb className="data-[state=checked]:translate-x-[32px] data-[state=checked]:bg-white block h-5 w-5 rounded-full bg-slate-700 dark:bg-gray-200 shadow-sm transition duration-300" />
    </Switch.Root>
  );
};

export default BackgroundSwitch;
