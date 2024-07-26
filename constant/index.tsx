import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, CurrencyDollarIcon, ChartBarIcon, ExclamationCircleIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'
import {
  PaperAirplaneIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  KeyIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about', label: 'About' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/team', key: 'team', label: 'Team' },
  { href: '/faq', key: 'faq', label: 'FAQ' },
  { href: '/reports', key: 'reports', label: 'Reports' },
  { href: '/contact', key: 'contact_us', label: 'Contact Us' },
];

export const Features2 = [
  {
    name: 'FAST',
    description: 'Get cash against your invoice within 48 hours.',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'BEST RETURN ON INVESTMENT',
    description: 'You get attractive returns starting from 4% on your investment.',
    icon: ChartBarIcon,
  },
  {
    name: 'CONVENIENCE',
    description: 'You can invest and borrow regardless of your location.',
    icon: CheckCircleIcon,
  },
  {
    name: 'SECURE',
    description: 'Security of your investment is our priority.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'TRANSPARENCY',
    description: 'You are in control of your investment with all available information.',
    icon: KeyIcon,
  },
  {
    name: 'SYNDICATED FINANCING',
    description: 'Multiple investors can invest in a single invoice.',
    icon: UsersIcon,
  },
];

const Features1 = [
  {
    name: 'Cover your overheads & payroll',
    description: 'Manage overhead costs and payroll efficiently with immediate access to funds through invoice discounting.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Invest in business growth and hiring',
    description: 'Use available funds to invest in growth opportunities and expand your workforce.',
    icon: ChartBarIcon,
  },
  {
    name: 'Pay off those unexpected expenses',
    description: 'Handle unforeseen costs with ease by advancing funds from outstanding invoices.',
    icon: ExclamationCircleIcon,
  },
  {
    name: 'Avoid waiting 30, 60 or 90 days to get paid',
    description: 'Get paid faster by advancing payments for your invoices.',
    icon: ClockIcon,
  },

];

export { Features1 };

export const Values = [
  { title: "Customer is the Boss", description: "We take pleasure in attending our customer needs." },
  { title: "Innovation", description: "Creative minds are our core competence." },
  { title: "Transparency", description: "We are honest and open with our stakeholders." },
  { title: "Dare", description: "We embrace initiative by our employees to strive for excellence." },
  { title: "Kaizen", description: "We believe in Japanese principle of continuous improvement in the delivery of excellent services to our customers." },
];

export const stats = [
  { icon: '/path/to/icon1.png', value: '250+', description: 'Invoices' },
  { icon: '/path/to/icon2.png', value: '128+', description: 'Active Borrowers' },
  { icon: '/path/to/icon3.png', value: '264+', description: 'Investors' },
];


export const testimonials = [
  {
    name: "John Doe",
    role: "Web Developer",
    text: "Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus quis, elementum nunc.",
    image: "/assets/user.png",
    rating: 5
  },
  {
    name: "Jane Smith",
    role: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/user.png",
    rating: 4
  },
  {
    name: "John Doe",
    role: "Web Developer",
    text: "Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus quis, elementum nunc.",
    image: "/assets/user.png",
    rating: 5
  },
  {
    name: "Jane Smith",
    role: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/user.png",
    rating: 4
  },
  // Add more testimonials as needed
];
export const teamMembers = [
  {
    name: 'Gumodoka M.Mehuna',
    role: 'CO founder & Cheaf Executive Officer',
    image: '/assets/team/gumo.jpg',
    social: {

      linkedin: 'https://linkedin.com/in/martasmith',

    },
  },
  {
    name: 'Inshmael Oneya',
    role: 'Head of Credit Risk & Compliance',
    image: '/assets/team/oneya.jpg',
    social: {

      linkedin: 'https://linkedin.com/in/darrenrandolph',

    },
  },
  {
    name: 'Ombeni Uhuru Ntenzi',
    role: 'Heading of Trading & Investment',
    image: '/assets/team/omben.jpg',
    social: {

      linkedin: 'https://linkedin.com/in/darrenrandolph',

    },
  },
  {
    name: 'Phoibe Manase',
    role: 'Head of Finance',
    image: '/assets/user.png',
    social: {

      linkedin: 'https://linkedin.com/in/ayatblack',

    },
  },
];