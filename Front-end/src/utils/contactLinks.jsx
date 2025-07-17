import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { phoneNumber, message } from './phoneNumber';

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ronalty-fernandes-dos-santos',
    icon: <LinkedInIcon fontSize="large" className="hover:text-blue-400 transition-colors" />,
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || '')}`,
    icon: <WhatsAppIcon fontSize="large" className="hover:text-green-400 transition-colors" />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ronaltyfernandes',
    icon: <GitHubIcon fontSize="large" className="hover:text-gray-400 transition-colors" />,
  },
];

export default contactLinks;
