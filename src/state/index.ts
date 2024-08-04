import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 12,
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0,
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 102,
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0,
});

export const totalNotifications = selector({
    key: "totalNotifications",
    get: ({ get }) => {
        const networksCnt = get(networkAtom);
        const jobsCnt = get(jobsAtom);
        const notificationsCnt = get(notificationsAtom);
        const messsagesCnt = get(messagingAtom);

        return networksCnt + jobsCnt + notificationsCnt + messsagesCnt;
    }
}) 
