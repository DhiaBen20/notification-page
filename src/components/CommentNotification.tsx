import { Comment } from "../types";
import Avatar from "./Avatar";
import Notification from "./Notification";
import RelativeTime from "./RelativeTime";
import UnreadCircle from "./UnreadCircle";
import UserName from "./Username";

export default function CommentNotification({
    id,
    actor,
    createdAt,
    picture_url,
    isRead,
}: Omit<Comment, "type">) {
    return (
        <Notification id={id} isRead={isRead}>
            <Avatar url={actor.avatar_url} />
            <div className="text-[.96rem] flex-1">
                <div className="text-[hsl(219,12%,42%)]">
                    <UserName username={actor.name} /> dasadsa dsa dsa dsa da
                    {!isRead && <UnreadCircle />}
                </div>
                <RelativeTime time={createdAt} />
            </div>
            <img
                src={picture_url}
                alt=""
                className="w-10 h-10 shrink-0 rounded-md hover:ring-4 ring-[hsl(210,60%,98%)]"
            />
        </Notification>
    );
}
