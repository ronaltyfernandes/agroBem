import colors from '../utils/colors';
import receitas from '../utils/recipes';
import FooterContacts from '../components/FooterContacts';
import contactLinks from '../utils/contactLinks';
import CardRecips from '../components/CardRecips';
import IconButtonReactive from '../components/IconButtonReactive';
import TableIngredients from '../components/TableIngredients';

function RecipesToTry() {
  return (
    <section id="recipes" className="md:px-16 lg:pt-12 h-lvh w-full flex-col">
      <div className="lg:mt-16">
        <h1 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
          Receitas para Experimentar
        </h1>
        <p className="text-lg text-gray-600 mx-4">
          Descubra receitas deliciosas e saudáveis que você pode fazer com nossos produtos.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8 ">
        {receitas.map((receita, index) => (
          <CardRecips
            key={index}
            title={receita.title}
            image={receita.image}
            description={receita.description}
            colors={colors}
            frontButton={({ onClick }) => (
              <IconButtonReactive
                colors={colors}
                handleClick={onClick}
                backgroundColor="white"
                textColor={colors.primary}
                className="w-2/3 h-12"
              >
                <p>Ver ingredientes</p>
              </IconButtonReactive>
            )}
            backButton={({ onClick }) => (
              <IconButtonReactive
                colors={colors}
                handleClick={onClick}
                backgroundColor="white"
                textColor={colors.primary}
                className="w-2/3 h-12"
              >
                <p>Voltar</p>
              </IconButtonReactive>
            )}
            sections={
              <TableIngredients
                ingredients={receita.ingredients}
                quantities={receita.quantities}
                instructions={receita.instructions}
                colors={colors}
              />
            }
          />
        ))}
      </div>
      <FooterContacts
        colors={colors}
        developerName="Ronalty Fernandes"
        contactLinks={contactLinks}
      />
      ;
    </section>
  );
}

export default RecipesToTry;
