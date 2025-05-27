import React from 'react';
import { Box, Container, Grid, Typography, ImageList, ImageListItem, CardMedia } from '@mui/material';

const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=70',
    title: 'Atendimento Pediátrico Especializado',
  },
  {
    img: 'https://images.unsplash.com/photo-1627163439134-7a8c47e08208?auto=format&fit=crop&w=800&q=70',
    title: 'Sala de Exames Moderna e Acolhedora',
  },
  {
    img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=70',
    title: 'Recepção Confortável para Famílias',
  },
  {
    img: 'https://images.unsplash.com/photo-1580281657640-2G6356835785?auto=format&fit=crop&w=800&q=70', // Brinquedos, ambiente lúdico
    title: 'Ambiente Lúdico para Crianças',
  },
];

// Exemplo de ID de vídeo do YouTube. Substitua pelo ID real do vídeo institucional.
const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ'; // Placeholder (Rick Astley)

const ClinicGallery: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'primary.light' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: 'primary.contrastText' }}>
              Estrutura Física e Humanizada
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'primary.contrastText', lineHeight: 1.8 }}>
              Nossa clínica foi projetada pensando no bem-estar e conforto das crianças e suas famílias. Oferecemos um ambiente acolhedor, com acessibilidade completa e espaços lúdicos que transformam a visita ao especialista em uma experiência positiva e tranquila. Cada detalhe é pensado para que vocês se sintam seguros e bem cuidados.
            </Typography>
            <Typography variant="body1" sx={{ color: 'primary.contrastText', lineHeight: 1.8 }}>
              Acreditamos que um diagnóstico preciso começa com um ambiente que inspira confiança. Nossas instalações são modernas e equipadas com tecnologia de ponta, garantindo a excelência em cada exame.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageList sx={{ width: '100%', height: 'auto', borderRadius: 2, overflow: 'hidden' }} variant="quilted" cols={2} rowHeight={180}>
              {galleryItems.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: '8px' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        
        {/* Seção do Vídeo Institucional */}
        <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography variant="h3" component="h3" gutterBottom sx={{ color: 'primary.contrastText', mb: 4 }}>
            Conheça um Pouco Mais Sobre Nós
          </Typography>
          <CardMedia
            component="iframe"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
            title="Vídeo Institucional da Clínica Som Infantil"
            sx={{
              border: 'none',
              borderRadius: 2,
              width: { xs: '100%', sm: '80%', md: '70%' },
              height: { xs: 200, sm: 300, md: 400 },
              aspectRatio: '16/9',
              boxShadow: 3,
              mx: 'auto' // Centraliza o vídeo
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ClinicGallery;
