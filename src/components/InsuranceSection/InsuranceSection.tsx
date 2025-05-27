import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
// Importe SVGs dos logos ou use MUI Icons se disponíveis/apropriados
// Como não posso adicionar SVGs, usarei placeholders textuais.
// import AsteLogo from './logos/aste.svg'; // Exemplo

interface Insurance {
  name: string;
  logoComponent?: React.ReactElement; // Para ícones MUI
  logoUrl?: string; // Para imagens de logo
}

const insurances: Insurance[] = [
  { name: 'ASTE Saúde' },
  { name: 'AFFEGO' },
  { name: 'FASCAL' },
  { name: 'PROASA' },
  { name: 'TST Saúde' },
  // Adicione mais convênios conforme necessário
];

const InsuranceSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ mb: 1 }}>
          Convênios Atendidos
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
          (Atendimento exclusivo para exames)
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {insurances.map((insurance) => (
            <Grid item xs={6} sm={4} md={2.4} key={insurance.name}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '80px', // Altura fixa para uniformidade
                  textAlign: 'center',
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                }}
              >
                {/* Idealmente, aqui iria <img src={insurance.logoUrl} alt={insurance.name} style={{maxWidth: '100%', maxHeight: '100%'}} /> ou {insurance.logoComponent} */}
                <Typography variant="caption" sx={{ fontWeight: 500 }}>
                  {insurance.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 4 }}>
          Verifique com seu convênio a cobertura específica para os exames desejados. Estamos à disposição para auxiliar com informações.
        </Typography>
      </Container>
    </Box>
  );
};

export default InsuranceSection;
