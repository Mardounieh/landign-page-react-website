import { useContext } from "react";
import { SignUpContext } from "../App";
export const WaitListButton = () => {
  const {setSignUpState} = useContext(SignUpContext)
  return (
    <button onClick={()=> setSignUpState(false)} className="w-fit bg-black ring-1 ring-white/20 rounded-full px-4 py-1.5 text-zinc-300 cursor-pointer
      hover:text-zinc-100 duration-300 shadow-[0_12px_5px_-10px_cyan] hover:shadow-[0_0_15px_2px_rgb(0,80,120)]
    ">
      Join the waitlist
    </button>
  );
};
