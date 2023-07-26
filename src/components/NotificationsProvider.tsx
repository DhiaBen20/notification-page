import { ReactNode, useReducer } from "react";
import NotificationsContext from "../NotificationsContext";
import { notifications as data } from "../data";
import { PossibleNotifications } from "../types";

interface ReadAction {
    type: "read_one";
    id: string;
}

interface ReadAllAction {
    type: "read_all";
}

export type NotificationAction = ReadAction | ReadAllAction;

function reducer(
    state: PossibleNotifications[],
    action: NotificationAction
): PossibleNotifications[] {
    if (action.type === "read_one") {
        return state.map((n) => {
            if (n.id == action.id) {
                return { ...n, isRead: true };
            }

            return n;
        });
    }

    if (action.type === "read_all") {
        return state.map((n) => {
            return { ...n, isRead: true };
        });
    }

    return state;
}

export default function NotificationsProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [notifications, dispatch] = useReducer(reducer, data);

    const unreadCount = notifications.reduce((count, notification) => {
        return !notification.isRead ? count + 1 : count;
    }, 0);

    return (
        <NotificationsContext.Provider
            value={{ notifications, unreadCount, dispatch }}
        >
            {children}
        </NotificationsContext.Provider>
    );
}
