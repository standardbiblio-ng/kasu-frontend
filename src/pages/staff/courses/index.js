import React, { useEffect, useState } from 'react'
import DashboardLayout from '@layout/staffDashboardLayout'
import Card from '@component/CourseCard/Card'
import { useFetchAllCourses } from '@hooks/useFetchCourses.hook'
export default function courses() {
    const [courses, setCourses] = useState([])
    const { data, isError, isFetching, isLoading, isSuccess } = useFetchAllCourses()
    useEffect(() => {
        console.log(data?.data?.data)
        setCourses(data?.data?.data)
    }, [isLoading])
    return (
        <DashboardLayout>
            <div className='mt-10'>
                <div className='text-2xl text-primary'>
                    All courses
                </div>
                <div className='grid grid-cols-3'>
                    {courses?.map((courseDetails, index) => (
                        <Card key={index} course={courseDetails} />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}
