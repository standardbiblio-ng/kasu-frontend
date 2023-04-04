import EditProfileModal from "@component/Modals/EditProfileModal";
import { useEffect, useState } from "react";
import { useUserStore } from "@store/userStore.store";
import DashboardLayout from "../../layout/dashboardLayout";
import { useUploadOlevel } from "@hooks/useUploadOlevel";
import { set } from "lodash";
import LoadingSpinner from "@component/LoadingSpinner/LoadingSpinner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Admission() {
    const [file, setFile] = useState();
    const [olevel, setOlevel] = useState([
        { subject: "English language", grade: "" },
        { subject: "Mathematics", grade: "" }
    ])
    const [examDetails, setExamDetails] = useState(
        {
            examName: "",
            examNo: "",
            examYear: ""
        }
    )
    const { mutate, isLoading, isError, data, isSuccess } = useUploadOlevel()

    const handleFormChange = (index, event) => {
        let data = [...olevel]
        data[index][event.target.name] = event.target.value
        setOlevel(data)
    };

    const addSubject = () => {
        let newSubject = { subject: "", grade: "" }
        setOlevel([...olevel, newSubject])
    }
    const removeSubject = (index) => {
        let data = [...olevel]
        data.splice(index, 1)
        setOlevel(data)
    }

    const submitOlevel = (e) => {
        e.preventDefault();
        const olevelData = {
            olevel: [{
                examYear: examDetails.examYear,
                examNo: examDetails.examNo,
                examName: examDetails.examName,
                grades: olevel
            }]
        }
        if (olevel.length < 5) {
            toast.error("Olevel Subject should be atleast 5 subjects");
            return
        }
        mutate(olevelData, {
            onSuccess: () => {
                toast.success('Olevel uploaded', {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00923F" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
                })
                console.log('Uploaded olevel')
            },
            onError: (error) => {
                // console.log('Error:', error.data.message)
                toast.error(error?.data?.message);

            },
            onSettled: () => {
                console.log('Settled')
            }
        })

    }
    const handleExamDetailsChange = (event) => {
        let examData = { ...examDetails }
        examData[event.target.name] = event.target.value
        setExamDetails(examData)

    }

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                progressStyle={{ backgroundColor: '#00923F', color: '#00923F' }}
            />
            <section className="w-full h-full py-4">
                {/* breadcrumb */}
                <span className="my-8 text-primary">Admission</span>
                <div className="flex items-start gap-[10%] justify-between">
                    <div className="flex flex-col my-8 w-1/2 h-[70vh] py-8 px-4 bg-white rounded-md items-start justify-between">
                        <h2 className="w-fit mx-auto text-xl font-semibold text-black/80">
                            Admission: <span className=" text-btnWarning">{user?.admitted ? 'Admitted' : 'Pending'}</span>
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
                    <div className="my-8 w-[50%] h-[70vh] py-8 px-5 bg-white grid grid-cols-1 items-start justify-items-stretch rounded-md">
                        <form onSubmit={submitOlevel}>
                            <div className="flex flex-col items-start justify-start rounded-md px-2 py-2 gap-5 w-[98%] h-96 overflow-y-scroll">
                                <div className="flex text-sm text-textColor">

                                    <div>
                                        <label>Exam type</label>
                                        <select name="examName" onChange={handleExamDetailsChange} value={examDetails.examName} className="bg-textColor rounded-md px-2 py-2 text-white focus:outline-none w-32">
                                            <option>WAEC</option>
                                            <option>NECO</option>
                                            <option>NABTEB</option>
                                            <option>GCE</option>
                                        </select>
                                    </div>
                                    <div>
                                        Exam Number
                                        <input name="examNo" onChange={handleExamDetailsChange} value={examDetails.examNo} type="text" className="bg-textColor rounded-md px-2 py-2 text-white focus:outline-none w-38" />
                                    </div>
                                    <div>
                                        Exam Year
                                        <select name="examYear" onChange={handleExamDetailsChange} value={examDetails.examYear} className="bg-textColor rounded-md px-2 py-2 text-white focus:outline-none w-24">
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                        </select>
                                    </div>
                                </div>
                                <hr />

                                {olevel.map((input, index) => (
                                    <div key={index} className="flex justify-start gap-5">
                                        <div className="bg-textColor text-white px-2 py-2 rounded-md text-sm ">
                                            {/* <input type="text" className="bg-textColor text-white px-2 py-2 rounded-md focus:outline-none" name="subject" placeholder="Subject" /> */}
                                            <select disabled={index == 0 || index == 1} name="subject" value={input.subject} onChange={event => handleFormChange(index, event)} className="bg-textColor text-white  rounded-md focus:outline-none w-52">
                                                <option>English Language</option>
                                                <option>Mathematics</option>
                                                <option>Biology</option>
                                                <option>Chemistry</option>
                                                <option>Physics</option>
                                            </select>
                                        </div>
                                        <div className="bg-textColor text-white px-2 py-2 rounded-md text-sm">
                                            {/* <input type="text" className="bg-textColor text-white px-2 py-2 rounded-md focus:outline-none" name="grade" placeholder="Grade" /> */}
                                            <select name="grade" value={input.grade} onChange={event => handleFormChange(index, event)} className="bg-textColor text-white  focus:outline-none w-20">
                                                <option>Select grade</option>
                                                <option >A</option>
                                                <option >B</option>
                                                <option >C</option>
                                                <option >D</option>
                                                <option >E</option>
                                                <option >F</option>
                                            </select>
                                        </div>
                                        {index > 1 && <div>
                                            <button type="button" onClick={() => removeSubject(index)} className="bg-btnWarning rounded-md px-2 py-2 text-white text-sm w-20">Delete</button>
                                        </div>}
                                    </div>
                                ))}
                                <div>
                                    <button type="button" onClick={addSubject} className="bg-primary px-2 py-2 rounded-md text-white text-sm w-[100%]">Add subject</button>
                                </div>
                            </div>
                            <hr className="text-textColor mt-3" />
                            {olevel.length >= 5 && <div className="mt-3">
                                <button onClick={submitOlevel} className="bg-secondary px-2 py-2 rounded-md text-sm">
                                    {(isLoading && !isError) ? <LoadingSpinner text="Please wait..." /> : "Submit"}
                                </button>
                            </div>}
                        </form>
                        <p className="text-sm text-black/50">
                            <span className=" text-btnColor font-bold">Note:</span> For
                            admission to be processed, you need to add atleast five subject
                        </p>
                    </div>
                </div>
                <EditProfileModal show={showModal} close={closeModal} />
            </section>
        </DashboardLayout >
    );
}
