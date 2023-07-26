export interface User {
    name: string;
    avatar_url: string;
}

interface Notification {
    id: string;
    createdAt: number;
    isRead: boolean;
}

export interface Reaction extends Notification {
    type: "reaction";
    post: string;
    actor: User;
}

export interface Follow extends Notification {
    type: "follow";
    actor: User;
}

export interface GroupJoin extends Notification {
    type: "group_join";
    group: string;
    actor: User;
}

export interface GroupLeave extends Notification {
    type: "group_leave";
    group: string;
    actor: User;
}

export interface Comment extends Notification {
    type: "comment";
    picture_url: string;
    actor: User;
}

export interface Message extends Notification {
    type: "message";
    message: string;
    actor: User;
}

export type PossibleNotifications =
    | Reaction
    | Follow
    | GroupJoin
    | GroupLeave
    | Comment
    | Message;
