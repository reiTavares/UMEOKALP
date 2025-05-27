import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, MenuItem, Paper } from '@mui/material';

interface FormData {
  parentName: string;
  phone: string;
  childAge: string;
  examType: string;
  message?: string;
}

const examTypes = [
  'Audiometria Infantil',
  'Teste da Orelhinha',
  'Processamento Auditivo Central (TPAC)',
  'Treinamento Auditivo',
  'P300',
  'Audiometria de Estado Estável (ASSR)',
  'BERA/PEATE',
  'Outro (especificar na mensagem)',
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    phone: '',
    childAge: '',
    examType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você integraria com um backend ou serviço de email
    console.log('Dados do formulário:', formData);
    setIsSubmitted(true);
    // Reset form or show success message
    // setFormData({ parentName: '', phone: '', childAge: '', examType: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'primary.light', textAlign: 'center' }} id="contact-form-section">
        <Container maxWidth="sm">
          <Typography variant="h2" component="h2" gutterBottom sx={{ color: 'primary.contrastText' }}>
            Obrigado!
          </Typography>
          <Typography variant="h5" sx={{ color: 'primary.contrastText' }}>
            Sua solicitação de agendamento foi enviada. Entraremos em contato em breve para confirmar.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'primary.light' }} id="contact-form-section">
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ mb: 1, color: 'primary.contrastText' }}>
          Agende um Exame
        </Typography>
        <Typography variant="subtitle1" textAlign="center" sx={{ mb: 6, color: 'primary.contrastText', maxWidth: '700px', mx: 'auto' }}>
          Preencha o formulário abaixo e nossa equipe entrará em contato o mais rápido possível para confirmar seu agendamento e tirar suas dúvidas. Cuidar da audição do seu filho é um ato de amor!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, backgroundColor: 'background.paper', borderRadius: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Nome do Responsável"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Telefone (com DDD)"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Idade da Criança"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="Ex: 2 anos e 6 meses"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Tipo de Exame Desejado"
                  name="examType"
                  value={formData.examType}
                  onChange={handleChange}
                >
                  {examTypes.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mensagem Adicional (opcional)"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Informe aqui se tiver alguma observação ou dúvida."
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="secondary" size="large" sx={{ minWidth: '200px', py:1.5, color: 'white' }}>
                  Agendar Exame
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
