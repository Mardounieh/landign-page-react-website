import { ArrowDown } from "../SVGs/ArrowDonw";
import { WaitListButton } from "../WaitListButton";
import DashboardImg from "../../Assets/Images/dashboard.webp";

export const Introduce = () => {
  return (
    <section className="flex flex-col gap-10 items-center px-5">
      <div className="flex flex-col gap-10 justify-evenly text-center items-center w-10/12 sm:w-full md:w-5/6 lg:w-5/6 xl:w-4/6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug font-bold text-transparent bg-gradient-to-br tracking-tight from-zinc-100 to-zinc-500 bg-clip-text">
          Unleash the power of intuitive finance
        </h1>
        <p className="text-zinc-400 pt-5 px-1 text-2xl">
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>
        <WaitListButton/>
        <a href="/#intro" className="text-zinc-400 flex flex-col justify-center items-center duration-300 gap-1 cursor-pointer hover:gap-2 hover:text-zinc-100 hover:brightness-110">
          <h5>Learn more</h5>
          <ArrowDown/>
        </a>
      </div>
      <img
        className="rounded-lg ring-1 ring-zinc-800 w-5/6"
        src={DashboardImg}
        alt="Dashboard Imgae"
      />
    </section>
  )
}