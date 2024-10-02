import { Card, CardContent, Typography, Grid, Box, LinearProgress } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/system';
import Image from 'next/image';

const ExpandableCardContent = styled(CardContent)(({ theme }) => ({
  transition: 'max-height 0.3s ease-out',
  maxHeight: '60px',
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&.expanded': {
    maxHeight: '500px',
  },
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    maxHeight: 'none',
    '&.expanded': {
      maxHeight: 'none',
    },
  },
}));

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  '& .MuiLinearProgress-bar': {
    background: `#333`,
  },
}));

export default function Projects() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const projects = [
    {
      title: 'Saneatto Engenharia',
      description: 'O site da Saneatto Engenharia serve como uma plataforma para apresentar a empresa, seus valores e serviços...',
      image: '/images/saneatto.png',
      link: 'https://www.saneatto.com.br/',
      progress: 100,
      icons: ['/images/icons/react.png', '/images/icons/css.png', '/images/icons/js.png']
    },
    {
      title: 'Lar dos Fitas',
      description: 'O projeto Lar dos Fitas foi feito com Vue.js porque eu queria aprender e praticar essa tecnologia...',
      image: '/images/lar-dos-fita.png',
      link: 'https://lijunio.github.io/Lar-dos-Fita/',
      progress: 100,
      icons: ['/images/icons/vue-js.svg', '/images/icons/html5.png', '/images/icons/js.png'],
      requiresPassword: true 
    },
    {
      title: 'Bioguard',
      description: 'O projeto BioGuard, desenvolvido como trabalho para um dos semestres da faculdade...',
      image: '/images/bioguard.png',
      link: 'https://lijunio.github.io/bioguard/',
      progress: 100,
      icons: ['/images/icons/html5.png', '/images/icons/css.png', '/images/icons/js.png' , '/images/icons/python.png', '/images/icons/nodejs.png' , '/images/icons/mysql.png' ] 
    },
    {
      title: 'Descomplica Consultoria Acadêmica',
      description: 'Este website de consultoria acadêmica está sendo desenvolvido com o objetivo de proporcionar uma experiência fluida...',
      image: '/images/descomplica.png',
      link: 'https://ibb.co/3YVTSVb',
      progress: 40,
      icons: ['/images/icons/html5.png', '/images/icons/css.png', '/images/icons/react.png', '/images/icons/php.png'] 
    },
    {
      title: 'Portfólio 1.0',
      description: 'Criei este portfólio para reunir e compartilhar meus projetos, habilidades como desenvolvedor...',
      image: '/images/portfolio.png',
      link: 'https://lijunio.github.io/portfolio/',
      progress: 100,
      icons: ['/images/icons/html5.png', '/images/icons/css.png', '/images/icons/js.png' ] 
    },
    {
      title: 'Amigo Oculto Natal Família Souza',
      description: 'Este projeto foi desenvolvido para organizar e executar o sorteio de amigo oculto entre membros da família...',
      image: '/images/natal.png',
      link: 'https://lijunio.github.io/Amigo-Oculto-2023/',
      progress: 100,
      icons: ['/images/icons/html5.png', '/images/icons/css.png', '/images/icons/js.png' ] 
    }
  ];

  const handleExpandClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, project: any) => {
    if (project.requiresPassword) {
      event.preventDefault();
      const password = prompt('Por favor, digite a senha para acessar o projeto:');
      if (password === null) return; 
      if (password === 'AcessoLiberado2024#') {
        window.open(project.link, '_blank');
      } else {
        alert('Senha incorreta. Acesso negado.');
      }
    }
  };

  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <h3 className="text-4xl font-bold text-white mb-12 text-center text-animation mt-8">
        PROJETOS
      </h3>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              className="custom-gradient-bg"
              sx={{
                width: '70%',
                margin: '0 auto',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                transform: 'rotateX(0)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
            >
                <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => handleLinkClick(e, project)}
              >
                <Box sx={{ width: '100%', height: 300, position: 'relative' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </a>
              <ExpandableCardContent className={expandedCard === index ? 'expanded' : ''}>
                <Typography variant="h6" component="div" gutterBottom>
                  {project.title}
                </Typography>
                {expandedCard === index && (
                  <Typography variant="body2" sx={{ color: 'white', textAlign: 'justify' }}>
                    {project.description}
                  </Typography>
                )}
              </ExpandableCardContent>
              <Box sx={{ padding: '0 16px 16px' }}>
                <CustomLinearProgress variant="determinate" value={project.progress} />
                <Typography variant="caption" display="block" textAlign="right" color="white">
                  {project.progress}% Concluído
                </Typography>
                <Typography
                  variant="button"
                  color="primary"
                  onClick={() => handleExpandClick(index)}
                  sx={{ cursor: 'pointer', mt: 1, color: 'white' }}
                >
                  {expandedCard === index ? 'Mostrar menos' : 'Ler projeto'}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                  {project.icons.map((icon, iconIndex) => (
                    <Image key={iconIndex} src={icon} alt="icon" width={24} height={24} />
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
