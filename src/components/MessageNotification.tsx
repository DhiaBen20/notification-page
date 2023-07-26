import { Message } from "../types";
import Avatar from "./Avatar";
import Notification from "./Notification";
import RelativeTime from "./RelativeTime";
import UnreadCircle from "./UnreadCircle";
import UserName from "./Username";

type MessageNotificationProps = Omit<Message, "type">;

export default function MessageNotification({
    id,
    actor,
    createdAt,
    message,
    isRead,
}: MessageNotificationProps) {
    return (
        <Notification id={id} isRead={isRead}>
            <Avatar url={actor.avatar_url} />
            <div>
                <div className="text-[.96rem]">
                    <div className="text-[hsl(219,12%,42%)]">
                        <UserName username={actor.name} /> sent you a private
                        message
                        {!isRead && <UnreadCircle />}
                    </div>
                    <RelativeTime time={createdAt} />
                </div>
                <div className="border p-4 text-[#5e6778] hover:bg-[#E5EFF9] mt-2">
                    {message}
                </div>
            </div>
        </Notification>
    );
}
