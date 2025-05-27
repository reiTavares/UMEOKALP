import React, { useRef } from 'react';
import { Box, Fab, AppBar, Toolbar, Button, Container, Typography, useTheme, useScrollTrigger, Slide } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Seo from '@components/Seo';
import HeroSection from '@components/HeroSection';
import Features from '@components/Features';
import ExamCards from '@components/ExamCards';
import ClinicGallery from '@components/ClinicGallery';
import InsuranceSection from '@components/InsuranceSection';
import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface ScrollTopProps {
  children: React.ReactElement;
  targetRef?: React.RefObject<HTMLElement>; // For specific scroll target, not used here for window
}

function ScrollTop(props: ScrollTopProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // Show button after 100px scroll
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Fab 
      color="secondary" 
      size="small" 
      onClick={handleClick} 
      role="presentation" 
      sx={{ 
        position: 'fixed', 
        bottom: 16, 
        right: 16, 
        zIndex: 100,
        display: trigger ? 'flex' : 'none' // Show/hide based on trigger
      }}
      aria-label="scroll back to top"
    >
      {children}
    </Fab>
  );
}


function App() {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const handleAgendarAgoraClick = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Seo
        title="Diagnóstico Auditivo Infantil Precoce"
        description="Clínica Som Infantil: especializada em diagnóstico auditivo infantil precoce. Ambiente lúdico, acolhedor e com acessibilidade total para o cuidado da audição das crianças em Brasília."
        canonicalUrl="https://www.clinicasominfantil.com.br" // Substituir pela URL real
        imageUrl="https://images.unsplash.com/photo-1604905697592-22082d012992?auto=format&fit=crop&w=1200&q=80"
        keywords="audiometria infantil, teste da orelhinha, TPAC, BERA, PEATE, diagnóstico auditivo, clínica pediátrica, audição infantil, brasília, df"
      />
      
      <div id="back-to-top-anchor" />

      <HideOnScroll>
        <AppBar position="sticky" elevation={1} sx={{ backgroundColor: theme.palette.background.paper }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              <Typography 
                variant="h6" 
                component="a" 
                href="/" 
                sx={{ 
                  color: theme.palette.primary.dark, 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  '&:hover': {
                    color: theme.palette.secondary.main
                  }
                }}
              >
                Clínica Som Infantil
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleAgendarAgoraClick}
                sx={{ color: 'white' }}
              >
                Agendar Agora
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <main>
        <HeroSection onAgendarAgoraClick={handleAgendarAgoraClick} />
        <Features />
        <ExamCards />
        <ClinicGallery />
        <InsuranceSection />
        {/* Pass ref to ContactForm's outer Box for scrolling */}
        <Box ref={contactFormRef}>
          <ContactForm />
        </Box>
      </main>

      <Footer />

      <Fab
        color="primary"
        aria-label="Falar no WhatsApp"
        href="https://wa.me/556137720825"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 24 }, // Ajuste para não sobrepor o scroll to top
          left: { xs: 16, md: 24 },
          zIndex: 100,
          backgroundColor: '#25D366', // Cor oficial do WhatsApp
          color: 'white',
          '&:hover': {
            backgroundColor: '#1DAE52',
          }
        }}
      >
        <WhatsAppIcon />
      </Fab>
      
      <ScrollTop>
        <KeyboardArrowUpIcon />
      </ScrollTop>
    </>
  );
}

export default App;
