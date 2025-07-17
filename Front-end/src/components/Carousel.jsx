import { Card, CardContent, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import colors from '../utils/colors';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarRateIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';

function Carousel({ testimonials, activeIndex, setActiveIndex }) {
  const total = testimonials.length;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="lg:rounded-b-lg lg:py-20 py-10 lg:rounded-tr-lg lg:-mx-16"
      style={{ backgroundColor: colors.grassGreen }}
    >
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={isMobile ? 1.3 : 5} // 👈 Mostra parte do próximo slide
        centeredSlides
        loop
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
      >
        {testimonials.map((item, index) => {
          const rawDistance = Math.abs(index - activeIndex);
          const distance = Math.min(rawDistance, total - rawDistance);

          let blurClass = 'blur-sm scale-80'; // z-0 para todos
          if (distance === 2) {
            blurClass = 'blur-sm scale-80';
          } else if (distance === 1) {
            blurClass = 'blur-0 scale-90';
          } else if (distance === 0) {
            blurClass = 'blur-0 scale-100 shadow-xl'; // Só o central sobreposto
          }
          return (
            <SwiperSlide key={index} className="justify-center box-border">
              <Card
                className={`lg:w-100 h-160 lg:h-150 transition-all px-6 lg:border 
                  bg-white duration-300 ease-in-out ${blurClass}`}
              >
                <CardContent>
                  <div className="justify-self-start mb-4">
                    <Typography variant="h3" style={{ color: colors.primary }}>
                      <FormatQuoteIcon fontSize="inherit" />
                    </Typography>
                  </div>

                  <div
                    className="lg:mb-4 w-full h-85 lg:h-65 flex flex-col rounded-sm shadow-xl"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <div className="mt-2">
                      <Typography
                        variant="h4"
                        style={{ color: 'gold' }}
                        className="flex items-center p-2 px-4"
                      >
                        {[...Array(5)].map((_, index) => (
                          <StarRateIcon key={index} fontSize="inherit" />
                        ))}
                      </Typography>
                    </div>

                    <div
                      className="flex-grow flex items-center p-4 lg:rounded-sm "
                      style={{ backgroundColor: colors.primary }}
                    >
                      <Typography variant="h5" className="text-white text-left">
                        {item.text}
                      </Typography>
                    </div>
                  </div>

                  <div className="justify-self-end">
                    <Typography variant="h3" style={{ color: colors.primary }}>
                      <FormatQuoteIcon fontSize="inherit" className="w-2 h-2" />
                    </Typography>
                  </div>

                  <hr className="lg:border-t-2 border-gray-300 lg:mt-4" />
                  <div className="mt-6 flex items-center lg:mb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 aspect-square rounded-full object-cover"
                    />
                    <div>
                      <Typography variant="h4" className="ps-2 justify-self-start">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className="ps-2 text-gray-600 justify-self-start px-0.5"
                      >
                        {item.subtitle || 'Cliente'}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

Carousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};

export default Carousel;
