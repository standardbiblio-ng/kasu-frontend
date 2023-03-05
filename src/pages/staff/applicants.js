import DashboardLayout from '@layout/staffDashboardLayout'
import React from 'react'

export default function applicants() {
    return (
        <DashboardLayout>
            <div className='mt-7'>
                <p className='text-primary text-sm'>Applicants</p>
            </div>
            <div className='flex justify-between items-center text-xs mt-5'>
                <div className='flex bg-textColor w-[261px] h-[47px] pl-2 gap-4 rounded-2xl py-1'>
                    <button className='bg-primary rounded-2xl px-4 py-1 text-white'>All Applicants</button>
                    <button className='hover:bg-secondary rounded-2xl px-4 py-1'>Paid Applicant</button>
                </div>
                <div>
                    <button className='bg-primary rounded-2xl px-4 py-3 text-white'>Upload Applicant</button>
                </div>
            </div>


        </DashboardLayout>
    )
}
