import axios from "axios";
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
    default: selector({
        key: 'notificationsAtom/default',
        get: async () => {
            // await new Promise(r => setTimeout(r, 5000))
            const response = await axios.get(
                "https://sum-server.100xdevs.com/notifications"
            );
            return response.data;
        }
    })
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0,
});

// export const totalNotifications = selector({
//     key: "totalNotifications",
//     get: ({ get }) => {
//         const networksCnt = get(networkAtom);
//         const jobsCnt = get(jobsAtom);
//         const notificationsCnt = get(notificationsAtom);
//         const messsagesCnt = get(messagingAtom);

//         return networksCnt + jobsCnt + notificationsCnt.notifications + messsagesCnt;
//     }
// })

export const totalNotificationsSelector = selector({
    key: "totalNotificationsSelector",
    get: ({ get }) => {
        const totalNotification = get(notificationsAtom);
        return totalNotification.messaging + totalNotification.notifications + totalNotification.jobs + totalNotification.network
    }
})
