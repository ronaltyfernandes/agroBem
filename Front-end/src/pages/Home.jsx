import Welcome from '../pages/Welcome';
import Header from '../components/Header';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import RecipesToTry from './RecipesToTry';
import colors from '../utils/colors';
import buttons from '../utils/buttons';
import logo from '../assets/logoAgroBem.png'; // Adjust the path as necessary
import ContactFloatButton from '../components/ContactFloatButton';
import { phoneNumber, message } from '../utils/phoneNumber';

function Home() {
  return (
    <div className="h-lvh">
      <ContactFloatButton phoneNumber={phoneNumber} message={message} />
      <Welcome />
      <AboutUs />
      <Testimonials />
      <RecipesToTry />
      <Header logo={logo} buttons={buttons} colors={colors} />
    </div>
  );
}

export default Home;
