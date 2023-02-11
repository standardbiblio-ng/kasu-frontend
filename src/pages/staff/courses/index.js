import React from 'react'
import DashboardLayout from '@layout/staffDashboardLayout'
import Card from '@component/CourseCard/Card'
export default function courses() {
    return (
        <DashboardLayout>
            <div className='mt-10'>
                <div className='text-2xl text-primary'>
                    All courses
                </div>
                <div className='grid grid-cols-3'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </DashboardLayout>
    )
}
