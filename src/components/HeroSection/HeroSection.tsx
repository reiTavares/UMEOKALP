import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Typography, Stack, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Logo from '@/components/Logo/Logo'; // Importa o componente Logo

interface HeroSectionProps {
  onAgendarAgoraClick: () => void;
}

const foregroundImageUrls = [
  'https://static.wixstatic.com/media/7c7e48_2eed691be9fd4889a1b6169bf983c759~mv2.png/v1/crop/x_17,y_0,w_498,h_511/fill/w_509,h_525,al_c,lg_1,q_85,enc_avif,quality_auto/7c7e48_2eed691be9fd4889a1b6169bf983c759~mv2.png',
  'https://static.wixstatic.com/media/7c7e48_328ac8f6c996445789c21edcb006a027~mv2.png/v1/crop/x_0,y_0,w_373,h_545/fill/w_369,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c7e48_328ac8f6c996445789c21edcb006a027~mv2.png'
];

const HeroSection: React.FC<HeroSectionProps> = ({ onAgendarAgoraClick }) => {
  const heroBackgroundImageUrl = 'https://images.unsplash.com/photo-1560790671-b76df7389302?auto=format&fit=crop&w=1920&q=80';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foregroundImageUrls.length);
    }, 10000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, md: 8 },
        backgroundImage: `url(${heroBackgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'common.white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch" justifyContent="center">
          {/* Text Content Grid Item */}
          <Grid 
            item 
            xs={12} 
            md={7} 
            order={{ xs: 2, md: 1 }} 
            sx={{ 
              textAlign: { xs: 'center', md: 'left' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Logo sx={{ mb: { xs: 1.5, md: 2 }, mx: { xs: 'auto', md: '0' } }} />
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.3rem', sm: '2.8rem', md: '3.5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              Especializada em Diagnóstico Auditivo Infantil Precoce
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                fontSize: { xs: '1rem', sm: '1.15rem', md: '1.3rem' },
                mb: 4,
                maxWidth: '650px',
                mx: { xs: 'auto', md: 0 },
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
              }}
            >
              Ambiente lúdico, acolhedor e com acessibilidade total, pensado para o conforto e a confiança da sua família.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={onAgendarAgoraClick}
                sx={{
                  minWidth: '220px',
                  py: 1.5,
                  fontSize: '1.1rem',
                  color: 'white',
                }}
              >
                Agendar Agora
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/556137720825"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  minWidth: '220px',
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderColor: 'rgba(255,255,255,0.7)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderColor: 'white',
                  },
                }}
              >
                Falar no WhatsApp
              </Button>
            </Stack>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 4, textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
            >
              <PhoneIcon sx={{ mr: 1, fontSize: { xs: '1.4rem', md: '1.7rem' } }} />
              <Typography variant="h6" component="p" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 600 }}>
                (61) 3772-0825
              </Typography>
            </Box>
          </Grid>

          {/* Image Grid Item */}
          <Grid 
            item 
            xs={10} 
            sm={8} 
            md={5} 
            order={{ xs: 1, md: 2 }} 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end', 
              alignItems: 'center', 
              textAlign: 'center',
            }}
          >
            <Box
              component="img"
              src={foregroundImageUrls[currentImageIndex]}
              alt="Ilustração de cuidado auditivo infantil e fonoaudiologia pediátrica"
              sx={{
                maxWidth: '100%',
                maxHeight: { xs: '280px', sm: '340px', md: '480px' },
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
