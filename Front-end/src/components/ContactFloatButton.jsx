import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PropTypes from 'prop-types';

function ContactFloatButton({ phoneNumber, message }) {
  return (
    <Button
      className="bg-green-500 hover:bg-green-600 shadow-lg bottom-4 right-4 z-50"
      variant="contained"
      color="success"
      sx={{
        position: 'fixed',
        minWidth: 0,
        width: 64,
        height: 64,
        p: 0,
        borderRadius: '50%',
      }}
      onClick={() =>
        window.open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || '')}`,
          '_blank'
        )
      }
    >
      <WhatsAppIcon sx={{ fontSize: 36, color: 'white' }} className="rounded-full" />
    </Button>
  );
}

ContactFloatButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default ContactFloatButton;
