export const LearnMore = () => {
  return (
    <section id="intro" className="flex flex-col items-center pt-32">
      <div className="w-10/12 flex flex-col md:flex-row gap-5 text-zinc-400/90">
        <h2
          className="w-full md:w-5/6 lg:w-3/4 text-left text-2xl sm:text-3xl md:text-5xl leading-snug font-bold text-transparent 
          bg-gradient-to-br tracking-tight from-zinc-100 to-zinc-500 bg-clip-text"
        >
          Who said finance has to be boring?
        </h2>
        <p className="w-full text-left">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and puts the power of advanced financial management right at your
          fingertips.
          <span className="text-zinc-100">
            {" Say no to spreadsheets and tools designed in the 80s."}
          </span>
        </p>
      </div>
    </section>
  );
};
