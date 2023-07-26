import { ReactNode } from "react";
import { useNotificationsProvider } from "../hooks";

export default function Notification({
    children,
    isRead,
    id,
}: {
    children: ReactNode;
    isRead: boolean;
    id: string;
}) {
    const { dispatch } = useNotificationsProvider();

    return (
        <div
            className={`flex items-start gap-3 px-3 py-4 rounded-lg ${
                !isRead ? "bg-[#F6FAFD] cursor-pointer" : ""
            }`}
            onClick={() => !isRead && dispatch({ type: "read_one", id })}
        >
            {children}
        </div>
    );
}
