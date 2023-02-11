import React from 'react'
import DashboardLayout from '@layout/staffDashboardLayout'
import { GenericTable } from '@component/Table/GenericTable'
export default function results() {
    const columns = [{
        Header: "Student",
        Footer: "Student",
        accessor: "student",
    },
    {
        Header: "Course",
        Footer: "Course",
        accessor: "course",
    },
    {
        Header: "Grade",
        Footer: "Grade",
        accessor: "grade",
    },
    {
        Header: "Action",
        Footer: "Action",
        accessor: "action"
    }
    ]
    const data = [
        {
            student: 'Mahdi Abuhuraira',
            course: 'COSC401',
            grade: 'A',

        }
    ]
    return (
        <DashboardLayout>
            <div className='mt-10'>
                <div className='flex justify-between'>
                    <p className='text-xl text-primary'>All Courses</p>
                    <div className='flex gap-2 items-center'>
                        <input type='text' className='py-2 px-4 rounded-md  text-xs w-[320px] bg-[#D9D9D9]' placeholder='Search a course' />
                        <div className='bg-btnColor py-2 px-2 rounded-md '>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8343 9.33332H10.3076L10.121 9.15332C10.5376 8.66929 10.8421 8.09916 11.0127 7.48373C11.1832 6.86829 11.2157 6.22275 11.1076 5.59332C10.7943 3.73998 9.24763 2.25998 7.38096 2.03332C6.7247 1.95029 6.05815 2.0185 5.43231 2.23271C4.80647 2.44692 4.23792 2.80146 3.77018 3.2692C3.30244 3.73695 2.9479 4.30549 2.73369 4.93133C2.51947 5.55718 2.45127 6.22373 2.53429 6.87998C2.76096 8.74665 4.24096 10.2933 6.09429 10.6066C6.72373 10.7147 7.36926 10.6823 7.9847 10.5117C8.60014 10.3411 9.17027 10.0366 9.65429 9.61998L9.83429 9.80665V10.3333L12.6676 13.1666C12.941 13.44 13.3876 13.44 13.661 13.1666C13.9343 12.8933 13.9343 12.4466 13.661 12.1733L10.8343 9.33332ZM6.83429 9.33332C5.17429 9.33332 3.83429 7.99332 3.83429 6.33332C3.83429 4.67332 5.17429 3.33332 6.83429 3.33332C8.49429 3.33332 9.83429 4.67332 9.83429 6.33332C9.83429 7.99332 8.49429 9.33332 6.83429 9.33332Z" fill="black" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 flex justify-center'>
                <GenericTable data={data} columns={columns} />
            </div>
        </DashboardLayout>
    )
}
