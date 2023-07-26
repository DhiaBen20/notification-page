import { PossibleNotifications } from "./types";

import avatarUrl1 from "./assets/avatar-mark-webber.webp";
import avatarUrl2 from "./assets/avatar-angela-gray.webp";
import avatarUrl3 from "./assets/avatar-jacob-thompson.webp";
import avatarUrl4 from "./assets/avatar-rizky-hasanuddin.webp";
import avatarUrl5 from "./assets/avatar-kimberly-smith.webp";
import avatarUrl6 from "./assets/avatar-nathan-peterson.webp";
import avatarUrl7 from "./assets/avatar-anna-kim.webp";

import pictureUrl from "./assets/image-chess.webp";

function id() {
    return crypto.randomUUID() as string;
}

export const notifications: PossibleNotifications[] = [
    {
        id: id(),
        isRead: false,
        type: "reaction",
        actor: {
            avatar_url: avatarUrl1,
            name: "Mark Webber",
        },
        createdAt: Date.now() - 1000 * 60 * 1,
        post: "My first tournament today!",
    },
    {
        id: id(),
        type: "follow",
        isRead: false,
        actor: {
            avatar_url: avatarUrl2,
            name: "Angela Gray",
        },
        createdAt: Date.now() - 1000 * 60 * 5,
    },
    {
        id: id(),
        type: "group_join",
        isRead: false,
        group: "Chess Club",
        actor: {
            avatar_url: avatarUrl3,
            name: "Jacob Thompson",
        },
        createdAt: Date.now() - 1000 * 60 * 60 * 24,
    },
    {
        id: id(),
        type: "message",
        isRead: true,

        message:
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        actor: {
            avatar_url: avatarUrl4,
            name: "Rizky Hasanuddin",
        },
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
    },
    {
        id: id(),
        type: "comment",
        isRead: true,
        picture_url: pictureUrl,
        actor: {
            avatar_url: avatarUrl5,
            name: "Kimberly Smith",
        },
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7,
    },
    {
        id: id(),
        type: "reaction",
        isRead: true,
        actor: {
            avatar_url: avatarUrl6,
            name: "Nathan Peterson",
        },
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 14,
        post: "5 end-game strategies to increase your win rate",
    },
    {
        id: id(),
        type: "group_leave",
        isRead: true,
        group: "Chess Club",
        actor: {
            avatar_url: avatarUrl7,
            name: "Anna Kim",
        },
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 14,
    },
];
