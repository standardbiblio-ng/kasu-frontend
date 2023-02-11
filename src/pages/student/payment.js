import { PaymentTable } from "@component/Table/PaymentTable/PaymentTable";
import DashboardLayout from "../../layout/dashboardLayout";

export default function Payment() {
    return (
        <DashboardLayout>
            <section className="w-full h-full py-4">
                {/* breadcrumb */}
                <span className="my-8 text-primary">Payment</span>
                <div className="flex mt-8">
                    <PaymentTable />
                </div>
            </section>
        </DashboardLayout>
    );
}
