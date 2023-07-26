import { Follow } from "../types";
import Avatar from "./Avatar";
import Notification from "./Notification";
import RelativeTime from "./RelativeTime";
import UnreadCircle from "./UnreadCircle";
import UserName from "./Username";

type FollowNotificationProps = Omit<Follow, "type">;

export default function FollowNotification({
    id,
    actor,
    createdAt,
    isRead,
}: FollowNotificationProps) {
    return (
        <Notification id={id} isRead={isRead}>
            <Avatar url={actor.avatar_url}></Avatar>

            <div className="text-[.96rem]">
                <div className="text-[hsl(219,12%,42%)]">
                    <UserName username={actor.name} /> followed you{" "}
                    {!isRead && <UnreadCircle />}
                </div>
                <RelativeTime time={createdAt} />
            </div>
        </Notification>
    );
}
