import { Reaction } from "../types";
import Avatar from "./Avatar";
import Notification from "./Notification";
import RelativeTime from "./RelativeTime";
import UnreadCircle from "./UnreadCircle";
import UserName from "./Username";

type ReactionNotificationProps = Omit<Reaction, "type">;

export default function ReactionNotification({
    id,
    actor,
    createdAt,
    post,
    isRead,
}: ReactionNotificationProps) {
    return (
        <Notification id={id} isRead={isRead}>
            <Avatar url={actor.avatar_url} />

            <div className="text-[.96rem]">
                <div className="text-[hsl(219,12%,42%)]">
                    <UserName username={actor.name} /> reacted to your recent
                    post{" "}
                    <span className="font-[600] hover:text-[#0a317b]">
                        {post}
                    </span>
                    &nbsp;
                    {!isRead && <UnreadCircle />}
                </div>
                <RelativeTime time={createdAt} />
            </div>
        </Notification>
    );
}
