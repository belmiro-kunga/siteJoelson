
import React from 'react';

const Sustainability: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD86tvItfNe2oC81YGS3CYKcz6whKGmPlpLAPzdXvj9v8XBepVKhFpaQ8Zx_c7fY9nHGvZTFCTwp79N8Dz9XeeRqMzhKb0w6hsQvoY7iGn6-RtqvH0kSKPkaOkHDUhngurDezULIG3LwoYbOs7mHjUcSqsGo41gcJyLOhR9GM3_T5oeHZ9P0lEJ-B3Iz0Fk51x3UUELA-dk-eU03AGxtClO32YaNxXtIK8u6uT323nPOJOLozvVmE9EXIrQ_yAwrjwZmjcxvmmOu_M" alt="Solar panels" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 container mx-auto px-4 md:px-10 max-w-[1400px]">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold uppercase mb-6">
              <span className="material-symbols-outlined text-sm">eco</span>
              <span>ESG & Inovação</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Sustentabilidade na BLX: <span className="text-primary">Compromisso com o Futuro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-xl">
              Construindo um amanhã mais verde através de eficiência energética, responsabilidade corporativa e inovação tecnológica.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="h-12 px-8 rounded-lg bg-primary text-black font-bold text-base hover:bg-primary-hover transition-colors flex items-center gap-2">
                Ver Relatório 2024
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Os Pilares do Nosso Compromisso ESG</h2>
            <p className="text-text-muted max-w-2xl mx-auto">A nossa estratégia baseia-se em três eixos fundamentais que orientam todas as nossas operações.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ambiental', icon: 'eco', bg: 'forest', desc: 'Foco total em eficiência energética, redução da pegada de carbono e investimento contínuo em fontes renováveis.', items: ['Energia 100% Renovável', 'Frota Elétrica'] },
              { title: 'Social', icon: 'diversity_3', bg: 'groups', desc: 'Garantia de segurança máxima no trabalho, bem-estar dos colaboradores e impacto positivo na comunidade.', items: ['Zero Acidentes', 'Apoio Comunitário'] },
              { title: 'Governança', icon: 'balance', bg: 'gavel', desc: 'Compromisso inabalável com a ética, transparência e conformidade rigorosa com normas internacionais.', items: ['Ética e Transparência', 'Certificação ISO'] },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[120px] text-text-main">{pillar.bg}</span>
                </div>
                <div className="size-14 rounded-lg bg-primary/20 flex items-center justify-center text-text-main mb-6 group-hover:bg-primary transition-all">
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{pillar.desc}</p>
                <ul className="space-y-2">
                  {pillar.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm font-medium">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold text-text-main">Nossas Metas para 2030</h2>
              <div className="space-y-6">
                {[
                  { label: 'Redução da Pegada de Carbono', val: 45, meta: '60% até 2026' },
                  { label: 'Energia Renovável nas Operações', val: 82, meta: '100% até 2028' },
                  { label: 'Satisfação dos Colaboradores', val: 94, meta: '95% até 2025' },
                ].map((goal, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-text-main">{goal.label}</span>
                      <span className="font-bold text-primary">{goal.val}%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: `${goal.val}%`}}></div>
                    </div>
                    <p className="text-xs text-text-muted mt-1">Meta: {goal.meta}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              {[
                { icon: 'bolt', val: '120 GWh', label: 'Energia Gerada' },
                { icon: 'co2', val: '-15k Ton', label: 'Emissões Evitadas' },
                { icon: 'recycling', val: '98%', label: 'Reciclagem' },
                { icon: 'verified', val: 'Top 5%', label: 'Rating ESG' },
              ].map((stat, idx) => (
                <div key={idx} className={`${idx === 3 ? 'bg-primary' : 'bg-gray-50'} p-6 rounded-2xl flex flex-col items-start justify-center min-h-[160px]`}>
                  <span className="material-symbols-outlined text-text-main text-4xl mb-2">{stat.icon}</span>
                  <span className="text-4xl font-black text-text-main">{stat.val}</span>
                  <span className="text-sm font-medium text-text-muted mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
