import EditProfileModal from "@component/Modals/EditProfileModal";
import { useState } from "react";
import DashboardLayout from "../../layout/dashboardLayout";

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

    const closeModal = () => {
        setShowModal(!showModal);
    };
    return (
        <DashboardLayout>
            <section className="w-full h-full py-4">
                {/* breadcrumb */}
                <span className="my-8 text-primary">Admission</span>
                <div className="flex items-start gap-[10%] justify-between">
                    <div className="flex flex-col my-8 w-1/2 h-[70vh] py-8 px-4 bg-white rounded-md items-start justify-between">
                        <h2 className="w-fit mx-auto text-xl font-semibold text-black/80">
                            Admission: <span className=" text-btnWarning">Pending</span>
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
                                    <li className="my-4">Abbie Timothy Kingsley</li>
                                    <li className="my-4">abbiekingsley@gmail.com</li>
                                    <li className="my-4">Electrical Engineering</li>
                                    <li className="my-4 w-fit px-6 bg-btnWarning/10 rounded-md text-btnWarning">
                                        Pending
                                    </li>
                                    <li className="my-4">Engineering</li>
                                    <li className="my-4 w-fit px-6 bg-btnWarning/10 rounded-md text-btnWarning">
                                        Pending
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setShowModal(true);
                            }}
                            className="w-fit mx-auto px-6 py-2 text-lg font-normal bg-btnColor text-white rounded-md"
                        >
                            update
                        </button>
                    </div>
                    <div className="my-8 w-1/2 h-[70vh] py-8 bg-white grid grid-cols-1 items-start justify-items-stretch rounded-md">
                        <div className="w-full h-full flex flex-col items-center justify-between">
                            <div className="w-[90%]">
                                <div className="flex flex-col items-center justify-center w-full">
                                    <label
                                        for="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-fit border-2 border-black/50 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                aria-hidden="true"
                                                className="w-10 h-10 mb-3 text-black/50"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                ></path>
                                            </svg>
                                            <p className="mb-2 text-lg text-black/80">
                                                <span className="font-semibold">Click to upload</span>{" "}
                                                O’levels/A’levels result
                                            </p>
                                            <p className="text-sm text-black/50">format: pdf only</p>
                                        </div>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                    <div className="text-sm text-primary font-semibold">
                                        {file && `${file.name}`}
                                    </div>

                                    {/* <button onClick={handleUploadClick}>Upload</button> */}
                                </div>
                            </div>
                            <p className="text-sm text-black/50">
                                <span className=" text-btnColor font-bold">Note:</span> For
                                admission to be processed, a copy of your O'level result must be
                                uploaded
                            </p>
                        </div>
                    </div>
                </div>
                <EditProfileModal show={showModal} close={closeModal} />
            </section>
        </DashboardLayout>
    );
}
