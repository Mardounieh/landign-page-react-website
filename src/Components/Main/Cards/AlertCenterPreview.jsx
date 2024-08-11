import { MessageCard } from "./MessageCard";

export const AlertCenterPreview = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center [mask:linear-gradient(transparent,black_60%)] cursor-default">
      <MessageCard
        messageTime="2h ago"
        messageTitle="💳 Monica is requesting a new card"
        messageDetails="Card type: Virtual"
        messageInfo="Spend limit: $500 monthly"
        confirmation="Approve"
        rejection="Decline"
        change="Edit"
      />
      <MessageCard
        messageTime="2h ago"
        messageTitle="📈 Revenue increase alert"
        messageDetails="27% increase in the last 7 days"
        messageInfo="Spend limit: $500 monthly"
        confirmation="Get"
        rejection="Clear"
      />
    </div>
  );
};
