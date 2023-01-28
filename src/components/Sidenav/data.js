import DashboardIcon from './icons/dashboard';
import AdmissionIcon from './icons/admission';
import CoursesIcon from './icons/courses';
import ResultsIcon from './icons/results';
import PaymentIcon from './icons/payment';
import ProfileIcon from './icons/profile';
import AccomodationIcon from './icons/accomodation';

const data = [
    {
        title: 'dashboard',
        icon: <DashboardIcon />,
        link: '/dashboard',
    },
    {
        title: 'Profile',
        icon: <ProfileIcon />,
        link: '/dashboard/profile',
    },
    {
        title: 'Payment',
        icon: <PaymentIcon />,
        link: '/dashboard/payment',
    },
    {
        title: 'admission',
        icon: <AdmissionIcon />,
        link: '/dashboard/admission',
    },
    {
        title: 'accomodation',
        icon: <AccomodationIcon />,
        link: '/dashboard/accomodation',
    },
    {
        title: 'Courses',
        icon: <CoursesIcon />,
        link: '/dashboard/courses',
    },
    {
        title: 'Result',
        icon: <ResultsIcon />,
        link: '/dashboard/result',
    },

];

export default data;


