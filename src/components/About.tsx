import { FC } from 'react';

const About: FC = () => {
  return (
    <div className="flex flex-col items-center relative my-20 z-10 font-inter">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mb-12">
        <h2 className="text-center text-[40px] md:text-5xl lg:text-6xl">
          <span className="text-white">Bem vindo ao</span> <span className="text-blue-500">meu portfólio</span>
        </h2>
        <p className="text-center md:tracking-wider mb-12 text-sm md:text-lg lg:text-2xl mt-4 text-white">
          Olá! Eu sou Elias, um Analista de Desenvolvimento de Sistemas.
        </p>
      </div>

      {/* Seção de Skills */}
      <section className="w-full max-w-6xl px-4">
        <h3 className="text-4xl font-bold text-white mb-12 text-center text-animation mt-16">
          SKILLS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg shadow-lg gradient-bg">
            <p className="text-gray-300 text-left">
              <strong className="text-white">Linguagens de Programação:</strong><br />
              HTML5, CSS3, JavaScript, TypeScript, Python, Node.js
            </p>
            <p className="text-gray-300 text-left mt-4">
              <strong className="text-white">Frameworks e Bibliotecas:</strong><br />
              React, Next.js, Vue.js
            </p>
            <p className="text-gray-300 text-left mt-4">
              <strong className="text-white">Versionamento:</strong><br />
              Git – GitHub
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg gradient-bg">        
            <p className="text-gray-300 text-left">
              <strong className="text-white">Banco de Dados:</strong><br />
              Oracle, MS SQL Server, PL/SQL, T-SQL, Postgres
            </p>
            <p className="text-gray-300 text-left mt-4">
              <strong className="text-white">APIs:</strong><br />
              RESTful
            </p>
            <p className="text-gray-300 text-left mt-4">
              <strong className="text-white">Metodologias Ágeis:</strong><br />
              Scrum, Kanban
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
