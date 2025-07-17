import PropTypes from 'prop-types';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import colors from '../utils/colors';
import IconButtonReactive from './IconButtonReactive';
import { message, phoneNumber } from '../utils/phoneNumber';

function ModalComprarAgora({ open, setOpen }) {
  return (
    <div>
      {open && (
        <>
          {/* Overlay escuro */}
          <div className="fixed inset-0 bg-black/75 z-40" onClick={() => setOpen(false)} />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-sm shadow-xl p-8 w-full max-w-md relative h-80">
              <div
                className="-m-8 mb-12 rounded-t-sm h-3/4 flex items-center justify-center flex-col"
                style={{ backgroundColor: colors.primary }}
              >
                <h2 className="text-4xl font-bold mb-4 text-center text-white">
                  <strong>Comprar Agora</strong>
                </h2>
                <p className="text-white text-sm text-center mb-6">
                  Gostaria de falar com um de nossos atendentes?
                </p>
              </div>

              <div className="flex gap-4 items-center justify-center">
                <IconButtonReactive
                  colors={colors}
                  textColor="white"
                  handleClick={() =>
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || '')}`,
                      '_blank'
                    )
                  }
                  startIcon={<WhatsAppIcon />}
                  className="hover:!bg-[#20c054] text-white w-2/4"
                  fullWidth
                  backgroundColor={colors.primary}
                >
                  <WhatsAppIcon />
                  WhatsApp
                </IconButtonReactive>

                <IconButtonReactive
                  colors={colors}
                  textColor="white"
                  handleClick={() => setOpen(false)}
                  startIcon={<CloseIcon />}
                  className="!bg-red-900 hover:!bg-red-700 text-white w-2/4"
                  fullWidth
                >
                  <CloseIcon />
                  Fechar
                </IconButtonReactive>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

ModalComprarAgora.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ModalComprarAgora;
