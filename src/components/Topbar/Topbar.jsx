import profile from "@assets/images/profile.png";
import { useUserStore } from "@store/userStore.store";
import { useEffect, useState } from "react";
export default function Topbar() {
  const [userData, setUserData] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState({})
  useEffect(() => {
    setUserData(useUserStore.getState().userDetails?.user)
    setIsAuthenticated(useUserStore.getState().isAuthenticated)

  })
  return (
    <header className="w-[99%] py-2 items-center  z-10 bg-secondary rounded-sm sticky top-2">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-black/90 z-10">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="container flex left-0 relative w-3/4">
            <h1 className="text-lg font-bold">KASU SMS</h1>

            {/* <div className="group hidden items-center ml-8 relative w-full md:flex lg:w-72">
              <div className="absolute block cursor-pointer items-center justify-center h-10 p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden">
                <svg
                  fill="none"
                  className="h-5 relative w-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <svg
                className="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="bg-gray-800 block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
            </div> */}
          </div>

          <div className="flex items-center justify-end p-1 relative w-full sm:mr-0 sm:right-auto">
            <a href="#" className="block relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
            <p className="mx-8 text-lg font-semibold">{userData?.lastName} {userData?.firstName}</p>
            <div
              style={{
                backgroundImage: `url(${profile.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
              }}
              className="w-[2rem] aspect-square rounded-full border border-primary"
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
