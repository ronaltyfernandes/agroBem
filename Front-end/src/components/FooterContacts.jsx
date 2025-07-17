import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function FooterContacts({ colors, developerName, contactLinks }) {
  return (
    <footer
      className="flex lg:mt-12 lg:h-22 text-center text-white p-8 lg:p-0 lg:-mx-16 lg:-mb-8
      justify-around items-center flex-wrap"
      style={{ backgroundColor: colors.grassGreen }}
    >
      <div>
        <Typography>
          Desenvolvido por:{' '}
          <span className="bg-white rounded-sm p-1" style={{ color: colors.grassGreen }}>
            {developerName}
          </span>
        </Typography>
      </div>
      <div className="flex items-center gap-4 pt-4 lg:pt-0 ">
        {contactLinks.map(({ href, icon, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-4 rounded-full lg:shadow-md scale-160 lg:scale-100 transition-transform"
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

FooterContacts.propTypes = {
  colors: PropTypes.shape({
    grassGreen: PropTypes.string.isRequired,
  }).isRequired,
  developerName: PropTypes.string.isRequired,
  contactLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterContacts;
