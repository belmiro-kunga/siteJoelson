
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAMgvJP1ckM_9p7QP-5dvQkzNyslKvK5gIWelHZRvooM9AaVnzYquPBrvGi4awoOc9nkK8W_7ioj3gClz1VSahpvaZELahf-VSIuQA-P6S0jUJN-lH6LnpC4GHmgLQhC9kJQ71wAAPG8pPSF3M2osQEyTu78KuMXunxTCPFNjB7toLsLt_RiwBEmvGRS3Bfl-Xr_F8X8RAva3XBRYJ7WqJUwaIOnTWAAUjmCQznqrsf2pUZqrMEP-t7mbC3ezEr8Dc-b5q6wG72Do" alt="Industrial infrastructure" className="w-full h-full object-cover opacity-80" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Líderes em Energia</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Há 40 anos a <br/>
              <span className="text-primary">cuidar das pessoas</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl font-light">
              Estamos a iluminar o futuro com inovação, qualidade e soluções sustentáveis para as próximas gerações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/sobre-nos/historia" className="bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl">
                Conheça a Nossa História
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-xl">arrow_forward</span>
              </Link>
              <Link to="/portfolio" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                Ver Projetos
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
          <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Serviços Especializados</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">O QUE FAZEMOS</h3>
            </div>
            <p className="text-gray-600 max-w-md text-lg">
              Oferecemos soluções integradas e inovadoras em diversas áreas da engenharia elétrica e telecomunicações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Infraestruturas de Distribuição', desc: 'Construção e manutenção de redes de distribuição de energia em baixa, média e alta tensão.', icon: 'power', bgIcon: 'electric_bolt' },
              { title: 'Mobilidade Elétrica', desc: 'Instalação de postos de carregamento e infraestruturas para veículos elétricos inteligentes.', icon: 'ev_station', bgIcon: 'directions_car' },
              { title: 'Eficiência Energética', desc: 'Soluções para otimização de consumo e implementação de sistemas de energia renovável.', icon: 'energy_savings_leaf', bgIcon: 'eco' },
              { title: 'Telecomunicações', desc: 'Desenvolvimento e manutenção de redes de telecomunicações móveis e fixas.', icon: 'cell_tower', bgIcon: 'settings_input_antenna' },
              { title: 'Instalações Especiais', desc: 'Projetos elétricos complexos para edifícios industriais, comerciais e hospitalares.', icon: 'domain', bgIcon: 'apartment' },
            ].map((service, idx) => (
              <div key={idx} className="group bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-primary/20 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">{service.bgIcon}</span>
                </div>
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 text-black">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/areas-de-negocio" className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                  SAIBA MAIS <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                </Link>
              </div>
            ))}
            
            <div className="group bg-black rounded-xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-800 relative overflow-hidden flex flex-col justify-center items-center text-center">
              <div className="absolute inset-0 bg-primary/10 opacity-50"></div>
              <h4 className="text-2xl font-bold mb-3 text-white relative z-10">Tem um projeto?</h4>
              <p className="text-gray-300 mb-6 relative z-10">Desafie-nos a encontrar a melhor solução para o seu negócio.</p>
              <Link to="/contactos" className="bg-primary hover:bg-primary-hover text-black px-6 py-3 rounded-lg font-bold transition-all relative z-10 w-full text-center">
                Contactar Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface-dark text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: '50M€', label: 'Volume de Negócios' },
              { val: '450+', label: 'Colaboradores' },
              { val: '3', label: 'Países' },
              { val: '10k', label: 'Horas de Formação' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-white/90 mb-2 group-hover:text-primary transition-colors duration-500">
                  {stat.val}
                </div>
                <div className="h-1 w-12 bg-primary mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
