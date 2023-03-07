import DashboardLayout from '@layout/staffDashboardLayout'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import excel from '@assets/icons/excel.png'
import Modal from '@component/Modals/Modal'
import { useFetchApplicants } from '@hooks/useFetchApplicants.hook'
import * as XLSX from 'xlsx'
export default function applicants() {
    const [showModal, setShowModal] = useState(false)
    const [excelData, setExcelData] = useState(null)
    const [applicantExcelFile, setApplicantExcelFile] = useState(null)
    const [excelFileError, setExcelFileError] = useState(null)
    const [applicants, setApplicants] = useState([])

    const { data, isLoading, isFetching } = useFetchApplicants()
    useEffect(() => {
        setApplicants(data?.data)
    })
    console.log(excelData)
    const closeModal = () => {
        setShowModal(!showModal)
    }
    const supportedFileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    const handleExcelFile = (e) => {
        let selectedFile = e.target.files[0]

        if (selectedFile) {
            console.log(selectedFile.type)
            if (selectedFile && supportedFileType.includes(selectedFile.type)) {
                const reader = new FileReader()
                reader.readAsArrayBuffer(selectedFile)
                reader.onload = (e) => {
                    setExcelFileError(null)
                    setApplicantExcelFile(e.target.result)
                }
            } else {
                setExcelFileError('Please select only excel file types')
                setApplicantExcelFile(null)
            }
        } else {
            console.log('Select a file')
        }
    }
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (applicantExcelFile !== null) {
            const workBook = XLSX.read(applicantExcelFile, { type: 'buffer' })
            const workSheetName = workBook.SheetNames[0]
            const worksheet = workBook.Sheets[workSheetName]
            const data = XLSX.utils.sheet_to_json(worksheet)
            setExcelData(data)
        } else {
            setExcelData(null)
        }
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
                            <form encType="multipart/form-data">
                                <input type="file"
                                    name="upload"
                                    id="upload"
                                    onChange={handleExcelFile}
                                />
                                <button onClick={handleSubmitFile}>Upload</button>
                            </form>
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

                    <div className="p-1.5 w-full inline-block align-middle bg-white mt-3 rounded-md overflow-auto">
                        <div className="overflow-auto  rounded-lg">
                            <table className="min-w-full divide-y divide-textColor">
                                <thead className="text-primary">
                                    <tr>
                                        {/* <th scope="col" className="py-3 pl-4">
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
                                        </th> */}
                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            S/N
                                        </th> */}
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
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Jamb Number
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Jamb Score
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Course of Study
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Addmission Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Acceptance Fee Staus
                                        </th>
                                        {/* <th
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
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-textColor">
                                    {applicants?.map((applicant, index) => (
                                        <tr key={index}>
                                            {/* <td className="py-3 pl-4">
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
                                            </td> */}
                                            {/* <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {index}
                                            </td> */}
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {applicant.firstName} {applicant.lastName}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {applicant.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {applicant.jambNo}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {applicant.jambScore}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {applicant.courseOfStudy}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {applicant.admitted ? <span className='bg-primary text-white px-2 py-2 rounded-xl'>Admitted</span> : <span className='bg-btnWarning text-white px-2 py-2 rounded-xl'>Pending</span>}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {applicant.acceptance.paymentStatus == 'paid' ? <span className='bg-primary text-white px-2 py-2 rounded-xl w-10'>Paid</span> : <span className='bg-btnWarning text-white px-2 py-2 rounded-xl'>Pending</span>}
                                            </td>
                                            {/* <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
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
                                            </td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}
