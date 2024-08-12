'use client'; 

import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About'; 
import Footer from '../components/Footer';

const theme = createTheme({
  palette: {
    background: {
      default: '#f7f7f7', 
    },
    text: {
      primary: '#333', 
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          color: '#333', 
          minHeight: '100vh',
        }}
      >
        <Header />
        <Container>
          <section id="about" style={{ padding: '2rem 0' }}>
            <About /> {}
          </section>
          <section id="projects" style={{ padding: '2rem 0' }}>
            <Projects />
          </section>
          <section id="contact" style={{ padding: '2rem 0' }}>
            <Contact />
          </section>
          <section id="footer" style={{ padding: '2rem 0' }}>
            <Footer />
          </section>
        </Container>
      </div>
    </ThemeProvider>
  );
}
