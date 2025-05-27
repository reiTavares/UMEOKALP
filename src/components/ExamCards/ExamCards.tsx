import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import AudiologyIcon from '@mui/icons-material/Hearing'; // Ícone genérico para audiologia
import BabyIcon from '@mui/icons-material/ChildCare'; // Teste da orelhinha
import BrainIcon from '@mui/icons-material/Psychology'; // TPAC, P300
import TherapyIcon from '@mui/icons-material/SelfImprovement'; // Treinamento auditivo
import SoundWavesIcon from '@mui/icons-material/GraphicEq'; // BERA, Estado Estável

interface Exam {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactElement; // Ícone MUI
  image?: string; // URL da imagem, se preferir
}

const exams: Exam[] = [
  {
    id: 'audiometria-infantil',
    title: 'Audiometria Infantil',
    description: 'Avalia a capacidade auditiva de crianças com métodos adaptados para cada idade, de forma lúdica e precisa.',
    icon: <AudiologyIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
  },
  {
    id: 'teste-orelhinha',
    title: 'Teste da Orelhinha',
    description: 'Exame neonatal essencial, realizado logo após o nascimento para identificar precocemente possíveis perdas auditivas.',
    icon: <BabyIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
  },
  {
    id: 'tpac',
    title: 'Processamento Auditivo Central (TPAC)',
    description: 'Avalia como o cérebro interpreta os sons, detectando dificuldades de compreensão auditiva que podem impactar o aprendizado.',
    icon: <BrainIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
  },
  {
    id: 'treinamento-auditivo',
    title: 'Treinamento Auditivo (Terapia em Cabine)',
    description: 'Intervenção terapêutica em cabine acústica que desenvolve e aprimora habilidades auditivas em crianças com TPAC.',
    icon: <TherapyIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
  },
  {
    id: 'p300',
    title: 'P300 (Potencial Cognitivo)',
    description: 'Mede a atenção e o processamento cognitivo de sons, essencial para a compreensão da fala e desenvolvimento da linguagem.',
    icon: <BrainIcon sx={{ fontSize: 48, color: 'secondary.main' }} />, // Reutilizando
  },
  {
    id: 'audiometria-estado-estavel',
    title: 'Audiometria de Estado Estável (ASSR)',
    description: 'Avaliação objetiva da audição para crianças pequenas ou que não colaboram com testes auditivos tradicionais.',
    icon: <SoundWavesIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
  },
  {
    id: 'bera-peate',
    title: 'BERA/PEATE (Potencial Evocado Auditivo)',
    description: 'Mede a atividade elétrica do nervo auditivo e tronco encefálico em resposta a estímulos sonoros. Fundamental para bebês.',
    icon: <SoundWavesIcon sx={{ fontSize: 48, color: 'secondary.main' }} />, // Reutilizando
  },
];

const ExamCards: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Exames Realizados com Carinho e Precisão
        </Typography>
        <Typography variant="subtitle1" textAlign="center" sx={{ mb: 8, maxWidth: '700px', mx: 'auto' }}>
          Oferecemos uma gama completa de exames auditivos pediátricos, utilizando tecnologia de ponta e abordagens adaptadas para cada criança, garantindo diagnósticos confiáveis e um futuro com mais qualidade sonora.
        </Typography>
        <Grid container spacing={4}>
          {exams.map((exam) => (
            <Grid item xs={12} sm={6} md={4} key={exam.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundColor: 'background.paper' 
              }}>
                {exam.icon && !exam.image && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3, minHeight: 100 }}>
                    {exam.icon}
                  </Box>
                )}
                {exam.image && (
                  <CardMedia
                    component="img"
                    height="160"
                    image={exam.image}
                    alt={exam.title}
                    sx={{ objectFit: 'cover' }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: 'primary.dark' }}>
                    {exam.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exam.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExamCards;
