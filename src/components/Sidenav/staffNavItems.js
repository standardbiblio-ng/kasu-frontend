import DashboardIcon from './icons/dashboard';
import AdmissionIcon from './icons/admission';
import PaymentIcon from './icons/payment';
import ProfileIcon from './icons/profile';

const data = [
    {
        title: 'dashboard',
        icon: <DashboardIcon />,
        link: '/staff',
    },
    {
        title: 'Profile',
        icon: <ProfileIcon />,
        link: '/staff/profile',
    },
    {
        title: 'Courses',
        icon: <PaymentIcon />,
        link: '/staff/courses',
    },
    {
        title: 'Result',
        icon: <AdmissionIcon />,
        link: '/staff/results',
    },
];

export default data;


