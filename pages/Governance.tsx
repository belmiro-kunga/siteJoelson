
import React from 'react';

const Governance: React.FC = () => {
  return (
    <div className="bg-background-light">
      <section className="bg-white px-4 py-12 md:px-10 lg:px-40 lg:py-16">
        <div className="max-w-[960px] mx-auto">
          <span className="text-primary-dark w-fit rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-700">Transparência</span>
          <h1 className="text-text-main text-4xl font-black md:text-5xl lg:text-6xl mt-4">Governança Corporativa</h1>
          <p className="text-gray-500 mt-6 text-lg leading-relaxed md:text-xl">
            Na Bragalux, acreditamos que a confiança é construída com integridade. Nossas políticas refletem nosso compromisso inabalável com a ética, a transparência e a responsabilidade socioambiental.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-10 lg:px-40">
        <div className="max-w-[960px] mx-auto">
          <h3 className="text-text-main text-2xl font-bold mb-8">Políticas e Documentos</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Código de Ética', icon: 'policy', desc: 'Diretrizes fundamentais que orientam nossas decisões e relações profissionais.' },
              { title: 'Política de Privacidade', icon: 'lock', desc: 'Como coletamos, usamos e protegemos seus dados em conformidade com a LGPD.' },
              { title: 'Política de Qualidade', icon: 'verified', desc: 'Nosso compromisso com a excelência operacional e a melhoria contínua.' },
              { title: 'Política Ambiental', icon: 'eco', desc: 'Práticas sustentáveis para minimizar impactos e preservar o meio ambiente.' },
              { title: 'Relatório ESG', icon: 'monitoring', desc: 'Balanço anual de nossas ações sociais, ambientais e de governança.' },
              { title: 'Estatuto Social', icon: 'gavel', desc: 'Documento que regula o funcionamento da sociedade e direitos dos acionistas.' },
            ].map((p, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-xl shadow-sm border border-transparent hover:border-gray-200 transition-all">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-yellow-50 text-yellow-700 group-hover:bg-primary group-hover:text-text-main transition-colors">
                  <span className="material-symbols-outlined">{p.icon}</span>
                </div>
                <h4 className="text-text-main font-bold mb-2">{p.title}</h4>
                <p className="text-gray-500 text-sm mb-6">{p.desc}</p>
                <button className="flex items-center gap-2 text-sm font-bold hover:text-yellow-700 transition-colors">
                  Baixar PDF <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-10 lg:px-40">
        <div className="max-w-[960px] mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-[#111] text-white shadow-lg p-8 md:p-16">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gray-800/20 to-transparent"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 text-primary uppercase text-xs font-bold tracking-widest">
                  <span className="material-symbols-outlined">campaign</span> Confidencial
                </div>
                <h2 className="text-3xl font-black md:text-4xl">Canal de Ética e Denúncias</h2>
                <p className="text-gray-400">Um espaço seguro e independente para relatar condutas que violem nosso código de ética. Garantimos anonimato absoluto.</p>
              </div>
              <button className="bg-primary text-black font-bold py-4 px-8 rounded-lg hover:bg-primary-hover transition-colors whitespace-nowrap">
                Acessar Canal de Denúncia
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
