import DashboardLayout from '@layout/dashboardLayout'
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Dashboard() {


    const circularData = [
        {
            id: 1,
            title: 'Admission',
            percentage: 20,
            pathColor: '#9747FF',
            trailColor: 'rgba(151, 71, 255, 0.2)',
        },
        {
            id: 2,
            title: 'Fees',
            percentage: 85,
            pathColor: '#FFED47',
            trailColor: 'rgba(255, 237, 71, 0.2)',
        },
        {
            id: 3,
            title: 'Accomodation',
            percentage: 10,
            pathColor: '#F94343',
            trailColor: 'rgba(249, 67, 67, 0.2)',
        },
        {
            id: 4,
            title: 'Course Reg',
            percentage: 69,
            pathColor: '#0233DF33',
            trailColor: 'rgba(2, 51, 223, 0.2)',
        },
    ]

    return (
        <DashboardLayout>
            <section className='w-full h-full py-4'>
                {/* breadcrumb */}
                <span className='my-8 text-primary'>Dashboard</span>
                {/* cards */}
                <div className="grid md:grid-cols-6 grid-cols-1 gap-10 items-start justify-items-stretch">
                    <main className=' w-full md:col-span-4 flex flex-col items-start justify-center'>
                        <div className="my-4 flex gap-5">
                            {circularData.map((items) => (
                                <div key={items.id} className="w-[12rem] aspect-square bg-white rounded-md flex flex-col gap-2 items-start justify-center">
                                    <div className='w-full h-[30%] flex items-center justify-start'>
                                        <span className='w-[3%] h-[50%] my-auto rounded-2xl' style={{ backgroundColor: `${items.pathColor}` }}></span>
                                        <span className='w-full mx-4 font-semibold'>{items.title}</span>
                                    </div>
                                    <div className='w-full h-[70%]'>
                                        <div className="w-3/5 mx-auto">
                                            <CircularProgressbar
                                                value={items.percentage}
                                                text={`${items.percentage}%`}
                                                styles={buildStyles({
                                                    textColor: "black",
                                                    pathColor: `${items.pathColor}`,
                                                    trailColor: `${items.trailColor}`
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full h-[25rem] bg-white rounded-md flex flex-col my-8 items-start justify-start">
                            <div className="header w-full h-[12%] border-b border-b-black/20 flex items-center">
                                <h4 className='text-lg text-primary font-semibold mx-8'>Upcoming events</h4>
                            </div>
                            <div className="w-full my-auto flex flex-col items-center justify-center">
                                <svg className='w-1/4  text-black/10' fill='currentColor' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none" />
                                        </g>
                                        <g id="icons_Q2" data-name="icons Q2">
                                            <path d="M26.8,30l3.6-3.6a2,2,0,0,0-2.8-2.8L24,27.2l-3.6-3.6a2,2,0,0,0-2.8,2.8L21.2,30l-3.6,3.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,32.8l3.6,3.6a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8Zm0,0,3.6-3.6a2,2,0,0,0-2.8-2.8L24,27.2l-3.6-3.6a2,2,0,0,0-2.8,2.8L21.2,30l-3.6,3.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,32.8l3.6,3.6a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8Z" />
                                            <path d="M44,8H35V4.1A2.1,2.1,0,0,0,33.3,2,2,2,0,0,0,31,4V8H17V4.1A2.1,2.1,0,0,0,15.3,2,2,2,0,0,0,13,4V8H4a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V10A2,2,0,0,0,44,8ZM42,40H6V20H42Zm0-24H6V12H42Z" />
                                        </g>
                                    </g>
                                </svg>
                                <h6 className='text-xl font-semibold text-black/20'>No events available</h6>
                            </div>

                        </div>
                    </main>

                    <aside className='w-full md:col-span-2 flex justify-end'>
                        {/* calender */}
                        <div className="w-5/6 aspect-square text-xs bg-white rounded-md flex items-center justify-center">
                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                initialView="dayGridMonth"
                                weekends={true}
                                events={[
                                    { title: 'event 1', date: '2019-04-01' },
                                    { title: 'event 2', date: '2019-04-02' }
                                ]}
                            />
                        </div>
                    </aside>
                </div>

            </section>
        </DashboardLayout>
    )
}


