import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function IconButtonReactive({
  colors,
  children,
  handleClick,
  backgroundColor,
  textColor,
  className,
}) {
  return (
    <Button
      className={`transition-transform delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 ${className || ''}`}
      sx={{
        fontSize: '1rem',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: colors.lightgreen,
          mr: '2.5px',
        },
        backgroundColor: backgroundColor ? `${backgroundColor}` : '',
        color: textColor ? `${textColor}` : '',
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

export default IconButtonReactive;

IconButtonReactive.propTypes = {
  colors: PropTypes.shape({
    lightgreen: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired, // Agora recebe qualquer elemento React
  handleClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};
