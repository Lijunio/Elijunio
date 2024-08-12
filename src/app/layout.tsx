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
        <script src="https://unpkg.com/blip-chat-widget" async></script>
        <script src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js" async></script>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                emailjs.init("922JgcvAEBKtkOd3Y");

                document.addEventListener('DOMContentLoaded', function() {
                  var form = document.getElementById('contact-form');
                  if (form) {
                    form.addEventListener('submit', function(event) {
                      event.preventDefault();
                      emailjs.sendForm('service_t4yqi45', 'template_z967x3u', form)
                        .then(function() {
                          alert('Mensagem enviada com sucesso!');
                          form.reset();
                        }, function(error) {
                          alert('Erro ao enviar mensagem: ' + JSON.stringify(error));
                        });
                    });
                  }
                });

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
