import SidenavItems from "./studentItems";
import SidenavHeader from "./header";
import css from "./style.module.css";
import { useToggle } from "../../context/dashboard.context";
import SidenavFooter from "./footer";

const style = {
  mobilePosition: {
    left: "left-0",
    right: "right-0 lg:left-0",
  },
  container: `pb-32 lg:pb-12 relative flex flex-col items-start justify-between`,
  close: `duration-400 ease-out hidden transition-all lg:w-24`,
  open: `absolute duration-300 ease-in transition-all w-5/12 z-40 sm:w-5/12 md:w-64`,
  default: `h-[98vh]  text-white top-0 mx-4 my-2 rounded-2xl lg:relative bg-primary  lg:block lg:z-40`,
};

export default function Sidenav({ mobilePosition }) {
  const { open, ref, toggle } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <button
          type="button"
          aria-expanded="false"
          aria-label="Toggle sidenav"
          onClick={toggle}
          className="px-3 py-2 rounded-full bg-primary absolute bottom-0 -right-6 text-3xl text-white focus:outline-none text-center flex items-center justify-center"
        >
          <svg className={
            open
              ? "duration-300 ease-in transition-all rounded-full"
              : "duration-300 ease-in transition-all rotate-180 rounded-full"
          } width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.576172 0.200195H15.5377C23.8008 0.200195 30.4993 6.89871 30.4993 15.1617V15.1617C30.4993 23.4248 23.8008 30.1233 15.5377 30.1233H0.576172V0.200195Z" fill="#00923F" />
            <path d="M19.6412 21.7553C19.7568 21.64 19.8485 21.503 19.9111 21.3521C19.9737 21.2013 20.0059 21.0396 20.0059 20.8763C20.0059 20.713 19.9737 20.5514 19.9111 20.4005C19.8485 20.2497 19.7568 20.1127 19.6412 19.9973L14.8037 15.1598L19.6412 10.3222C19.7567 10.2068 19.8482 10.0697 19.9107 9.91891C19.9732 9.7681 20.0053 9.60645 20.0053 9.44321C20.0053 9.27996 19.9732 9.11832 19.9107 8.9675C19.8482 8.81668 19.7567 8.67965 19.6412 8.56421C19.5258 8.44878 19.3888 8.35722 19.238 8.29475C19.0871 8.23228 18.9255 8.20013 18.7622 8.20013C18.599 8.20013 18.4374 8.23228 18.2865 8.29475C18.1357 8.35722 17.9987 8.44878 17.8833 8.56421L12.1605 14.287C12.0449 14.4024 11.9532 14.5394 11.8906 14.6902C11.8281 14.841 11.7958 15.0027 11.7958 15.166C11.7958 15.3293 11.8281 15.491 11.8906 15.6418C11.9532 15.7926 12.0449 15.9296 12.1605 16.045L17.8833 21.7678C18.357 22.2416 19.155 22.2416 19.6412 21.7553Z" fill="white" />
          </svg>
        </button>
        <SidenavHeader />
        <SidenavItems />
      </div>
      <SidenavFooter />
    </aside>
  );
}
