import EditProfileModal from '@component/Modals/EditProfileModal'
import { useState } from 'react';
import DashboardLayout from '../../layout/dashboardLayout'
import ProfileCard from '@component/Profile/ProfileCard'
export default function Profile() {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(!showModal)
    }
    return (
        <DashboardLayout>
            <ProfileCard />
        </DashboardLayout>
    )
}
