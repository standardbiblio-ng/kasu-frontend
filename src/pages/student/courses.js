import { CoursesTable } from '@component/Table/CoursesTable/CoursesTable'
import DashboardLayout from '../../layout/dashboardLayout'

export default function Courses() {

    return (
        <DashboardLayout>
            <section className='w-full h-full py-4'>
                {/* breadcrumb */}
                <span className='my-8 text-primary'>Courses</span>
                <div className='flex flex-col mt-8'>
                    <p className='my-1 font-normal text-black/80 text-lg'>To register courses fill in filters and proceed</p>
                    <form className="my-4 flex items-center justify-start space-x-5">
                        <div className='w-1/6'>
                            <select
                                className="w-full text-sm  border border-black/20 focus:outline-none rounded-md font-semibold px-4 py-2"
                                value=""
                                onChange={(e) => { e.target.value }}
                            >
                                {['Faculty fo engineering'].map((dropdown) => (
                                    <option key='' value={(e) => { e.target.value }} className=" focus-within:none">
                                        {dropdown}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='w-1/6'>
                            <select
                                className="w-full text-sm  border border-black/20 focus:outline-none rounded-md font-semibold px-4 py-2"
                                value=""
                                onChange={(e) => { e.target.value }}
                            >
                                {['Electrical Engineering'].map((dropdown) => (
                                    <option key='' value={(e) => { e.target.value }} className=" focus-within:none">
                                        {dropdown}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='w-1/6'>
                            <select
                                className="w-full text-sm  border border-black/20 focus:outline-none rounded-md font-semibold px-4 py-2"
                                value=""
                                onChange={(e) => { e.target.value }}
                            >
                                {['2023', '2022', '2021'].map((dropdown) => (
                                    <option key='' value={(e) => { e.target.value }} className=" focus-within:none">
                                        {dropdown}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='w-1/6'>
                            <select
                                className="w-full text-sm  border border-black/20 focus:outline-none rounded-md font-semibold px-4 py-2"
                                value=""
                                onChange={(e) => { e.target.value }}
                            >
                                {['1st semester', '2nd semester'].map((dropdown) => (
                                    <option key='' value={(e) => { e.target.value }} className=" focus-within:none">
                                        {dropdown}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className=' bg-btnColor text-sm text-white px-6 py-2 rounded-md border border-btnColor'>
                            proceed
                        </button>

                    </form>
                    <CoursesTable />
                </div>
            </section>
        </DashboardLayout>
    )
}
