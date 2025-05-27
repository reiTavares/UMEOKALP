import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: 'grey.900', // Um cinza bem escuro para o rodapé
        color: 'grey.300', // Texto claro para contraste
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'common.white', fontWeight: 600 }}>
              Clínica Som Infantil
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Especializada em diagnóstico auditivo infantil precoce. Cuidando com carinho da audição do seu bem mais precioso.
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: 'primary.light'} }} aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: 'primary.light'} }} aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'common.white', fontWeight: 600 }}>
              Contato e Localização
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, mt: 0.5, color: 'primary.light' }} />
              <Typography variant="body2">
                SGAS 915 Conjunto O, SN Sala 31 andar -1<br />
                Edifício Advance 2, Asa Sul, Brasília - DF<br />
                CEP: 70390-150
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, color: 'primary.light' }} />
              <Typography variant="body2">(61) 3772-0825</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'common.white', fontWeight: 600 }}>
              Horário de Atendimento
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <AccessTimeIcon sx={{ mr: 1, fontSize: '1.2rem', color: 'primary.light' }} />
              <Typography variant="body2">Segunda a Quinta: 08h–18h</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccessTimeIcon sx={{ mr: 1, fontSize: '1.2rem', color: 'primary.light' }} />
              <Typography variant="body2">Sexta: 08h–17h</Typography>
            </Box>
            <Link href="/politica-de-privacidade" color="inherit" variant="body2" sx={{ mr: 2, '&:hover': { color: 'primary.light'} }}>
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" color="inherit" variant="body2" sx={{ '&:hover': { color: 'primary.light'} }}>
              Termos de Uso
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" textAlign="center" sx={{ pt: 4, mt: 4, borderTop: '1px solid', borderColor: 'grey.700' }}>
          © {new Date().getFullYear()} Clínica Som Infantil. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
