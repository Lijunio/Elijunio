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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-lg gradient-bg">
            <h4 className="text-xl font-semibold text-white mb-2 text-center">Avançado</h4>
            <p className="text-gray-300 text-center">
              HTML5, CSS3, JavaScript, React, RESTful APIs, GraphQL, PL/SQL, T-SQL, Postgres, MySQL.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg gradient-bg">
            <h4 className="text-xl font-semibold text-white mb-2 text-center">Intermediário</h4>
            <p className="text-gray-300 text-center">
              Python, Vue, Java, Node.js, MariaDB, Oracle.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg gradient-bg">
            <h4 className="text-xl font-semibold text-white mb-2 text-center">Iniciante</h4>
            <p className="text-gray-300 text-center">
              AngularJS, Kotlin, AWS, Amazon EC2, MongoDB.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
