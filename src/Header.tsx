import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  notificationsAtom,
  messagingAtom,
  // networkAtom,
  // jobsAtom,
  // totalNotifications,
  totalNotificationsSelector,
} from "./state";

const Header = () => {
  const { notifications, messaging, jobs, network } =
    useRecoilValue(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);
  const setMessagingCount = useSetRecoilState(messagingAtom);
  // const NetworkCount = useRecoilValue(networkAtom);
  // const JobsCount = useRecoilValue(jobsAtom);
  // const totalNotificationsCnt = useRecoilValue(totalNotifications);

  return (
    <div>
      <button>Home</button>

      <button>My Network ({network})</button>
      <button>Jobs ({jobs})</button>
      <button>Messaging ({messaging})</button>
      <button>Notifications ({notifications})</button>

      <button onClick={() => setMessagingCount((c) => c + 1)}>
        {totalNotifications} - Me
      </button>
    </div>
  );
};

export default Header;
