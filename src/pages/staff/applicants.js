import DashboardLayout from '@layout/staffDashboardLayout'
import React, { useState } from 'react'
import Image from 'next/image'
import excel from '@assets/icons/excel.png'
import Modal from '@component/Modals/Modal'
export default function applicants() {
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        setShowModal(!showModal)
    }
    return (
        <DashboardLayout>

            <div className='mt-7'>
                <p className='text-primary text-sm'>Applicants</p>
            </div>
            <div className='flex flex-col justify-between py-4 px-4 rounded-md text-xs mt-5 bg-white h-[120px]'>
                <div className='flex justify-between'>
                    <div className='flex bg-[#ECF0EC] w-[261px] h-[47px] pl-2 gap-4 rounded-2xl py-1'>
                        <button className='bg-primary rounded-2xl px-4 py-1 text-white'>All Applicants</button>
                        <button className='hover:bg-secondary rounded-2xl px-4 py-1'>Paid Applicant</button>
                    </div>
                    <div>
                        <button onClick={() => { setShowModal(true) }} className='bg-primary rounded-2xl px-4 py-3 text-white'>Upload Applicant</button>
                        <Modal show={showModal} close={closeModal} title="Upload applicant">
                            <p>Salisu</p>
                        </Modal>
                    </div>
                </div>
                <div className='flex'>

                </div>
            </div>

            <div className="flex flex-col mt-12">
                <div className="overflow-x-auto">
                    <div className="flex justify-between pl-2">
                        <div className="relative max-w-xs text-textColor">
                            <p>Applicants</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <button className="relative z-0 inline-flex text-sm rounded-md border-textColor">
                                    <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 border border-textColor rounded-md sm:py-2">
                                        <div>
                                            <Image src={excel} alt="Excel" />
                                        </div>
                                        <div className="hidden sm:block">
                                            Download
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden  rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 text-primary">
                                    <tr>
                                        <th scope="col" className="py-3 pl-4">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="checkbox"
                                                    className="sr-only"
                                                >
                                                    Checkbox
                                                </label>
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Edit
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-3 pl-4">
                                            <div className="flex items-center h-5">
                                                <input
                                                    type="checkbox"
                                                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="checkbox"
                                                    className="sr-only"
                                                >
                                                    Checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            1
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Jone Doe
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            jonne62@gmail.com
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-green-500 hover:text-green-700"
                                                href="#"
                                            >
                                                Edit
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pl-4">
                                            <div className="flex items-center h-5">
                                                <input
                                                    type="checkbox"
                                                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="checkbox"
                                                    className="sr-only"
                                                >
                                                    Checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            1
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Jone Doe
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            jonne62@gmail.com
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-green-500 hover:text-green-700"
                                                href="#"
                                            >
                                                Edit
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}
