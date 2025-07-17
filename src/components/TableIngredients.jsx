import PropTypes from 'prop-types';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@mui/material';

function TableIngredients({ ingredients, quantities, instructions, colors }) {
  return (
    <div>
      {/* Tabela de Ingredientes */}
      <TableContainer sx={{ mt: 2 }}>
        <Typography variant="h6" sx={{ color: colors.primary, mb: 1 }}>
          Ingredientes
        </Typography>
        <Table size="small" aria-label="tabela de ingredientes">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: colors.primary }}>Quantidade</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: colors.primary }}>Ingrediente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredients.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell sx={{ border: 0, fontSize: 14 }}>{quantities[idx] || ''}</TableCell>
                <TableCell sx={{ border: 0, color: 'text.primary', fontSize: 14 }}>
                  {item}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Tabela de Preparo */}
      <TableContainer sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ color: colors.primary, mb: 1 }}>
          Modo de Preparo
        </Typography>
        <Table size="small" aria-label="tabela de preparo">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: colors.primary }}>Passo</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: colors.primary }}>Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instructions.map((step, idx) => (
              <TableRow key={idx}>
                <TableCell sx={{ border: 0, fontSize: 14 }}>{idx + 1}</TableCell>
                <TableCell sx={{ border: 0, color: 'text.primary', fontSize: 14 }}>
                  {step}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

TableIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  quantities: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableIngredients;
