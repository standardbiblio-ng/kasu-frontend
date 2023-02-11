import { ResultTable } from '@component/Table/ResultTable/ResultTable'
import DashboardLayout from '../../layout/dashboardLayout'

export default function Result() {

    return (
        <DashboardLayout>
            <section className='w-full h-full py-4'>
                {/* breadcrumb */}
                <span className='my-8 text-primary'>Result</span>
                <div className='flex mt-8'>
                    <ResultTable />
                </div>
            </section>
        </DashboardLayout>
    )
}
