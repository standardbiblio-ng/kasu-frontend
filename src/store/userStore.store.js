import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { userStoreName, userStoreVersion } from "@config/index";

let UserStore = (set) => ({
  isAuthenticated: false,
  userDetails: null,
  coreUserDetails: null,

  populateUserInfoAndJwt: (payload) => {
    set(() => ({
      userDetails: payload,
      isAuthenticated: true,
    }));
  },
  populateUserDetails: (payload) => {
    set(() => ({
      coreUserDetails: payload
    }))
  },
  refreshUserInfo: (payload) => {
    set(() => ({
      userDetails: payload,
    }));
  },

  reset: () => {
    set(() => ({ userDetails: null, isAuthenticated: false, coreUserDetails: null }));
  },
});

UserStore = devtools(UserStore);

UserStore = persist(UserStore, {
  name: userStoreName,
  version: userStoreVersion,
});

export const useUserStore = create(UserStore);
