import EditProfileModal from '@component/Modals/EditProfileModal'
import { useState } from 'react';
import DashboardLayout from '../../layout/dashboardLayout'

export default function Profile() {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(!showModal)
    }
    return (
        <section className='w-full h-full py-4'>
            {/* breadcrumb */}
            <span className='my-8 text-primary'>Profile</span>
            <div className="my-8 w-fit h-fit py-8 px-4 bg-white grid grid-cols-3 gap-5 items-start justify-items-stretch rounded-md">
                <div className="col-span-1">
                    <ul className='text-black font-semibold text-lg'>
                        <li className='my-4'>First Name:</li>
                        <li className='my-4'>Middle Name:</li>
                        <li className='my-4'>Last Name:</li>
                        <li className='my-4'>Email Address:</li>
                        <li className='my-4'>Gender:</li>
                        <li className='my-4'>Date of Birth:</li>
                        <li className='my-4'>Jamb Number:</li>
                        <li className='my-4'>Phone Number:</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <ul className='text-black/60 text-lg'>
                        <li className='my-4'>Abbie</li>
                        <li className='my-4'>Timothy</li>
                        <li className='my-4'>Kingsley</li>
                        <li className='my-4'>abbiekingsley@gmail.com</li>
                        <li className='my-4'>Male</li>
                        <li className='my-4'>26 Feb 1998</li>
                        <li className='my-4'>8465454657</li>
                        <li className='my-4'>+234 806 467 8765</li>
                    </ul>
                </div>
            </div>
            <button onClick={() => { setShowModal(true) }} className='px-6 py-2 text-lg font-normal bg-btnColor text-white rounded-md'>update</button>
            <EditProfileModal show={showModal} close={closeModal} />

        </section>

    )
}
