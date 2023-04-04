import EditProfileModal from "@component/Modals/EditProfileModal";
import { useEffect, useState } from "react";
import { useUserStore } from "@store/userStore.store";
import DashboardLayout from "../../layout/dashboardLayout";
import { set } from "lodash";

export default function Admission() {
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        // 👇 Uploading the file using the fetch API to the server
        fetch("https://httpbin.org/post", {
            method: "POST",
            body: file,
            // 👇 Set headers manually for single file upload
            headers: {
                "content-type": file.type,
                "content-length": `${file.size}`, // 👈 Headers need to be a string
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    };

    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState()
    const closeModal = () => {
        setShowModal(!showModal);
    };
    useEffect(() => {
        const userData = useUserStore.getState().userDetails?.user
        setUser(userData)
        console.log(user)
    }, [user])
    return (
        <DashboardLayout>
            <section className="w-full h-full py-4">
                {/* breadcrumb */}
                <span className="my-8 text-primary">Admission</span>
                <div className="flex items-start gap-[10%] justify-between">
                    <div className="flex flex-col my-8 w-1/2 h-[70vh] py-8 px-4 bg-white rounded-md items-start justify-between">
                        <h2 className="w-fit mx-auto text-xl font-semibold text-black/80">
                            Admission: <span className={`${user?.admitted ? 'bg-secondary px-2 py-1 rounded-md text-sm' : 'bg-btnWarning px-2 py-1 rounded-md text-sm'}`}>{user?.admitted ? 'Admitted' : 'Pending'}</span>
                        </h2>
                        <div className=" grid grid-cols-3 gap-5 items-start justify-items-stretch ">
                            <div className="col-span-1">
                                <ul className="text-black font-semibold text-lg">
                                    <li className="my-4">Name:</li>
                                    <li className="my-4">Email Address:</li>
                                    <li className="my-4">Course of study:</li>
                                    <li className="my-4">Matric number:</li>
                                    <li className="my-4">Faculty:</li>
                                    <li className="my-4">Date of admission:</li>
                                </ul>
                            </div>
                            <div className="col-span-2">
                                <ul className="text-black/60 text-lg">
                                    <li className="my-4">{user?.firstName} {user?.lastName}</li>
                                    <li className="my-4">{user?.email}</li>
                                    <li className="my-4"> {user?.courseOfStudy}</li>
                                    <li className="my-4 w-fit px-6 bg-btnWarning/10 rounded-md text-btnWarning">
                                        {user?.admitted ? user?.regNumber : 'Pending'}
                                    </li>
                                    <li className="my-4">{user?.admitted ? user?.faculty : 'Pending'}</li>
                                    <li className="my-4 w-fit px-6 bg-btnWarning/10 rounded-md text-btnWarning">
                                        {user?.admitted ? user?.admittedDate : 'Pending'}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <button
                            onClick={() => {
                                setShowModal(true);
                            }}
                            className="w-fit mx-auto px-6 py-2 text-lg font-normal bg-btnColor text-white rounded-md"
                        >
                            update
                        </button> */}
                    </div>

                </div>
                <EditProfileModal show={showModal} close={closeModal} />
            </section>
        </DashboardLayout>
    );
}
