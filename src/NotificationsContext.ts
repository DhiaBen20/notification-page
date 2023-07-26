import { Dispatch, createContext } from "react";
import { PossibleNotifications } from "./types";
import { NotificationAction } from "./components/NotificationsProvider";

const NotificationsContext = createContext<{
    notifications: PossibleNotifications[];
    unreadCount: number;
    dispatch: Dispatch<NotificationAction>;
} | null>(null);

export default NotificationsContext;
