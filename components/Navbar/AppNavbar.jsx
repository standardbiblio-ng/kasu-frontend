import React from 'react'
import Image from 'next/image'
import kasu_logo from '../../public/kasu_logo.svg'
import { useRouter } from 'next/router'
import Link from "next/link";
export default function AppNavbar() {
    const ellipse = {
        width: '0px',
        height: '0px',
        borderTop: '30px solid transparent',
        borderRight: '50px solid white',
        borderBottom: '30px solid transparent',
        position: 'absolute',
        left: '76.5%'
    }
    const router = useRouter()
    return (
        <div>
            <div className='fixed flex-col items-center justify-center py-16 pl-3 h-screen bg-primary text-white rounded-lg'>
                <div className='flex flex-col items-center'>
                    <div>
                        <Link href='/'>
                            <Image src={kasu_logo} />
                        </Link>
                    </div>
                    <div className='flex items-center  text-sm mt-10'>
                        <Link href="/dashboard">
                            <span
                                className={
                                    router.pathname === '/dashboard'
                                        ? "flex justify-start gap-3 items-center  bg-white text-black px-2 py-2 rounded-l-full  w-[200px]" : 'flex justify-start items-center gap-3 px-2 py-2 text-black w-[200px]'}>
                                <span>
                                    {router.pathname === '/dashboard' ?
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.40203 0.0343628C14.5663 0.0343628 18.7525 4.22059 18.7525 9.38487C18.7525 14.5492 14.5663 18.7354 9.40203 18.7354C4.23774 18.7354 0.0515137 14.5492 0.0515137 9.38487C0.0515137 4.22059 4.23774 0.0343628 9.40203 0.0343628ZM9.40203 1.90447C7.4181 1.90447 5.51543 2.69258 4.11258 4.09543C2.70973 5.49828 1.92162 7.40095 1.92162 9.38487C1.92162 11.3688 2.70973 13.2715 4.11258 14.6743C5.51543 16.0772 7.4181 16.8653 9.40203 16.8653C11.386 16.8653 13.2886 16.0772 14.6915 14.6743C16.0943 13.2715 16.8824 11.3688 16.8824 9.38487C16.8824 7.40095 16.0943 5.49828 14.6915 4.09543C13.2886 2.69258 11.386 1.90447 9.40203 1.90447ZM12.9861 5.02473C13.0933 4.9495 13.2237 4.91453 13.3542 4.92599C13.4847 4.93745 13.607 4.9946 13.6995 5.08738C13.7918 5.1797 13.8484 5.30178 13.8592 5.4319C13.87 5.56202 13.8343 5.69175 13.7584 5.79802C11.72 8.64618 10.598 10.1722 10.3941 10.377C10.1308 10.6397 9.77402 10.7873 9.40203 10.7873C9.03004 10.7873 8.67324 10.6397 8.40994 10.377C8.14717 10.1137 7.99959 9.75686 7.99959 9.38487C7.99959 9.01288 8.14717 8.65609 8.40994 8.39279C8.75965 8.04401 10.2847 6.92101 12.9861 5.02473ZM14.5448 8.44982C14.7928 8.44982 15.0306 8.54834 15.206 8.72369C15.3813 8.89905 15.4799 9.13688 15.4799 9.38487C15.4799 9.63286 15.3813 9.8707 15.206 10.0461C15.0306 10.2214 14.7928 10.3199 14.5448 10.3199C14.2968 10.3199 14.059 10.2214 13.8836 10.0461C13.7083 9.8707 13.6098 9.63286 13.6098 9.38487C13.6098 9.13688 13.7083 8.89905 13.8836 8.72369C14.059 8.54834 14.2968 8.44982 14.5448 8.44982ZM4.25924 8.44982C4.50723 8.44982 4.74507 8.54834 4.92042 8.72369C5.09578 8.89905 5.19429 9.13688 5.19429 9.38487C5.19429 9.63286 5.09578 9.8707 4.92042 10.0461C4.74507 10.2214 4.50723 10.3199 4.25924 10.3199C4.01125 10.3199 3.77342 10.2214 3.59806 10.0461C3.42271 9.8707 3.32419 9.63286 3.32419 9.38487C3.32419 9.13688 3.42271 8.89905 3.59806 8.72369C3.77342 8.54834 4.01125 8.44982 4.25924 8.44982ZM6.42669 5.08738C6.60202 5.26296 6.70042 5.50099 6.70025 5.74912C6.70007 5.99725 6.60134 6.23515 6.42576 6.41048C6.25018 6.58581 6.01214 6.68421 5.76402 6.68403C5.51589 6.68386 5.27799 6.58512 5.10266 6.40954C5.01585 6.3226 4.947 6.21942 4.90007 6.10588C4.85313 5.99234 4.82902 5.87066 4.82911 5.7478C4.82919 5.62494 4.85348 5.5033 4.90057 5.38982C4.94767 5.27635 5.01666 5.17326 5.10359 5.08644C5.27917 4.91111 5.51721 4.81271 5.76534 4.81289C5.8882 4.81298 6.00984 4.83726 6.12331 4.88436C6.23679 4.93146 6.33988 5.00044 6.42669 5.08738ZM9.40203 3.30704C9.65002 3.30704 9.88785 3.40556 10.0632 3.58091C10.2386 3.75627 10.3371 3.9941 10.3371 4.24209C10.3371 4.49008 10.2386 4.72792 10.0632 4.90327C9.88785 5.07863 9.65002 5.17714 9.40203 5.17714C9.15403 5.17714 8.9162 5.07863 8.74084 4.90327C8.56549 4.72792 8.46697 4.49008 8.46697 4.24209C8.46697 3.9941 8.56549 3.75627 8.74084 3.58091C8.9162 3.40556 9.15403 3.30704 9.40203 3.30704Z" fill="black" />
                                        </svg>
                                        : <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.402 1.72047C16.5663 1.72047 20.7525 5.90669 20.7525 11.071C20.7525 16.2353 16.5663 20.4215 11.402 20.4215C6.23774 20.4215 2.05151 16.2353 2.05151 11.071C2.05151 5.90669 6.23774 1.72047 11.402 1.72047ZM11.402 3.59057C9.4181 3.59057 7.51543 4.37868 6.11258 5.78153C4.70973 7.18438 3.92162 9.08705 3.92162 11.071C3.92162 13.0549 4.70973 14.9576 6.11258 16.3604C7.51543 17.7633 9.4181 18.5514 11.402 18.5514C13.386 18.5514 15.2886 17.7633 16.6915 16.3604C18.0943 14.9576 18.8824 13.0549 18.8824 11.071C18.8824 9.08705 18.0943 7.18438 16.6915 5.78153C15.2886 4.37868 13.386 3.59057 11.402 3.59057ZM14.9861 6.71083C15.0933 6.6356 15.2237 6.60064 15.3542 6.6121C15.4847 6.62356 15.607 6.68071 15.6995 6.77348C15.7918 6.86581 15.8484 6.98788 15.8592 7.11801C15.87 7.24813 15.8343 7.37785 15.7584 7.48412C13.72 10.3323 12.598 11.8583 12.3941 12.0631C12.1308 12.3258 11.774 12.4734 11.402 12.4734C11.03 12.4734 10.6732 12.3258 10.4099 12.0631C10.1472 11.7998 9.99959 11.443 9.99959 11.071C9.99959 10.699 10.1472 10.3422 10.4099 10.0789C10.7596 9.73011 12.2847 8.60712 14.9861 6.71083ZM16.5448 10.1359C16.7928 10.1359 17.0306 10.2344 17.206 10.4098C17.3813 10.5852 17.4799 10.823 17.4799 11.071C17.4799 11.319 17.3813 11.5568 17.206 11.7322C17.0306 11.9075 16.7928 12.006 16.5448 12.006C16.2968 12.006 16.059 11.9075 15.8836 11.7322C15.7083 11.5568 15.6098 11.319 15.6098 11.071C15.6098 10.823 15.7083 10.5852 15.8836 10.4098C16.059 10.2344 16.2968 10.1359 16.5448 10.1359ZM6.25924 10.1359C6.50723 10.1359 6.74507 10.2344 6.92042 10.4098C7.09578 10.5852 7.19429 10.823 7.19429 11.071C7.19429 11.319 7.09578 11.5568 6.92042 11.7322C6.74507 11.9075 6.50723 12.006 6.25924 12.006C6.01125 12.006 5.77342 11.9075 5.59806 11.7322C5.42271 11.5568 5.32419 11.319 5.32419 11.071C5.32419 10.823 5.42271 10.5852 5.59806 10.4098C5.77342 10.2344 6.01125 10.1359 6.25924 10.1359ZM8.42669 6.77348C8.60202 6.94906 8.70042 7.1871 8.70025 7.43523C8.70007 7.68335 8.60134 7.92125 8.42576 8.09658C8.25018 8.27191 8.01214 8.37031 7.76402 8.37014C7.51589 8.36996 7.27799 8.27122 7.10266 8.09564C7.01585 8.00871 6.947 7.90552 6.90007 7.79198C6.85313 7.67844 6.82902 7.55676 6.82911 7.4339C6.82919 7.31104 6.85348 7.1894 6.90057 7.07593C6.94767 6.96245 7.01666 6.85936 7.10359 6.77255C7.27917 6.59722 7.51721 6.49882 7.76534 6.49899C7.8882 6.49908 8.00984 6.52337 8.12331 6.57046C8.23679 6.61756 8.33988 6.68655 8.42669 6.77348ZM11.402 4.99315C11.65 4.99315 11.8878 5.09166 12.0632 5.26702C12.2386 5.44237 12.3371 5.68021 12.3371 5.9282C12.3371 6.17619 12.2386 6.41402 12.0632 6.58938C11.8878 6.76473 11.65 6.86325 11.402 6.86325C11.154 6.86325 10.9162 6.76473 10.7408 6.58938C10.5655 6.41402 10.467 6.17619 10.467 5.9282C10.467 5.68021 10.5655 5.44237 10.7408 5.26702C10.9162 5.09166 11.154 4.99315 11.402 4.99315Z" fill="white" />
                                        </svg>

                                    }
                                </span>
                                Dashboard
                            </span>
                        </Link>
                        <span style={router.pathname === '/dashboard' ? ellipse : {}}></span>

                    </div>
                    <div className='flex items-center text-sm mt-5'>
                        <Link href='/profile'>
                            <span className={
                                router.pathname === '/profile'
                                    ? "flex justify-start gap-3 items-center  bg-white text-black px-2 py-2 rounded-l-full  w-[200px]" : 'flex justify-start items-center gap-3 px-2 py-2 text-black w-[200px]'}>
                                <span>
                                    {router.pathname === '/profile' ? <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.402 2.2283C6.23774 2.2283 2.05151 6.41452 2.05151 11.5788C2.05151 16.7431 6.23774 20.9293 11.402 20.9293C16.5663 20.9293 20.7525 16.7431 20.7525 11.5788C20.7525 6.41452 16.5663 2.2283 11.402 2.2283Z" stroke="black" stroke-width="1.63634" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.17505 17.5126C4.17505 17.5126 6.25928 14.8515 11.4021 14.8515C16.5448 14.8515 18.63 17.5126 18.63 17.5126M11.4021 11.5788C12.146 11.5788 12.8595 11.2833 13.3856 10.7572C13.9117 10.2311 14.2072 9.51763 14.2072 8.77366C14.2072 8.02969 13.9117 7.31618 13.3856 6.79012C12.8595 6.26405 12.146 5.96851 11.4021 5.96851C10.6581 5.96851 9.94458 6.26405 9.41851 6.79012C8.89244 7.31618 8.5969 8.02969 8.5969 8.77366C8.5969 9.51763 8.89244 10.2311 9.41851 10.7572C9.94458 11.2833 10.6581 11.5788 11.4021 11.5788V11.5788Z" stroke="black" stroke-width="1.63634" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                        :
                                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.402 2.46198C6.23774 2.46198 2.05151 6.6482 2.05151 11.8125C2.05151 16.9768 6.23774 21.163 11.402 21.163C16.5663 21.163 20.7525 16.9768 20.7525 11.8125C20.7525 6.6482 16.5663 2.46198 11.402 2.46198Z" stroke="white" strokeWidth="1.63634" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.17505 17.7463C4.17505 17.7463 6.25928 15.0851 11.4021 15.0851C16.5448 15.0851 18.63 17.7463 18.63 17.7463M11.4021 11.8125C12.146 11.8125 12.8595 11.5169 13.3856 10.9908C13.9117 10.4648 14.2072 9.75127 14.2072 9.0073C14.2072 8.26333 13.9117 7.54983 13.3856 7.02376C12.8595 6.49769 12.146 6.20215 11.4021 6.20215C10.6581 6.20215 9.94458 6.49769 9.41851 7.02376C8.89244 7.54983 8.5969 8.26333 8.5969 9.0073C8.5969 9.75127 8.89244 10.4648 9.41851 10.9908C9.94458 11.5169 10.6581 11.8125 11.4021 11.8125V11.8125Z" stroke="white" strokeWidth="1.63634" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                </span>
                                Profile
                            </span>
                        </Link>
                        <span style={router.pathname === '/profile' ? ellipse : {}}></span>
                    </div>
                    <div className='flex items-center text-sm mt-5'>
                        <Link href='/payment'>
                            <span className={
                                router.pathname === '/payment'
                                    ? "flex justify-start gap-3 items-center  bg-white text-black px-2 py-2 rounded-l-full  w-[200px]" : 'flex justify-start items-center gap-3 px-2 py-2 text-black w-[200px]'}>
                                <span>
                                    {
                                        router.pathname === '/payment'
                                            ? <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.8175 7.50022C19.8175 5.95084 16.8871 4.69507 13.2722 4.69507C9.65726 4.69507 6.72681 5.95084 6.72681 7.50022M19.8175 7.50022V11.2404C19.8175 12.1942 18.7085 13.0357 17.0124 13.5425C15.952 13.8604 14.6626 14.0456 13.2722 14.0456C11.8817 14.0456 10.5923 13.8595 9.53196 13.5425C7.83671 13.0357 6.72681 12.1942 6.72681 11.2404V7.50022M19.8175 7.50022C19.8175 8.45397 18.7085 9.29552 17.0124 9.80231C15.952 10.1202 14.6626 10.3054 13.2722 10.3054C11.8817 10.3054 10.5923 10.1193 9.53196 9.80231C7.83671 9.29552 6.72681 8.45397 6.72681 7.50022" stroke="black" stroke-width="1.8701" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.98657 11.2405V14.9807C2.98657 15.9344 4.09648 16.776 5.79172 17.2828C6.85207 17.6007 8.14151 17.7858 9.53193 17.7858C10.9223 17.7858 12.2118 17.5998 13.2721 17.2828C14.9674 16.776 16.0773 15.9344 16.0773 14.9807V14.0456M2.98657 11.2405C2.98657 10.1212 4.51538 9.15533 6.72677 8.70557M2.98657 11.2405C2.98657 12.1942 4.09648 13.0358 5.79172 13.5426C6.85207 13.8605 8.14151 14.0456 9.53193 14.0456C10.1818 14.0456 10.8092 14.0054 11.402 13.9297" stroke="black" stroke-width="1.8701" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            : <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.8175 7.56498C19.8175 6.0156 16.8871 4.75983 13.2722 4.75983C9.65726 4.75983 6.72681 6.0156 6.72681 7.56498M19.8175 7.56498V11.3052C19.8175 12.2589 18.7085 13.1005 17.0124 13.6073C15.952 13.9252 14.6626 14.1103 13.2722 14.1103C11.8817 14.1103 10.5923 13.9243 9.53196 13.6073C7.83671 13.1005 6.72681 12.2589 6.72681 11.3052V7.56498M19.8175 7.56498C19.8175 8.51873 18.7085 9.36028 17.0124 9.86707C15.952 10.185 14.6626 10.3701 13.2722 10.3701C11.8817 10.3701 10.5923 10.1841 9.53196 9.86707C7.83671 9.36028 6.72681 8.51873 6.72681 7.56498" stroke="white" stroke-width="1.8701" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.98657 11.3052V15.0454C2.98657 15.9991 4.09648 16.8407 5.79172 17.3475C6.85207 17.6654 8.14151 17.8505 9.53193 17.8505C10.9223 17.8505 12.2118 17.6645 13.2721 17.3475C14.9674 16.8407 16.0773 15.9991 16.0773 15.0454V14.1103M2.98657 11.3052C2.98657 10.1859 4.51538 9.22002 6.72677 8.77026M2.98657 11.3052C2.98657 12.2589 4.09648 13.1005 5.79172 13.6073C6.85207 13.9252 8.14151 14.1103 9.53193 14.1103C10.1818 14.1103 10.8092 14.0701 11.402 13.9944" stroke="white" stroke-width="1.8701" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                    }
                                </span>
                                Payment
                            </span>
                        </Link>
                        <span style={router.pathname === '/payment' ? ellipse : {}}></span>
                    </div>
                    <div className='flex items-center text-sm mt-5'>
                        <Link href='/admission'>
                            <span className={
                                router.pathname === '/admission'
                                    ? "flex justify-start gap-3 items-center  bg-white text-black px-2 py-2 rounded-l-full  w-[200px]" : 'flex justify-start items-center gap-3 px-2 py-2 text-black w-[200px]'}>
                                <span>
                                    {
                                        router.pathname === '/admission' ?
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_564_2857)">
                                                    <path d="M11.4021 3.93115L11.0732 4.10647L1.60578 9.01549L0.400269 9.62912L1.58404 10.221V16.1378C1.16467 16.3818 0.882755 16.825 0.882755 17.3433C0.882755 17.7153 1.03053 18.072 1.29356 18.3351C1.55659 18.5981 1.91334 18.7459 2.28533 18.7459C2.65732 18.7459 3.01407 18.5981 3.2771 18.3351C3.54014 18.072 3.68791 17.7153 3.68791 17.3433C3.68791 16.8257 3.40599 16.3818 2.98662 16.1378V10.944L4.38919 11.6671V15.2394C4.38919 15.5487 4.53156 15.8285 4.69636 16.0066C4.86046 16.1848 5.06033 16.2914 5.2658 16.4008C5.67956 16.6175 6.17047 16.771 6.77778 16.905C7.99452 17.1764 9.61589 17.3433 11.4021 17.3433C13.1883 17.3433 14.8103 17.1764 16.0264 16.905C16.6344 16.771 17.1246 16.6175 17.5383 16.4008C17.7438 16.2914 17.9437 16.1848 18.1085 16.0066C18.301 15.797 18.41 15.524 18.415 15.2394V11.6671L21.1984 10.2427L22.4032 9.62912L21.1984 9.01549L11.731 4.10647L11.4021 3.93115ZM11.4021 5.50905L19.3357 9.62912L18.086 10.2645C17.9262 10.1042 17.7412 9.97104 17.5383 9.87036C17.1274 9.65366 16.6337 9.50008 16.0264 9.36613C14.8131 9.09474 13.1967 8.92783 11.4021 8.92783C9.60748 8.92783 7.99171 9.09474 6.77778 9.36613C6.16976 9.50008 5.67676 9.65366 5.2658 9.87036C5.06299 9.97104 4.87799 10.1042 4.7181 10.2645L3.4684 9.62912L11.4021 5.50905ZM11.4021 10.3304C13.1139 10.3304 14.6539 10.4868 15.7192 10.7252C16.2508 10.8423 16.6779 10.9798 16.903 11.0969C16.9738 11.1355 16.985 11.1635 17.0124 11.1853V13.8586C16.6904 13.7418 16.361 13.6467 16.0264 13.5739C14.8096 13.3025 13.1883 13.1356 11.4021 13.1356C9.61589 13.1356 7.99381 13.3025 6.77778 13.5739C6.4054 13.6559 6.08491 13.752 5.79177 13.8586V11.186C5.81982 11.1642 5.83034 11.1369 5.90117 11.0983C6.12558 10.9805 6.55337 10.843 7.08494 10.7259C8.1509 10.4868 9.69023 10.3304 11.4021 10.3304ZM11.4021 14.5381C13.1034 14.5381 14.6511 14.6945 15.7192 14.933C16.0501 15.0024 16.3732 15.1051 16.6835 15.2394C16.3732 15.374 16.0501 15.4769 15.7192 15.5466C14.6511 15.785 13.1034 15.9407 11.4021 15.9407C9.70075 15.9407 8.15301 15.7843 7.08494 15.5459C6.75403 15.4764 6.43098 15.3737 6.12067 15.2394C6.43095 15.1049 6.75401 15.002 7.08494 14.9323C8.15301 14.6945 9.70075 14.5381 11.4021 14.5381Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_564_2857">
                                                        <rect width="22.4412" height="22.4412" fill="white" transform="translate(0.181396 0.512695)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>


                                            : <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_564_4143)">
                                                    <path d="M11.4021 3.99609L11.0732 4.17142L1.60578 9.08043L0.400269 9.69406L1.58404 10.2859V16.2027C1.16467 16.4468 0.882755 16.89 0.882755 17.4082C0.882755 17.7802 1.03053 18.137 1.29356 18.4C1.55659 18.663 1.91334 18.8108 2.28533 18.8108C2.65732 18.8108 3.01407 18.663 3.2771 18.4C3.54014 18.137 3.68791 17.7802 3.68791 17.4082C3.68791 16.8907 3.40599 16.4468 2.98662 16.2027V11.009L4.38919 11.732V15.3044C4.38919 15.6136 4.53156 15.8934 4.69636 16.0716C4.86046 16.2497 5.06033 16.3563 5.2658 16.4657C5.67956 16.6824 6.17047 16.836 6.77778 16.9699C7.99452 17.2413 9.61589 17.4082 11.4021 17.4082C13.1883 17.4082 14.8103 17.2413 16.0264 16.9699C16.6344 16.836 17.1246 16.6824 17.5383 16.4657C17.7438 16.3563 17.9437 16.2497 18.1085 16.0716C18.301 15.8619 18.41 15.589 18.415 15.3044V11.732L21.1984 10.3077L22.4032 9.69406L21.1984 9.08043L11.731 4.17142L11.4021 3.99609ZM11.4021 5.57399L19.3357 9.69406L18.086 10.3294C17.9262 10.1691 17.7412 10.036 17.5383 9.9353C17.1274 9.7186 16.6337 9.56502 16.0264 9.43108C14.8131 9.15968 13.1967 8.99277 11.4021 8.99277C9.60748 8.99277 7.99171 9.15968 6.77778 9.43108C6.16976 9.56502 5.67676 9.7186 5.2658 9.9353C5.06299 10.036 4.87799 10.1691 4.7181 10.3294L3.4684 9.69406L11.4021 5.57399ZM11.4021 10.3953C13.1139 10.3953 14.6539 10.5517 15.7192 10.7902C16.2508 10.9073 16.6779 11.0447 16.903 11.1619C16.9738 11.2004 16.985 11.2285 17.0124 11.2502V13.9235C16.6904 13.8068 16.361 13.7117 16.0264 13.6388C14.8096 13.3674 13.1883 13.2005 11.4021 13.2005C9.61589 13.2005 7.99381 13.3674 6.77778 13.6388C6.4054 13.7209 6.08491 13.8169 5.79177 13.9235V11.2509C5.81982 11.2292 5.83034 11.2018 5.90117 11.1633C6.12558 11.0454 6.55337 10.908 7.08494 10.7909C8.1509 10.5517 9.69023 10.3953 11.4021 10.3953ZM11.4021 14.6031C13.1034 14.6031 14.6511 14.7595 15.7192 14.9979C16.0501 15.0674 16.3732 15.17 16.6835 15.3044C16.3732 15.4389 16.0501 15.5418 15.7192 15.6115C14.6511 15.85 13.1034 16.0056 11.4021 16.0056C9.70075 16.0056 8.15301 15.8493 7.08494 15.6108C6.75403 15.5414 6.43098 15.4387 6.12067 15.3044C6.43095 15.1698 6.75401 15.0669 7.08494 14.9972C8.15301 14.7595 9.70075 14.6031 11.4021 14.6031Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_564_4143">
                                                        <rect width="22.4412" height="22.4412" fill="white" transform="translate(0.181396 0.577332)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                    }

                                </span>
                                Admission
                            </span>
                        </Link>
                        <span style={router.pathname === '/admission' ? ellipse : {}}></span>
                    </div>
                    <div className='flex items-center text-sm mt-5'>
                        <Link href='/accomodation'>
                            <span className={
                                router.pathname === '/accomodation'
                                    ? "flex justify-start gap-3 items-center  bg-white text-black px-2 py-2 rounded-l-full  w-[200px]" : 'flex justify-start items-center gap-3 px-2 py-2 text-black w-[200px]'}>
                                <span>
                                    {
                                        router.pathname === '/accomodation'
                                            ? <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_564_2290)">
                                                    <path d="M9.5319 1.875V3.98821L11.402 5.23183V3.7451H20.7525V17.7709H16.0773V19.641H22.6226V1.875H9.5319ZM7.19428 4.68015L0.181396 9.3554V19.641H14.2072V9.3554L7.19428 4.68015ZM13.2721 5.6152V6.4848L14.7775 7.4853H15.1422V5.6152H13.2721ZM17.0123 5.6152V7.4853H18.8824V5.6152H17.0123ZM7.19428 7.01778L12.3371 10.2905V17.7709H9.5319V12.1606H4.85665V17.7709H2.0515V10.2905L7.19428 7.01778ZM17.0123 9.3554V11.2255H18.8824V9.3554H17.0123ZM17.0123 13.0956V14.9657H18.8824V13.0956H17.0123Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_564_2290">
                                                        <rect width="22.4412" height="22.4412" fill="white" transform="translate(0.181396 0.00488281)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            : <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_564_4147)">
                                                    <path d="M9.5319 1.94019V4.0534L11.402 5.29702V3.81029H20.7525V17.836H16.0773V19.7061H22.6226V1.94019H9.5319ZM7.19428 4.74534L0.181396 9.42059V19.7061H14.2072V9.42059L7.19428 4.74534ZM13.2721 5.68039V6.54998L14.7775 7.55049H15.1422V5.68039H13.2721ZM17.0123 5.68039V7.55049H18.8824V5.68039H17.0123ZM7.19428 7.08296L12.3371 10.3556V17.836H9.5319V12.2257H4.85665V17.836H2.0515V10.3556L7.19428 7.08296ZM17.0123 9.42059V11.2907H18.8824V9.42059H17.0123ZM17.0123 13.1608V15.0309H18.8824V13.1608H17.0123Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_564_4147">
                                                        <rect width="22.4412" height="22.4412" fill="white" transform="translate(0.181396 0.0700684)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                    }
                                </span>
                                Accomodation
                            </span>
                        </Link>
                        <span style={router.pathname === '/accomodation' ? ellipse : {}}></span>
                    </div>

                    <div className='flex items-center text-sm mt-5'>
                        <Link href='/courses'>
                            <span className={
                                router.pathname === '/courses'
                                    ? "flex justify-start gap-3 items-center  bg-white text-black px-2 py-2 rounded-l-full  w-[200px]" : 'flex justify-start items-center gap-3 px-2 py-2 text-black w-[200px]'}>
                                <span>
                                    {
                                        router.pathname === '/courses'
                                            ? <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.9 18.9745L21.1219 16.0777L18.0187 4.48079C17.9155 4.09667 17.6639 3.76928 17.3194 3.57062C16.9748 3.37196 16.5654 3.31829 16.1813 3.42141L13.2844 4.19954L13.1906 4.22766C13.0509 4.04436 12.8708 3.89572 12.6643 3.79329C12.4578 3.69086 12.2305 3.63739 12 3.63704H9C8.73609 3.63775 8.47716 3.70895 8.25 3.84329C8.02284 3.70895 7.76391 3.63775 7.5 3.63704H4.5C4.10218 3.63704 3.72064 3.79507 3.43934 4.07638C3.15804 4.35768 3 4.73921 3 5.13704V20.137C3 20.5349 3.15804 20.9164 3.43934 21.1977C3.72064 21.479 4.10218 21.637 4.5 21.637H7.5C7.76391 21.6363 8.02284 21.5651 8.25 21.4308C8.47716 21.5651 8.73609 21.6363 9 21.637H12C12.3978 21.637 12.7794 21.479 13.0607 21.1977C13.342 20.9164 13.5 20.5349 13.5 20.137V10.7995L15.3281 17.6245L16.1063 20.5214C16.1912 20.8418 16.3798 21.125 16.6427 21.3268C16.9056 21.5287 17.2279 21.6377 17.5594 21.637C17.6888 21.6348 17.8176 21.6191 17.9437 21.5902L20.8406 20.812C21.0312 20.7609 21.2097 20.6724 21.3658 20.5517C21.5219 20.431 21.6525 20.2805 21.75 20.1089C21.85 19.9396 21.9148 19.7519 21.9405 19.557C21.9663 19.3621 21.9525 19.164 21.9 18.9745ZM14.6437 9.27141L17.5406 8.49329L19.4813 15.7402L16.5844 16.5183L14.6437 9.27141ZM16.5656 4.87454L17.1562 7.04016L14.2594 7.81829L13.6688 5.65266L16.5656 4.87454ZM12 5.13704V16.387H9V5.13704H12ZM7.5 5.13704V7.38704H4.5V5.13704H7.5ZM4.5 20.137V8.88704H7.5V20.137H4.5ZM12 20.137H9V17.887H12V20.137ZM20.4562 19.3589L17.5594 20.137L16.9688 17.962L19.875 17.1839L20.4562 19.3589Z" fill="black" />
                                            </svg>

                                            : <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.659 17.7093L19.9314 15.0005L17.0299 4.15688C16.9333 3.79771 16.6981 3.49159 16.3759 3.30583C16.0537 3.12007 15.6709 3.06989 15.3117 3.16631L12.603 3.8939L12.5153 3.9202C12.3847 3.74879 12.2163 3.60981 12.0232 3.51403C11.8301 3.41826 11.6176 3.36826 11.402 3.36793H8.59688C8.35011 3.3686 8.108 3.43518 7.89559 3.56079C7.68318 3.43518 7.44107 3.3686 7.1943 3.36793H4.38915C4.01716 3.36793 3.66041 3.5157 3.39738 3.77874C3.13434 4.04177 2.98657 4.39852 2.98657 4.77051V18.7963C2.98657 19.1683 3.13434 19.525 3.39738 19.788C3.66041 20.0511 4.01716 20.1988 4.38915 20.1988H7.1943C7.44107 20.1982 7.68318 20.1316 7.89559 20.006C8.108 20.1316 8.35011 20.1982 8.59688 20.1988H11.402C11.774 20.1988 12.1308 20.0511 12.3938 19.788C12.6568 19.525 12.8046 19.1683 12.8046 18.7963V10.0652L14.514 16.447L15.2416 19.1557C15.321 19.4552 15.4974 19.7201 15.7432 19.9088C15.989 20.0975 16.2904 20.1995 16.6003 20.1988C16.7213 20.1967 16.8418 20.1821 16.9597 20.155L19.6685 19.4274C19.8467 19.3796 20.0136 19.2968 20.1595 19.184C20.3055 19.0711 20.4276 18.9304 20.5188 18.77C20.6122 18.6117 20.6728 18.4362 20.6969 18.2539C20.721 18.0717 20.7081 17.8864 20.659 17.7093ZM13.8741 8.63636L16.5828 7.90877L18.3974 14.685L15.6886 15.4126L13.8741 8.63636ZM15.6711 4.52506L16.2234 6.55003L13.5147 7.27761L12.9624 5.25264L15.6711 4.52506ZM11.402 4.77051V15.2898H8.59688V4.77051H11.402ZM7.1943 4.77051V6.87437H4.38915V4.77051H7.1943ZM4.38915 18.7963V8.27695H7.1943V18.7963H4.38915ZM11.402 18.7963H8.59688V16.6924H11.402V18.7963ZM19.309 18.0687L16.6003 18.7963L16.0481 16.7625L18.7656 16.0349L19.309 18.0687Z" fill="white" />
                                            </svg>
                                    }
                                </span>
                                Courses
                            </span>
                        </Link>
                        <span style={router.pathname === '/courses' ? ellipse : {}}></span>
                    </div>
                    <div className='flex items-center text-sm mt-5'>
                        <Link href='/result'>
                            <span className={
                                router.pathname === '/result'
                                    ? "flex justify-start gap-3 items-center  bg-white text-black px-2 py-2 rounded-l-full  w-[200px]" : 'flex justify-start items-center gap-3 px-2 py-2 text-black w-[200px]'}>
                                <span>
                                    {
                                        router.pathname === '/result'
                                            ? <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99944 17.0558H15.6097V18.4584H9.99944V17.0558ZM7.19429 17.0558H8.59687V18.4584H7.19429V17.0558ZM9.99944 13.5494H15.6097V14.952H9.99944V13.5494ZM7.19429 13.5494H8.59687V14.952H7.19429V13.5494ZM9.99944 10.043H15.6097V11.4455H9.99944V10.043ZM7.19429 10.043H8.59687V11.4455H7.19429V10.043Z" fill="black" />
                                                <path d="M17.7136 4.43199H15.6097V3.7307C15.6097 3.35871 15.462 3.00196 15.1989 2.73893C14.9359 2.4759 14.5792 2.32813 14.2072 2.32812H8.59687C8.22488 2.32813 7.86813 2.4759 7.6051 2.73893C7.34206 3.00196 7.19429 3.35871 7.19429 3.7307V4.43199H5.09043C4.71844 4.43199 4.36169 4.57976 4.09866 4.84279C3.83562 5.10583 3.68785 5.46258 3.68785 5.83456V20.5616C3.68785 20.9336 3.83562 21.2903 4.09866 21.5534C4.36169 21.8164 4.71844 21.9642 5.09043 21.9642H17.7136C18.0856 21.9642 18.4423 21.8164 18.7054 21.5534C18.9684 21.2903 19.1162 20.9336 19.1162 20.5616V5.83456C19.1162 5.46258 18.9684 5.10583 18.7054 4.84279C18.4423 4.57976 18.0856 4.43199 17.7136 4.43199ZM8.59687 3.7307H14.2072V6.53585H8.59687V3.7307ZM17.7136 20.5616H5.09043V5.83456H7.19429V7.93843H15.6097V5.83456H17.7136V20.5616Z" fill="black" />
                                            </svg>

                                            : <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99949 16.1852H15.6098V17.5877H9.99949V16.1852ZM7.19434 16.1852H8.59691V17.5877H7.19434V16.1852ZM9.99949 12.6787H15.6098V14.0813H9.99949V12.6787ZM7.19434 12.6787H8.59691V14.0813H7.19434V12.6787ZM9.99949 9.17227H15.6098V10.5748H9.99949V9.17227ZM7.19434 9.17227H8.59691V10.5748H7.19434V9.17227Z" fill="white" />
                                                <path d="M17.7136 3.56196H15.6098V2.86068C15.6098 2.48869 15.462 2.13194 15.199 1.8689C14.9359 1.60587 14.5792 1.4581 14.2072 1.4581H8.59688C8.2249 1.4581 7.86814 1.60587 7.60511 1.8689C7.34208 2.13194 7.19431 2.48869 7.19431 2.86068V3.56196H5.09044C4.71846 3.56196 4.36171 3.70973 4.09867 3.97277C3.83564 4.2358 3.68787 4.59255 3.68787 4.96454V19.6916C3.68787 20.0636 3.83564 20.4203 4.09867 20.6834C4.36171 20.9464 4.71846 21.0942 5.09044 21.0942H17.7136C18.0856 21.0942 18.4424 20.9464 18.7054 20.6834C18.9684 20.4203 19.1162 20.0636 19.1162 19.6916V4.96454C19.1162 4.59255 18.9684 4.2358 18.7054 3.97277C18.4424 3.70973 18.0856 3.56196 17.7136 3.56196ZM8.59688 2.86068H14.2072V5.66583H8.59688V2.86068ZM17.7136 19.6916H5.09044V4.96454H7.19431V7.0684H15.6098V4.96454H17.7136V19.6916Z" fill="white" />
                                            </svg>
                                    }
                                </span>
                                Result
                            </span>
                        </Link>
                        <span style={router.pathname === '/result' ? ellipse : {}}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
