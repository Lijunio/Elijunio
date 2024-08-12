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
    script.src = 'https://unpkg.com/blip-chat-widget@1.11.*';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      if (window.BlipChat) {
        const blipClient = new window.BlipChat();
        blipClient
          .withAppKey('cG9ydGlmb2xpbzg6NjRlYmI3NTYtMTc5Yy00MmIwLWFmZjQtYzM4NGQ3NTFkNzNm')
          .withEventHandler(window.BlipChat.LOAD_EVENT, function () {
            blipClient.sendMessage({
              type: 'text/plain',
              content: 'This is my first message',
            });
          })
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
