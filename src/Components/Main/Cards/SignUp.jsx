import { useContext } from "react"
import { SignUpContext } from "../../../App"
import { Request } from "../../SVGs/Request"
import { Close } from "../../SVGs/Close"
import { SignUpParagraph } from "../SignUpParagraph"
import { Input } from "../Input"

export const SignUp = () => {
  const {signUpState, setSignUpState} = useContext(SignUpContext)
  return (
    <section className="w-[30%] flex flex-col gap-5 items-center fixed mx-auto top-12 z-50 bg-zinc-950 rounded-lg p-5">
      <Close />
      <div className="w-10/12 flex flex-col items-center gap-5 ">
        <Request />
        <SignUpParagraph />
      </div>
      <div className="flex flex-col gap-4 items-center w-full">
        <Input title="Name" placeholder="Enter your name"/>
        <Input title="Email" placeholder="Your email address" />
      </div>
    </section>
  )
}