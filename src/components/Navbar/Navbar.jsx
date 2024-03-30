import { Link } from "react-router-dom";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useState } from "react";
const Navbar = ({ changeBg }) => {
  const [light, setLight] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    changeBg(checked);
  };

  const handleLight = () => {
    setLight(!light);
  };
  return (
    <nav className=" flex items-center p-6 gap-3 text-white justify-between dark:bg-slate-700  fixed left-0 top-0 w-full">
      <ul className="flex items-center gap-4 ">
        <li>
          <Link to="/">Tutorials Card</Link>
        </li>
        <li>
          <Link to="/Tutorials">Tutorials</Link>
        </li>
        <li>
          <Link to="/AddTutorial">AddTutorial</Link>
        </li>
      </ul>
      <div
        className="flex cursor-pointer"
     
        onClick={() => {
          changeBg();
          handleLight();
          handleChange();
        }}
      >
        {light ? (
          <MdNightlight className="text-2xl font-bold" />
        ) : (
          <MdLightMode className="text-2xl font-bold" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
