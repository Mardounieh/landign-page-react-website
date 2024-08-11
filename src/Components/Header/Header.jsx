import { Link } from "react-router-dom";
import { Logo } from "../SVGs/Logo";
import { WaitListButton } from "../../Utilities/WaitListButton";
import { Squares } from "../SVGs/Squares";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full sm:w-[90%]  min-h-16 pt-4 px-2">
      <Squares />
      <Logo />
      <div className="flex justify-end items-center gap-5 sm:w-[35%]">
        <Link to={"/blog"} className="text-slate-300 cursor-pointer hover:text-zinc-100 duration-200">
          Blog
        </Link>
        <WaitListButton/>
      </div>
    </header>
  );
};
