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
        link: '/student',
    },
    {
        title: 'Profile',
        icon: <ProfileIcon />,
        link: '/student/profile',
    },
    {
        title: 'Payment',
        icon: <PaymentIcon />,
        link: '/student/payment',
    },
    {
        title: 'admission',
        icon: <AdmissionIcon />,
        link: '/student/admission',
    },
    {
        title: 'accomodation',
        icon: <AccomodationIcon />,
        link: '/student/accomodation',
    },
    {
        title: 'Courses',
        icon: <CoursesIcon />,
        link: '/student/courses',
    },
    {
        title: 'Result',
        icon: <ResultsIcon />,
        link: '/student/result',
    },

];

export default data;


