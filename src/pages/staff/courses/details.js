import React from 'react'
import { useRouter } from 'next/router'
import DashboardLayout from '@layout/staffDashboardLayout'
export default function courseDetails() {
  const router = useRouter()
  const showcourses = () => {
    router.push('/staff/courses')
  }
  return (
    <DashboardLayout>
      <div className='mt-10 flex gap-5'>
        <button onClick={showcourses}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5156 17.3873L4.74063 11.6123C4.65313 11.5248 4.591 11.43 4.55425 11.3279C4.51808 11.2258 4.5 11.1164 4.5 10.9998C4.5 10.8831 4.51808 10.7737 4.55425 10.6716C4.591 10.5696 4.65313 10.4748 4.74063 10.3873L10.5156 4.61227C10.676 4.45185 10.8764 4.36785 11.1167 4.36027C11.3577 4.35327 11.5656 4.43727 11.7406 4.61227C11.9156 4.77268 12.0069 4.97306 12.0145 5.21339C12.0215 5.45431 11.9375 5.66227 11.7625 5.83727L7.475 10.1248H17.2531C17.501 10.1248 17.709 10.2085 17.877 10.3759C18.0444 10.5439 18.1281 10.7519 18.1281 10.9998C18.1281 11.2477 18.0444 11.4554 17.877 11.6228C17.709 11.7908 17.501 11.8748 17.2531 11.8748H7.475L11.7625 16.1623C11.9229 16.3227 12.0069 16.5269 12.0145 16.7748C12.0215 17.0227 11.9375 17.2269 11.7625 17.3873C11.6021 17.5623 11.3979 17.6498 11.15 17.6498C10.9021 17.6498 10.6906 17.5623 10.5156 17.3873Z" fill="black" />
          </svg>
        </button>

        <p className='text-lg'><span className='text-primary'>Course:</span> ENG 102</p>
      </div>
      <div className='flex gap-4 mt-10'>
        <div className='bg-white w-[700px] px-4 py-4 rounded-xl'>
          <p className='text-lg'>Description</p>
          <p className='mt-3 text-sm'>
            Engineering is the creative application of science, mathematical methods, and empirical evidence to the innovation, design, construction, and maintenance of structures, machines, materials, devices, systems, processes, and organizations.the application of science to the optimum conversion of the resources of nature to the uses of humankind. The field has been defined by the Engineers Council for ProfessionalDevelopment.
          </p>
        </div>
        <div className='bg-white w-[300px] px-4 py-4 rounded-xl'>
          <p className='text-btnWarning text-lg'>Stats</p>
          <p className='text-sm mt-3'>Students: 120</p>
          <p className='text-sm'>Semester: First</p>
          <p className='text-sm'>Faculty: Engineering</p>
          <p className='text-sm'>Department: Electrical Engineering</p>
        </div>
      </div>
      <div className='mt-10 bg-white rounded-xl px-4 py-4'>
        <div className='flex justify-center'>
          <p className='text-lg'>Downloads</p>
        </div>
        <div className='flex justify-center gap-10 mt-10'>
          <button className='bg-btnWarning px-2 py-1 rounded-xl text-sm'>Student List</button>
          <button className='bg-btnWarning px-2 py-1 rounded-xl text-sm'>Attendance Sheet</button>
          <button className='bg-btnWarning px-2 py-1 rounded-xl text-sm'>Grading Sheet</button>
        </div>
      </div>
    </DashboardLayout>
  )
}
