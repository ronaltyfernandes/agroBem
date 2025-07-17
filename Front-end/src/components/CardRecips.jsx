import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function CardRecips({
  title,
  image,
  description,
  frontButton,
  backButton,
  sections,
  colors,
  cardWidth = 'w-full sm:w-[48%] md:w-[30%] lg:w-[30%]',
  cardHeight = 'h-[480px]',
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Card className={`${cardWidth} perspective-[1000px]`}>
      <div
        className={`relative w-full ${cardHeight} transition-transform duration-700`}
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Frente */}
        <div
          className="absolute w-full h-full"
          style={{
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          }}
        >
          <CardMedia component="img" className="h-84" image={image} alt={title} />
          <CardContent>
            <Typography variant="h4" component="h2" sx={{ color: colors.primary, mt: 1 }}>
              <strong>{title}</strong>
            </Typography>
            <Typography variant="body2" sx={{ color: 'GrayText', mt: 2 }}>
              {description}
            </Typography>
          </CardContent>
        </div>

        {/* Verso */}
        <div
          className="absolute w-full"
          style={{
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: colors.primary,
          }}
        >
          <CardContent className="p-0">
            <div
              className="px-4 py-2 flex items-center"
              style={{
                backgroundColor: colors.primary,
                position: 'sticky',
                top: 0,
                zIndex: 2,
                height: '90px',
              }}
            >
              <Typography variant="h4" sx={{ color: 'white' }}>
                <strong>{title}</strong>
              </Typography>
            </div>
            <div
              className="overflow-y-auto w-full"
              style={{
                backgroundColor: 'white',
                height: '370px',
                maxHeight: '370px',
              }}
            >
              {sections}
            </div>
          </CardContent>
        </div>
      </div>

      {/* Botão */}
      <div
        className="flex justify-center pt-4 pb-4 w-full"
        style={{ backgroundColor: colors.primary }}
      >
        {!flipped
          ? frontButton({ onClick: () => setFlipped(true) })
          : backButton
            ? backButton({ onClick: () => setFlipped(false) })
            : null}
      </div>
    </Card>
  );
}

CardRecips.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  frontButton: PropTypes.func.isRequired, // recebe ({onClick}) e retorna um botão
  backButton: PropTypes.func, // opcional, recebe ({onClick}) e retorna um botão
  sections: PropTypes.node.isRequired, // conteúdo do verso (tabelas, blocos, etc)
  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    lightgreen: PropTypes.string,
  }).isRequired,
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
};

export default CardRecips;
