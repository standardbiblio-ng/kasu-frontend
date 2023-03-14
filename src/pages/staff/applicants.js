import DashboardLayout from '@layout/staffDashboardLayout'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import excel from '@assets/icons/excel.png'
import Modal from '@component/Modals/Modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchApplicants } from '@hooks/useFetchApplicants.hook'
import LoadingSpinner from "@component/LoadingSpinner/LoadingSpinner"
import { useUploadApplicants } from '@hooks/useUploadApplicants'
import * as XLSX from 'xlsx'
export default function applicants() {
    const [showModal, setShowModal] = useState(false)
    const [excelData, setExcelData] = useState(null)
    const [applicantExcelFile, setApplicantExcelFile] = useState(null)
    const [excelFileError, setExcelFileError] = useState(null)
    const [applicants, setApplicants] = useState([])
    const [session, setSession] = useState()

    const { data, isLoading, isFetching } = useFetchApplicants()
    const {
        uploadApplicantData,
        uploadApplicantLoading,
        uploadApplicantError,
        uploadApplicantMutate,
        uploadApplicantSuccess } = useUploadApplicants()
    useEffect(() => {
        setApplicants(data?.data)
    }, [data])
    const closeModal = () => {
        setShowModal(!showModal)
    }
    const supportedFileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    const handleExcelFile = (e) => {
        let selectedFile = e.target.files[0]

        if (selectedFile) {
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
            const submitData = {
                applicants: data,
                session: '63e7c5f47d2dbcfe520c1ad5'
            }
            console.log(submitData)
            uploadApplicantMutate(submitData, {
                onSuccess: (data) => {
                    toast.success('Applicants uploaded', {
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00923F" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
                    })
                    closeModal()
                },
                onError: (error) => {
                    toast.error(error.data.message);
                    console.log(error)
                }
            })
        } else {
            setExcelData(null)
        }
    }
    const handleSessionChange = (e) => {
        setSession(e.target.value)
    }
    return (
        <DashboardLayout>
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
                                <div className='flex flex-col justify-start gap-3'>
                                    <select name='session' onChange={handleSessionChange} className='border border-textColor rounded-md px-4 py-2'>

                                        <option value='63e7c5f47d2dbcfe520c1ad5'>2022/2023</option>
                                    </select>
                                    <input type="file"
                                        name="upload"
                                        id="upload"
                                        onChange={handleExcelFile}
                                        className='border border-textColor rounded-md px-4 py-2'
                                    />
                                    <button onClick={handleSubmitFile} className='bg-primary px-3 py-2 rounded-md text-white'>
                                        {(uploadApplicantLoading && !uploadApplicantError) ? <LoadingSpinner text="uploading applicants" /> : "Upload"}
                                    </button>
                                </div>
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

                    <div className="p-1.5 w-full max-w-96 inline-block align-middle bg-white mt-3 rounded-md overflow-auto">
                        <div className="overflow-auto  rounded-lg">
                            <table className="min-w-full w-69 divide-y divide-textColor">
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
