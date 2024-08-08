import hand from "../../Assets/Images/hand.webp";
import mobile from "../../Assets/Images/mobile-app.svg";

export const MobileApp = () => {
  return (
    <div className="absolute w-full h-full top-0 right-0 flex flex-col justify-center items-center">
      <img className="scale-125 md:scale-90 lg:scale-125" src={mobile} alt="Mobile image"/>
      <img className="w-2/6 absolute brightness-200 bottom-[35%] md:bottom-[40%]  right-5 [mask:linear-gradient(black_40%,transparent)]" src={hand} alt="Hand" />
    </div>
  );
};
