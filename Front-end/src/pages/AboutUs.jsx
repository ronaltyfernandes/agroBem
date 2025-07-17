import { Card } from '@mui/material';
import img from '../assets/agricultor.jpg'; // Adjust the path as necessary
import colors from '../utils/colors';

function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="lg:h-lvh flex flex-col md:flex-row"
      style={{ backgroundColor: colors.secondary }}
    >
      <Card className="lg:w-1/2 w-10/12 m-8 lg:p-8 flex flex-wrap ">
        <div className="p-8">
          <h2
            className="text-5xl font-bold mb-12 lg:mb-12 text-center lg:mt-24 justify-self-start"
            style={{ color: colors.primary }}
          >
            Sobre Nós
          </h2>
          <p className="text-xl text-gray-800 text-justify">
            Desde 2014 temos unido forças com pequenos produtores rurais para levar o melhor da
            agricultura familiar diretamente para a mesa dos consumidores. Nossa missão é promover
            uma alimentação saudável e sustentável, conectando você com os frutos do trabalho árduo
            de agricultores locais.
          </p>
          <hr className="my-12 border-t-2 border-gray-300" />
          <h2
            className="text-5xl font-bold mb-12 text-center mt-8 justify-self-start"
            style={{ color: colors.primary }}
          >
            Nossa Missão
          </h2>
          <p className="text-xl text-gray-800 text-justify mt-8">
            Temos a missão de transformar a forma como você se relaciona com a comida, oferecendo
            produtos frescos, livres de agrotóxicos e com total transparência sobre sua origem.
            Acreditamos que a alimentação saudável deve ser acessível a todos, e por isso,
            trabalhamos incansavelmente para garantir que nossos produtos cheguem até você com a
            máxima qualidade e sabor.
          </p>
        </div>
      </Card>
      <img
        className="lg:w-1/2 m-8 w-10/12 rounded-sm lg:object-cover sm:w-full"
        src={img}
        alt="imagem de plantação"
      ></img>
    </section>
  );
}

export default AboutUs;
