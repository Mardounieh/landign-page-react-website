import keyboard from "../../../Assets/Images/keyboard.webp"
import keys from "../../../Assets/Images/keys.webp"

export const OptionsBg = () => {
  return (
    <div className="relative px-4 py-6">
      <img className="absolute" src={keyboard} alt="Keyboard" />
      <img className="absolute" src={keys} alt="Keys" />
    </div>
  )
}