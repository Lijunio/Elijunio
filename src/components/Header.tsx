import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { MouseEvent } from 'react';

export default function Header() {
  const handleScroll = (event: MouseEvent<HTMLButtonElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none', alignItems: 'center', pt: 5 }}>
      <Toolbar>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            gap: 3,
            justifyContent: 'center',
            border: '2px solid transparent', 
            borderRadius: '20px',
            p: 1.5,
            bgcolor: '#333333',
            backdropFilter: 'blur(10px)',
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
          <Button sx={{ color: 'white' }} onClick={(e) => handleScroll(e, 'about')}>Sobre</Button>
          <Button sx={{ color: 'white' }} onClick={(e) => handleScroll(e, 'projects')}>Projetos</Button>
          <Button sx={{ color: 'white' }} onClick={(e) => handleScroll(e, 'contact')}>Contato</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
