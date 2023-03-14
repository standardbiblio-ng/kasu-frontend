import { PaymentTable } from "@component/Table/PaymentTable/PaymentTable";
import { useUserStore } from "@store/userStore.store";
import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/dashboardLayout";
export default function Payment() {
    const [tableData, setTableData] = useState([])
    const [user, setUser] = useState()
    const applicantPaymentData = [
        {
            "category": "Acceptance fee",
            "session": "2019/2022",
            "amount": "$373379704.64",
            "outstanding": "$79876410.44",
            "status": user?.acceptance?.paymentStatus == 'paid' ? 'Paid' : 'Pending',
            "action": null
        }
    ]
    useEffect(() => {
        const userData = useUserStore?.getState()?.userDetails?.user
        setUser(userData)
        userData?.type == 'student' ? setTableData(studentPaymentsData) : setTableData(applicantPaymentData)
    }, [])
    console.log(user)
    return (
        <DashboardLayout>
            <section className="w-full h-full py-4">
                {/* breadcrumb */}
                <span className="my-8 text-primary">Payment</span>
                <div className="flex mt-8">
                    <PaymentTable data={applicantPaymentData} />
                </div>
            </section>
        </DashboardLayout>
    );
}
