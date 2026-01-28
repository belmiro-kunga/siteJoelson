
import React from 'react';

const History: React.FC = () => {
  const timeline = [
    { year: '1980', title: 'Fundação da Bragalux', icon: 'foundation', desc: 'Início da atividade com foco em instalações elétricas locais. Uma pequena equipa com uma grande visão começa a desenhar o futuro da infraestrutura na região.' },
    { year: '1986', title: 'Expansão para Telecomunicações', icon: 'router', desc: 'Diversificação estratégica dos serviços para incluir infraestruturas de telecomunicações, acompanhando a revolução digital em Portugal.' },
    { year: '1995', title: 'Nova Sede & Frota', icon: 'domain', desc: 'Abertura da nova sede operacional e aumento significativo da frota, permitindo uma resposta mais rápida e eficaz a projetos de maior escala.' },
    { year: '2005', title: 'Consolidação Nacional', icon: 'engineering', desc: 'Consolidação no mercado nacional através da participação em grandes obras públicas, reforçando o estatuto de parceiro de confiança do Estado e grandes empresas.' },
    { year: '2015', title: 'Internacionalização', icon: 'public', desc: 'Entrada em novos mercados europeus, levando a expertise da engenharia portuguesa para além-fronteiras e diversificando o portfólio de clientes.' },
    { year: '2024', title: 'Sustentabilidade & Futuro', icon: 'solar_power', desc: 'Liderança contínua com foco em energias renováveis, mobilidade elétrica e sustentabilidade. O futuro é verde e a Bragalux está a construir o caminho.' },
  ];

  return (
    <div className="bg-white">
      <section className="relative pt-16 pb-12 px-4 sm:px-10 overflow-hidden bg-gray-50/50">
        <div className="max-w-[960px] mx-auto flex flex-col gap-6 relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Desde 1980</span>
          <h1 className="text-text-main text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight">
            Somos Bragalux,<br/>somos BLX
          </h1>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
          <p className="text-text-main text-lg sm:text-xl font-medium leading-relaxed text-gray-700 max-w-2xl">
            Uma narrativa de mais de 40 anos de dedicação, crescimento e inovação no setor das infraestruturas elétricas e de telecomunicações.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-10">
        <div className="max-w-[960px] mx-auto">
          <div className="relative pl-8 sm:pl-12 border-l-2 border-gray-200 space-y-16">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute -left-[43px] sm:-left-[59px] top-0 rounded-full p-2 border-4 border-white shadow-lg ${idx === 0 || idx === 5 ? 'bg-primary' : 'bg-white group-hover:bg-primary transition-colors'}`}>
                  <span className="material-symbols-outlined text-text-main text-xl">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-primary text-5xl sm:text-6xl font-black tracking-tight leading-none">{item.year}</h3>
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-text-main mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 ml-8 sm:ml-12 flex items-center gap-4 text-gray-400">
            <div className="w-3 h-3 bg-gray-300 rounded-full -ml-[7px]"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Continuamos a escrever a história</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
