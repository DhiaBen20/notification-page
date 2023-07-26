import { GroupJoin, GroupLeave } from "../types";
import Avatar from "./Avatar";
import Notification from "./Notification";
import RelativeTime from "./RelativeTime";
import UnreadCircle from "./UnreadCircle";
import UserName from "./Username";

export default function GroupNotification({
    id,
    actor,
    createdAt,
    group,
    type,
    isRead,
}: GroupJoin | GroupLeave) {
    return (
        <Notification id={id} isRead={isRead}>
            <Avatar url={actor.avatar_url} />

            <div className="text-[.96rem]">
                <div className="text-[hsl(219,12%,42%)]">
                    <UserName username={actor.name} />{" "}
                    {type == "group_join"
                        ? "has joined your group"
                        : "left the group"}
                    &nbsp;
                    <a
                        href="#"
                        className="text-[#0C3E9D] hover:text-[#0a317b] font-[600]"
                    >
                        {group}
                    </a>
                    &nbsp;
                    {!isRead && <UnreadCircle />}
                </div>
                <RelativeTime time={createdAt} />
            </div>
        </Notification>
    );
}
