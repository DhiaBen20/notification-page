import CommentNotification from "./components/CommentNotification";
import FollowNotification from "./components/FollowNotification";
import GroupNotification from "./components/GroupNotification";
import MessageNotification from "./components/MessageNotification";
import ReactionNotification from "./components/ReactionNotification";
import { useNotificationsProvider } from "./hooks";

function App() {
    const { notifications, unreadCount, dispatch } = useNotificationsProvider();

    return (
        <div className="md:max-w-4xl shadow-slate-200 shadow-xl rounded-lg bg-white mx-auto md:my-20">
            <header className="flex items-center justify-between px-3 md:px-6">
                <h2 className="font-bold text-lg flex items-center gap-4 my-6 tracking-tight">
                    Notifications{" "}
                    <span className="rounded-lg bg-[#0A317E] text-white w-8 h-6 py-2 inline-flex items-center justify-center">
                        {unreadCount}
                    </span>
                </h2>

                <button
                    className="text-[hsl(219,12%,42%)] hover:text-[#0C3E9D] text-sm"
                    onClick={() => dispatch({ type: "read_all" })}
                >
                    Mark all as read
                </button>
            </header>

            <main className="space-y-3 px-3 md:px-6">
                {notifications.map((n) => {
                    switch (n.type) {
                        case "reaction":
                            return <ReactionNotification key={n.id} {...n} />;
                        case "follow":
                            return <FollowNotification key={n.id} {...n} />;
                        case "group_join":
                            return <GroupNotification key={n.id} {...n} />;
                        case "group_leave":
                            return <GroupNotification key={n.id} {...n} />;
                        case "message":
                            return <MessageNotification key={n.id} {...n} />;
                        case "comment":
                            return <CommentNotification key={n.id} {...n} />;
                    }
                })}
            </main>
        </div>
    );
}
export default App;
