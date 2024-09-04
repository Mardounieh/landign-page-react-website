import { Copyright } from "./Copyright"

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center border-t border-zinc-700 backdrop-blur-3xl">
      <Copyright />
    </footer>
  )
}