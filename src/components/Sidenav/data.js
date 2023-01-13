import HomeIcon from './icons/home';
import StatusIcon from './icons/status';
import CreditsIcon from './icons/credits';
import ArchivesIcon from './icons/archives';
import DocumentationIcon from './icons/documentation';

const data = [
    {
        title: 'dashboard',
        icon: <HomeIcon />,
        link: '/dashboard',
    },
    {
        title: 'Profile',
        icon: <DocumentationIcon />,
        link: '/dashboard/profile',
    },
    {
        title: 'admission',
        icon: <StatusIcon />,
        link: '/dashboard/admission',
    },
    {
        title: 'Payment',
        icon: <ArchivesIcon />,
        link: '/dashboard/payment',
    },
    {
        title: 'Courses',
        icon: <CreditsIcon />,
        link: '/dashboard/courses',
    },

];

export default data;


