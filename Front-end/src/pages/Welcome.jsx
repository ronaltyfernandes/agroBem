import { Card } from '@mui/material';
import colors from '../utils/colors';
import IconButtonReactive from '../components/IconButtonReactive';
import { useState } from 'react';
import ModalComprarAgora from '../components/modalComprarAgora';

function Welcome() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="welcome"
      className="bg-[url('src/assets/Farm_Header.webp')] bg-cover h-full bg-cente pb-12 pt-24 lg:0 pt-8 lg-pt-0"
    >
      <div className="justify-center flex flex-col h-full text-white">
        <Card className="w-10/12 md:w-4/8 p-8 mx-auto">
          <p className="text-lg text-gray-400 text-justify">Bem vindo à vida saudável,</p>
          <h1 className="text-5xl font-bold mb-16 mt-4" style={{ color: colors.primary }}>
            Bem Vindo ao AgroBem!
          </h1>
          <p className="text-xl text-gray-800 text-justify">
            Uma solução que busca integrar os produtos saudáveis diretamente do agro ao consumidor
            final. Sem hormônios, sem agrotóxicos, sem maus-tratos, sem abrir mão da sua saúde.
          </p>
          <p className="text-xl text-gray-800 mt-6 text-justify">
            Junte-se a nós na promoção da agricultura sustentável e fresca, garantindo que você e
            sua família tenham acesso a alimentos saudáveis, nutritivos e de qualidade superior.
          </p>
          <div className="justify-self-end mt-12">
            <IconButtonReactive
              colors={colors}
              handleClick={() => {
                setOpen(true);
              }}
              backgroundColor={colors.primary}
              textColor={'white'}
            >
              <p>{'Comprar agora'}</p>
            </IconButtonReactive>
          </div>
        </Card>
      </div>
      <ModalComprarAgora open={open} setOpen={setOpen} />
    </section>
  );
}

export default Welcome;
