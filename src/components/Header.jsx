import { ButtonGroup } from '@mui/material';
import PropTypes from 'prop-types';
import IconButtonReactive from './IconButtonReactive';
import { useEffect, useState } from 'react';

function Header({ colors, logo, buttons }) {
  const [activeSection, setActiveSection] = useState(buttons[0]?.href);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClickButton = link => {
    const el = document.getElementById(`${link}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Fecha o menu mobile ao clicar
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Define no carregamento inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = buttons[0]?.href;
      buttons.forEach(btn => {
        const section = document.getElementById(btn.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) {
            current = btn.href;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="w-full fixed top-0 z-220 bg-opacity-30 backdrop-blur-md 
        text-white px-4 py-3 sm:px-8 flex flex-col sm:flex-row sm:justify-between 
        sm:items-center h-auto sm:h-28"
    >
      {/* Logo + Título */}
      <div
        className="flex items-center justify-between cursor-pointer w-full sm:w-auto"
        onClick={() => handleClickButton('welcome')}
      >
        <img src={logo} alt="logo Agro Bem" className="w-16 sm:w-20" />
        <h1 className="text-2xl sm:text-4xl ml-2 sm:pt-5" style={{ color: colors.primary }}>
          AgroBem
        </h1>
        {/* Botão hamburger visível apenas no mobile */}
        {isMobile ? (
          <button
            className=" ml-auto p-2 focus:outline-none"
            onClick={e => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Abrir menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        ) : null}
      </div>

      {/* Navegação desktop */}
      {!isMobile ? (
        <ButtonGroup
          variant="text"
          className="sm:auto sm:flex flex-wrap justify-center mt-4 sm:mt-0 sm:space-x-6"
          color="white"
        >
          {buttons.map(button => (
            <IconButtonReactive
              key={button.label}
              colors={colors}
              handleClick={() => handleClickButton(button.href)}
              backgroundColor={activeSection === button.href ? colors.lightgreen : colors.primary}
              className={activeSection === button.href ? 'ring-2 ring-white' : ''}
            >
              <p className="text-xs sm:text-base">{button.label}</p>
            </IconButtonReactive>
          ))}
        </ButtonGroup>
      ) : null}

      {/* Navegação mobile */}
      {mobileMenuOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black/80 z-40 h-lvh"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-0 z-[1000] flex flex-col items-end">
            {' '}
            {/* Use um valor muito alto para garantir */}
            <div className="bg-white text-black w-3/4 max-w-xs  shadow-lg p-6 flex flex-col gap-4">
              <button
                className="self-end mb-4 text-2xl"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                &times;
              </button>
              {buttons.map(button => (
                <button
                  key={button.label}
                  className={`text-lg text-left py-3 px-3 h-full w-full rounded transition ${
                    activeSection === button.href ? 'font-bold' : 'hover:bg-gray-100'
                  }`}
                  style={
                    activeSection === button.href
                      ? { backgroundColor: colors.primary, color: 'white' }
                      : {}
                  }
                  onClick={() => handleClickButton(button.href)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    lightgreen: PropTypes.string,
  }).isRequired,
  logo: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
