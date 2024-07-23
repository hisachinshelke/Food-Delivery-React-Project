import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  console.log("inside useOnlineStatus");

  //check if online
  useEffect(() => {
    console.log("Offline status called");
    window.addEventListener("offline", () => {
      console.log("Offline2 status called");

      setOnlineStatus(false);
    });

    console.log("online status called");
    window.addEventListener("online", () => {
      console.log("online2 status called");

      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
