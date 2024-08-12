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
    // Defina a largura mínima para mostrar o chatbot
    const minWidthForChatbot = 768;

    if (window.innerWidth > minWidthForChatbot) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/blip-chat-widget';
      script.async = true;
      script.onload = () => {
        if (window.BlipChat) {
          const blipClient = new window.BlipChat();
          blipClient
            .withAppKey('cG9ydGlmb2xpbzg6NjRlYmI3NTYtMTc5Yy00MmIwLWFmZjQtYzM4NGQ3NTFkNzNm')
            .withEventHandler(window.BlipChat.LOAD_EVENT, function () {
              blipClient.sendMessage({
                type: 'text/plain',
                content: 'Olá',
              });
            })
            .withButton({ color: '#333', icon: 'https://blipmediastore.blip.ai/public-medias/Media_a4a37081-2224-47b6-94cf-5aff5fa9cfd2' })
            .withCustomCommonUrl('https://elias-junio-bqqie.chat.blip.ai/')
            .build();

          const chatButton = document.getElementById('blip-chat-open-iframe');
          if (chatButton) {
            chatButton.style.display = 'block';

            setTimeout(() => {
              chatButton.classList.add('blip-chat-visible');
            }, 5000);

            chatButton.addEventListener('click', () => {
              chatButton.classList.add('blip-chat-clicked');
            });
          }
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
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
