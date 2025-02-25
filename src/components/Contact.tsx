import React, { useRef } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Formulário não encontrado.");
      return;
    }

    emailjs.sendForm('service_t4yqi45', 'template_z967x3u', form.current, '922JgcvAEBKtkOd3Y')
      .then((result) => {
        console.log("Mensagem enviada com sucesso:", result.text);
        alert('Mensagem enviada com sucesso!');
        form.current!.reset();
      }, (error) => {
        console.error("Erro ao enviar mensagem:", error.text);
        alert('Erro ao enviar mensagem: ' + JSON.stringify(error));
      });
  };

  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <h3 className="text-4xl font-bold text-white mb-12 text-center text-animation mt-16">
        CONTATO
      </h3>
      <Container
        sx={{
          background: 'linear-gradient(135deg, #333333, #4b5563, #333333)',
          backgroundSize: '200% 200%',
          animation: 'customGradientBackground 4s ease infinite',
          color: 'white',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="body1" gutterBottom sx={{ fontSize: '1.25rem' }}>
          Entre em contato comigo enviando uma mensagem usando o formulário abaixo.
        </Typography>
        <form ref={form} onSubmit={sendEmail} id="contact-form">
          <TextField
            label="Nome"
            name="name"  
            fullWidth
            margin="normal"
            required
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
            variant="filled"
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}
          />
          <TextField
            label="Email"
            name="email"  
            fullWidth
            margin="normal"
            required
            type="email"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
            variant="filled"
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}
          />
          <TextField
            label="Mensagem"
            name="message"  
            fullWidth
            margin="normal"
            required
            multiline
            rows={6}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
            variant="filled"
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                border: '2px solid transparent',
                borderRadius: '10px',
                p: '8px 24px',
                bgcolor: '#4b5563',
                backdropFilter: 'blur(10px)',
                color: 'white',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 'inherit',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  background: 'none',
                  animation: 'borderEffect 2s linear infinite',
                  zIndex: 0,
                },
                '& > *': {
                  position: 'relative',
                  zIndex: 1,
                },
              }}
            >
              Enviar
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}
