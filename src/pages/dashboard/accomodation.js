import { AccomodationTable } from "@component/Table/AccomodationTable/AccomodationTable";
import DashboardLayout from "../../layout/dashboardLayout";

export default function Accomodation() {
    return (
        <DashboardLayout>
            <section className="w-full h-full py-4">
                {/* breadcrumb */}
                <span className="my-8 text-primary">Accommodation</span>
                <div className="flex mt-8">
                    <AccomodationTable />
                </div>
            </section>
        </DashboardLayout>
    );
}
