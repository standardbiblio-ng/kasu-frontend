import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToggle } from '../../context/dashboard.context';

import data from './staffNavItems';


const style = {
    title: `mx-4 text-sm`,
    active: `relative flex items-center justify-start my-1 p-1 w-full bg-[#E5E5E5] text-black rounded-tl-full rounded-bl-full`,
    link: `relative flex items-center justify-start my-1 p-1 w-full hover:bg-[#E5E5E5] hover:text-black rounded-tl-full rounded-bl-full`,
    close: `lg:duration-400 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
    open: `lg:duration-300 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
};

export default function SidenavItems() {
    const { asPath } = useRouter();
    const { open } = useToggle();
    return (
        <ul className="pl-5 mx-auto w-full mt-[8rem]">
            <li>
                {data.map((item) => (
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
                            {/* <span className={item.link === asPath ? 'absolute -right-8 w-[4rem] aspect-square  rounded-tl-full rounded-bl-full bg-[#E5E5E5]' : ''}></span> */}
                        </div>
                    </Link>
                ))}
            </li>
        </ul>
    );
}
