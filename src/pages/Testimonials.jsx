import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from '../components/Carousel';
import colors from '../utils/colors';
import testimonials from '../utils/testimonials';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      className="md:px-16 py-12 lg:h-lvh lg:w-full"
      style={{ backgroundColor: 'white' }}
    >
      <div
        className="lg:w-200 lg:mt-20 lg:-ms-20 lg:rounded-t-lg"
        style={{ backgroundColor: colors.grassGreen }}
      >
        <h2 className="text-4xl lg:pb-4 lg:ps-12 justify-self-start p-4" style={{ color: 'white' }}>
          Não acredite só em nossa palavra...
        </h2>
      </div>
      <Carousel
        className="lg:w-full overflow-x-hidden"
        testimonials={testimonials}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
}

export default Testimonials;
