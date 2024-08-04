import { useRecoilState, useRecoilValue } from "recoil";
import {
  notificationsAtom,
  messagingAtom,
  networkAtom,
  jobsAtom,
  totalNotifications,
} from "./state";

function App() {
  const NotificationCount = useRecoilValue(notificationsAtom);
  const [MessagingCount, setMessagingCount] = useRecoilState(messagingAtom);
  const NetworkCount = useRecoilValue(networkAtom);
  const JobsCount = useRecoilValue(jobsAtom);
  const totalNotificationsCnt = useRecoilValue(totalNotifications);
  return (
    <div>
      <button>Home</button>

      <button>My Network ({NetworkCount})</button>
      <button>Jobs ({JobsCount})</button>
      <button>Messaging ({MessagingCount})</button>
      <button>
        Notifications ({NotificationCount >= 100 ? "99+" : NotificationCount})
      </button>
      <button onClick={() => setMessagingCount((c) => c + 1)}>
        {totalNotificationsCnt}Me
      </button>
    </div>
  );
}

export default App;
