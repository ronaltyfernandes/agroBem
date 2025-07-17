import bolinhoDeCarne from '../assets/bolinho-de-carne.webp';
import costelaBovina from '../assets/costela-bovina.jpg';
import picanhaInvertida from '../assets/picanha-invertida.jpg';

const receitas = [
  {
    id: 1,
    title: 'Bolinhos de Carne',
    description:
      'Deliciosos bolinhos de carne com borda crocante, macios por dentro e ricos em proteínas.',
    image: bolinhoDeCarne,
    ingredients: [
      'carne moída',
      'ovo',
      'farinha de rosca',
      'cebola picada',
      'alho picado',
      'sal',
      'pimenta-do-reino',
      'salsinha',
      'óleo para fritar',
    ],
    quantities: [
      '500g',
      '1 unidade',
      '1 xícara',
      '1/2 unidade',
      '2 dentes',
      'a gosto',
      'a gosto',
      'a gosto',
      'suficiente para fritar',
    ],
    instructions: [
      'Em uma tigela, misture a carne moída, ovo, farinha de rosca, cebola, alho, sal, pimenta e salsinha.',
      'Modele bolinhos pequenos com as mãos.',
      'Aqueça o óleo em fogo médio.',
      'Frite os bolinhos até ficarem dourados e cozidos por dentro.',
      'Retire e escorra em papel toalha.',
      'Sirva quente como petisco ou acompanhamento.',
    ],
  },
  {
    id: 2,
    title: 'Costela Bovina',
    description: 'Clássica receita de costela bovina assada na brasa, suculenta e saborosa.',
    image: costelaBovina,
    ingredients: [
      'costela bovina',
      'sal grosso',
      'alho',
      'cebola',
      'folhas de louro',
      'pimenta-do-reino',
      'vinho tinto seco (opcional)',
    ],
    quantities: ['2kg', 'a gosto', '4 dentes', '1 unidade', '2 folhas', 'a gosto', '1/2 xícara'],
    instructions: [
      'Tempere a costela com sal grosso, alho amassado, pimenta, louro e cebola picada.',
      'Se desejar, regue com vinho tinto e deixe marinando por algumas horas.',
      'Aqueça a churrasqueira ou forno em temperatura média-baixa.',
      'Asse a costela por cerca de 4 horas, virando de tempos em tempos.',
      'Retire quando estiver bem dourada e macia.',
      'Sirva com acompanhamentos de sua preferência.',
    ],
  },
  {
    id: 3,
    title: 'Picanha Invertida',
    description:
      'Uma picanha suculenta, preparada de forma inovadora: recheada com queijo e coberta com bacon.',
    image: picanhaInvertida,
    ingredients: [
      'picanha',
      'queijo muçarela',
      'bacon fatiado',
      'alho',
      'sal',
      'pimenta-do-reino',
      'azeite',
    ],
    quantities: [
      '1 peça (cerca de 1kg)',
      '300g',
      '200g',
      '3 dentes',
      'a gosto',
      'a gosto',
      '2 colheres de sopa',
    ],
    instructions: [
      'Com uma faca, abra a picanha ao meio, formando uma bolsa.',
      'Tempere com alho, sal e pimenta.',
      'Recheie com queijo muçarela.',
      'Feche com palitos ou barbante e envolva com fatias de bacon.',
      'Aqueça uma grelha ou forno e asse a picanha por cerca de 40 minutos, virando para dourar todos os lados.',
      'Retire, fatie e sirva com acompanhamentos.',
    ],
  },
];

export default receitas;
