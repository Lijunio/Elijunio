'use client';

import './globals.css';
import { ReactNode, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    text: {
      primary: '#333',
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/blip-chat-widget';
    script.async = true;
    script.onload = () => {
      if (window.BlipChat) {
        new window.BlipChat()
          .withAppKey('cG9ydGlmb2xpbzg6NjRlYmI3NTYtMTc5Yy00MmIwLWFmZjQtYzM4NGQ3NTFkNzNm')
          .withButton({ color: '#333', icon: 'https://blipmediastore.blip.ai/public-medias/Media_a4a37081-2224-47b6-94cf-5aff5fa9cfd2' })
          .withCustomCommonUrl('https://elias-junio-bqqie.chat.blip.ai/')
          .build();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Outros elementos de head, como meta tags, links, etc. */}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
