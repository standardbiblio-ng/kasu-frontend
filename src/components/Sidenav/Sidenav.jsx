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
          <svg
            className={
              open
                ? "duration-300 ease-in transition-all rotate-180"
                : "duration-300 ease-in transition-all "
            }
            fill="currentColor"
            width="15"
            height="15"
            viewBox="-64 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z" />
          </svg>
        </button>
        <SidenavHeader />
        <SidenavItems />
      </div>
      <SidenavFooter />
    </aside>
  );
}
