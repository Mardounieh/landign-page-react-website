export const GeniusIntro = () => {
  return (
    <div className="flex flex-col lg:w-4/6 xl:w-2/4 text-left gap-2 text-zinc-400/90 mt-24">
      <h2
        className="text-2xl sm:text-3xl md:text-5xl leading-snug font-bold text-transparent 
          bg-gradient-to-br tracking-tight from-zinc-100 to-zinc-500 bg-clip-text"
      >
        Meet Genius
      </h2>
      <p className="text-lg">
      Our AI-driven assistant is designed to decode complex financial figures and{" "}
        <span className="text-zinc-100">illuminate key trends</span> in your business.
      </p>
    </div>
  )
}