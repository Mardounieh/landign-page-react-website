import { MessageCard1 } from "./MessageCard1";
import { MessageCard2 } from "./MessageCard2";

export const AlertCenterPreview = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center [mask:linear-gradient(transparent,black_60%)] cursor-default">
      <MessageCard1 />
      <MessageCard2 />
    </div>
  );
};
