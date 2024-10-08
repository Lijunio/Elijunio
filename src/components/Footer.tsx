import { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { WhatsApp, LinkedIn, GitHub } from '@mui/icons-material';

const Footer: FC = () => {
  const message = encodeURIComponent("Olá, estava olhando seu portfólio e consegui seu contato por ele.");

  return (
    <footer className="text-white py-6 mt-12 text-center">
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <IconButton
          sx={{ color: 'white' }}
          href={`https://wa.me/5531973112693?text=${message}`} 
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton
          sx={{ color: 'white' }}
          href="https://www.linkedin.com/in/eliasjsribeiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton
          sx={{ color: 'white' }}
          href="https://github.com/Lijunio" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ fontSize: '1.25rem' }}>
        &copy; 2024 Elias Ribeiro
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ fontSize: '1.00rem' }}>
        Ultima atualização 02/10/2024
      </Typography>
    </footer>
  );
};

export default Footer;
