import { ArrowDown } from "../SVGs/ArrowDonw";
import { WaitListButton } from "../../Utilities/WaitListButton";
import DashboardImg from "../../Assets/Images/dashboard.webp";
import { motion } from "framer-motion";

export const Introduce = () => {
  return (
    <section className="flex flex-col gap-10 items-center px-5">
      <div className="flex flex-col gap-10 justify-evenly text-center items-center w-10/12 sm:w-full md:w-5/6 lg:w-5/6 xl:w-4/6">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug font-bold text-transparent bg-gradient-to-br tracking-tight from-zinc-100 to-zinc-500 bg-clip-text"
          initial={{
            opacity: 0.2,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
        >
          Unleash the power of intuitive finance
        </motion.h1>
        <div className="flex flex-col items-center gap-8">
          <motion.p
            className="text-zinc-400 pt-5 px-1 text-2xl"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.5,
            }}
          >
            Say goodbye to the outdated financial tools. Every small business
            owner, regardless of the background, can now manage their business
            like a pro. Simple. Intuitive. And never boring.
          </motion.p>
          <WaitListButton />
          <a
            href="/#intro"
            className="text-zinc-400 flex flex-col justify-center items-center duration-300 gap-1 cursor-pointer hover:gap-2 hover:text-zinc-100 hover:brightness-110"
          >
            <h5>Learn more</h5>
            <ArrowDown />
          </a>
        </div>
      </div>
      <motion.img
        className="rounded-lg ring-1 ring-zinc-800 w-5/6"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition : {
          type: "tween",
          duration: 1,
          delay: 0.5,
          }
        }}
        viewport={{
          once : false,
          amount : 0.1
        }}
        src={DashboardImg}
        alt="Dashboard Imgae"
      />
    </section>
  );
};
