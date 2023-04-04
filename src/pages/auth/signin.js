import { useRouter } from 'next/router'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from 'react';
import { useLoginFormValidation } from "@hooks/formValidations/loginFormValidation.schema";
import { useLogin } from "@hooks/useLogin.hook";
import LoadingSpinner from "@component/LoadingSpinner/LoadingSpinner"
import { AiOutlineWarning } from "react-icons/ai";
// import ToastBox from "@components/ToastBox/ToastBox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import authImg from "@assets/images/auth_img.svg"
import authBg from "@assets/images/auth_bg.svg"
import kasuLogo from '@assets/images/kasu_logo.svg'
import AuthBgNew from '@assets/images/auth_bg_new.png'

import Image from 'next/image'

export default function Login() {
    const router = useRouter()
    const [showDialogue, setShowDialogue] = useState(false);
    const confirmOkay = () => {
        logoutHandler();
    };
    const confirmCancel = () => {
        setShowDialogue(false);
    };

    const { mutate, isLoading, isError } = useLogin();
    const onSubmitHandler = (values) => {
        mutate(values, {
            onSuccess: (data) => {
                toast.success('Signin successful', {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00923F" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
                })
                const user = data?.data?.user
                // console.log(token)
                if (user?.type == 'staff') {
                    // router.push('/staff')
                    window.location.replace("/staff")
                } else if (user?.type == 'student') {
                    // router.push('/student')
                    window.location.replace("/student")

                }
            },
            onError: (error) => {
                toast.error(error.data.message);
                // console.log(error.data.message)
                console.log('response error', error)
            },
            onSettled: (data) => {

                // window.location.replace("/")

            }
        });
    };
    const formik = useLoginFormValidation(onSubmitHandler);
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                progressStyle={{ backgroundColor: '#00923F', color: '#00923F' }}
            />

            {/* <ToastContainer /> */}

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
                        <form onSubmit={formik.handleSubmit} >
                            <div className='mt-12'>
                                <input type="text" name='email' className={
                                    formik.touched.email && formik.errors.email
                                        ? "border border-danger outline-none px-5 py-2 w-[420px] rounded-md leading-tight focus:outline-none focus:border-danger animate-wiggle"
                                        : "border border-primary outline-none px-5 py-2 w-[420px] rounded-md"
                                }
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    placeholder='Email' />
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className="flex flex-row items-center text-danger text-xs italic">
                                    {" "}
                                    <AiOutlineWarning className="w-4 h-4" />
                                    {formik.errors.email}
                                </div>
                            ) : null}
                            <div className='mt-5'>
                                <input type="password" name='password' className={
                                    formik.touched.password && formik.errors.password
                                        ? "border border-danger outline-none px-5 py-2 w-[420px] rounded-md leading-tight focus:outline-none focus:border-danger animate-wiggle"
                                        : "border border-primary outline-none px-5 py-2 w-[420px] rounded-md"
                                }
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password} />
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div className="flex flex-row items-center text-danger text-xs italic">
                                    {" "}
                                    <AiOutlineWarning className="w-4 h-4" />
                                    {formik.errors.password}
                                </div>
                            ) : null}

                            <div className='flex justify-between mt-5 mb-10'>
                                <input type="checkbox" className="border border-textColor" />
                                <p className='text-textColor text-sm  '>Reset Password?</p>
                            </div>
                            <div>
                                <button type='button' onClick={formik.handleSubmit} className='px-10 py-3 flex justify-center bg-btnColor w-[420px] text-white text-md text-bold rounded-md'>
                                    {(isLoading && !isError) ? <LoadingSpinner text="Logging you in..." /> : "Login"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}