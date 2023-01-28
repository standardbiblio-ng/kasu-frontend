
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToggle } from '@context/dashboard.context';
import footerData from './footerData';


const style = {
    title: `mx-4 text-sm`,
    active: `relative flex items-center justify-start my-1 p-1 w-full bg-[#E5E5E5] text-black rounded-tl-full rounded-bl-full`,
    link: `relative flex items-center justify-start my-1 p-1 w-full hover:bg-[#E5E5E5] hover:text-black rounded-tl-full rounded-bl-full`,
    close: `lg:duration-400 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
    open: `lg:duration-300 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
};

export default function SidenavFooter() {
    const { asPath } = useRouter();
    const { open } = useToggle();
    return (
        <ul className="pl-5 mx-auto w-full absolute bottom-10">
            <li>
                {footerData.map((item) => (
                    <Link href={item.link} key={item.title}>
                        <div className={`my-2 ${item.link === asPath ? style.active : style.link}`}>
                            <div
                                className='p-2'
                            >
                                <span>{item.icon}</span>
                            </div>
                            <span
                                className={`${style.title} ${open ? style.open : style.close}`}
                            >
                                {item.title}
                            </span>
                            {/* <span className={item.link === asPath ? 'absolute -right-10 w-[4rem] aspect-square  rounded-tl-full rounded-bl-full bg-[#E5E5E5]' : ''}></span> */}
                        </div>
                    </Link>
                ))}
            </li>
            <li>
                <button type="" className='w-full' >
                    <div className={`my-2 ${style.link}`}>
                        <div
                            className='p-2'
                        >
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0124 8.41614V6.54603C14.0124 6.05005 13.8153 5.57439 13.4646 5.22367C13.1139 4.87296 12.6382 4.67593 12.1423 4.67593H5.59691C5.10093 4.67593 4.62526 4.87296 4.27455 5.22367C3.92383 5.57439 3.72681 6.05005 3.72681 6.54603V17.7666C3.72681 18.2626 3.92383 18.7383 4.27455 19.089C4.62526 19.4397 5.10093 19.6367 5.59691 19.6367H12.1423C12.6382 19.6367 13.1139 19.4397 13.4646 19.089C13.8153 18.7383 14.0124 18.2626 14.0124 17.7666V15.8965" stroke="currentColor" stroke-width="1.8701" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.46692 12.1563H20.5576L17.7525 9.3512M17.7525 14.9615L20.5576 12.1563" stroke="currentColor" stroke-width="1.8701" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <span
                            className={`${style.title} ${open ? style.open : style.close}`}
                        >
                            Logout
                        </span>
                        {/* <span className={item.link === asPath ? 'absolute -right-10 w-[4rem] aspect-square  rounded-tl-full rounded-bl-full bg-[#E5E5E5]' : ''}></span> */}
                    </div>
                </button>
            </li>
        </ul>
    );
}
