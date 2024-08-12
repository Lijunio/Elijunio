'use client';

import './globals.css';
import { ReactNode } from 'react';
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
  return (
    <html lang="en">
      <head>
        {/* Adiciona o script do Blip Chat aqui */}
        <script src="https://unpkg.com/blip-chat-widget" async></script>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        {/* Código do Blip Chatbot */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var minWidthForChatbot = 768;
                if (window.innerWidth > minWidthForChatbot) {
                  window.onload = function () {
                    var blipClient = new BlipChat();
                    blipClient.withAppKey('cG9ydGlmb2xpb2xpbzg6NjRlYmI3NTYtMTc5Yy00MmIwLWFmZjQtYzM4NGQ3NTFkNzNm')
                      .withEventHandler(BlipChat.LOAD_EVENT, function () {
                        blipClient.sendMessage({
                          "type": "text/plain",
                          "content": "Olá"
                        });
                      })
                      .withButton({"color":"#333","icon":"https://blipmediastore.blip.ai/public-medias/Media_a4a37081-2224-47b6-94cf-5aff5fa9cfd2"})
                      .withCustomCommonUrl('https://elias-junio-bqqie.chat.blip.ai/')
                      .build();

                    var chatButton = document.getElementById('blip-chat-open-iframe');
                    chatButton.style.display = 'block';

                    setTimeout(function () {
                      chatButton.classList.add('blip-chat-visible');
                    }, 5000);

                    chatButton.addEventListener('click', function () {
                      chatButton.classList.add('blip-chat-clicked');
                    });
                  };
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
