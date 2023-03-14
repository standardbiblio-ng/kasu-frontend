import { PaymentTable } from "@component/Table/PaymentTable/PaymentTable";
import { useUserStore } from "@store/userStore.store";
import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/dashboardLayout";
export default function Payment() {
    const [tableData, setTableData] = useState([])
    const [user, setUser] = useState()
    const studentPaymentsData = [
        {
            "category": "Acceptance fee",
            "session": "2019/2022",
            "amount": "$373379704.64",
            "outstanding": "$79876410.44",
            "status": "paid",
            "action": null
        },
        {
            "category": "school fee",
            "session": "2021/2022",
            "amount": "$488998519.88",
            "outstanding": "$19244221.96",
            "status": "pending",
            "action": null
        },
        {
            "category": "hostel fees",
            "session": "2019/2022",
            "amount": "$851412216.77",
            "outstanding": "$99309195.60",
            "status": "outstanding",
            "action": null
        },
        {
            "category": "library fees",
            "session": "2020/2021",
            "amount": "$259755298.70",
            "outstanding": "$34631258.89",
            "status": "outstanding",
            "action": null
        },
        {
            "category": "registration fee",
            "session": "2018/2019",
            "amount": "$439420518.74",
            "outstanding": "$53810944.47",
            "status": "pending",
            "action": null
        },
        {
            "category": "registration fee",
            "session": "2018/2019",
            "amount": "$439420518.74",
            "outstanding": "$53810944.47",
            "status": "pending",
            "action": null
        },
        {
            "category": "registration fee",
            "session": "2018/2019",
            "amount": "$439420518.74",
            "outstanding": "$53810944.47",
            "status": "pending",
            "action": null
        }
    ]
    const applicantPaymentData = [
        {
            "category": "Acceptance fee",
            "session": "2019/2022",
            "amount": "$373379704.64",
            "outstanding": "$79876410.44",
            "status": "paid",
            "action": null
        }
    ]
    useEffect(() => {
        const user = useUserStore.getState().userDetails?.user
        setUser(user)
        user?.type == 'student' ? setTableData(studentPaymentsData) : setTableData(applicantPaymentData)
    }, [])
    return (
        <DashboardLayout>
            <section className="w-full h-full py-4">
                {/* breadcrumb */}
                <span className="my-8 text-primary">Payment</span>
                <div className="flex mt-8">
                    {user?.type == 'student' ? <PaymentTable data={studentPaymentsData} /> : <PaymentTable data={applicantPaymentData} />}
                </div>
            </section>
        </DashboardLayout>
    );
}
