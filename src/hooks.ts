import { useContext } from "react";
import NotificationsContext from "./NotificationsContext";

export function useNotificationsProvider() {
    const value = useContext(NotificationsContext);

    if (!value) {
        throw new Error(
            "`useNotificationsProvider` can be called only inside `NotificationsProvider`"
        );
    }

    return value;
}
