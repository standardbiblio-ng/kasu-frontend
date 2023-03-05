import shallow from "zustand/shallow";

import { useUserStore } from "@store/userStore.store";
import { useEffect, useState } from "react";

export const useLogoutUser = () => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setUserData(useUserStore.getState().userDetails);
    setIsAuthenticated(useUserStore.getState().isAuthenticated);
  }, []);

  const { reset } = useUserStore(
    (state) => ({
      reset: state.reset,
    }),
    shallow
  );

  const logoutHandler = () => {
    reset();
    setUserData({});
    setIsAuthenticated(!isAuthenticated)
    window.location.replace("/auth/signin")
  };

  return {
    logoutHandler,
  };
};
