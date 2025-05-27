import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import HearingIcon from '@mui/icons-material/Hearing'; // Audição
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'; // Crianças
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'; // Pontualidade
import VolumeUpIcon from '@mui/icons-material/VolumeUp'; // Acústica

interface FeatureItemProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={0}
      sx={{
        p: 3,
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'background.paper', // Fundo do card
        border: '1px solid',
        borderColor: 'primary.light', // Borda suave com cor primária clara
        borderRadius: 3, // Usando o borderRadius do tema
      }}
    >
      <Box sx={{ color: 'secondary.main', fontSize: '3rem', mb: 2 }}>{icon}</Box>
      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, color: 'text.primary' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  </Grid>
);

const featuresData = [
  {
    icon: <ChildFriendlyIcon fontSize="inherit" />,
    title: 'Profissionais Especializados',
    description: 'Equipe dedicada aos cuidados infantis e à saúde auditiva, garantindo um atendimento sensível e eficaz.',
  },
  {
    icon: <VolumeUpIcon fontSize="inherit" />,
    title: 'Ambiente Acolhedor',
    description: 'Espaço acusticamente tratado e preparado para receber famílias, proporcionando conforto e tranquilidade.',
  },
  {
    icon: <AccessTimeFilledIcon fontSize="inherit" />,
    title: 'Atendimento Pontual',
    description: 'Valorizamos seu tempo. Consultas com hora marcada e compromisso com a pontualidade.',
  },
  {
    icon: <HearingIcon fontSize="inherit" />,
    title: 'Exames em Sala Tratada',
    description: 'Todos os exames auditivos são realizados em sala acusticamente tratada para diagnósticos precisos.',
  },
];

const Features: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'primary.light' /* Fundo suave para a seção */ }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ mb: 6, color: 'primary.contrastText' }}>
          Por que escolher nossa clínica?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {featuresData.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
