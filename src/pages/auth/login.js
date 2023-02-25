import { useRouter } from 'next/router'

import authImg from "@assets/images/auth_img.svg"
import authBg from "@assets/images/auth_bg.svg"
import kasuLogo from '@assets/images/kasu_logo.svg'
import AuthBgNew from '@assets/images/auth_bg_new.png'

import Image from 'next/image'

export default function Login() {
    const router = useRouter()

    return (
        <section className="w-full h-screen flex" style={{ backgroundImage: `url(${authBg})` }} >

            <div className='bg-primary w-[59%]'>
                <Image src={AuthBgNew} className="mx-auto" />
            </div>
            <div className=' flex flex-col justify-center items-center w-[41%] max-w-[40%]'>
                <div className=''>
                    <Image src={kasuLogo} />
                </div>
                <div className='flex flex-col items-start pr-14 pl-7 '>
                    <p className='text-lg mt-5'>Welcome to </p>
                    <p className='text-bold text-primary mb-7'>KASU SMS</p>
                    <p className='text-xs text-textColor'>-Username is your full-name and Matric no is your password.</p>
                    <p className='text-xs text-textColor'>-Students <span className='text-btnColor'>without Matric no.</span> your password is your Jamb reg. number</p>
                </div>
                <div className='flex flex-col items-start w-[420px]'>
                    <form>
                        <div className='mt-12 mb-5'>
                            <input type="text" className=" border border-textColor outline-none px-5 py-2 w-[420px] rounded-md" placeholder='Username' />
                        </div>
                        <div>
                            <input type="password" className=" border border-textColor outline-none px-5 py-2 w-[420px] rounded-md" placeholder='*********' />
                        </div>
                        <div className='flex justify-between mt-5 mb-10'>
                            <input type="checkbox" className="border border-textColor" />
                            <p className='text-textColor text-sm  '>Reset Password?</p>
                        </div>
                        <div>
                            <button type='button' className='px-10 py-3 flex justify-center bg-btnColor w-[420px] text-white text-md text-bold rounded-md'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}