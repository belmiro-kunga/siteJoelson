
import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div className="bg-background-light">
      <div className="bg-background-dark py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <h1 className="text-white text-5xl font-extrabold tracking-tight">Contactos</h1>
          <div className="h-1 w-20 bg-primary"></div>
          <p className="text-gray-400 max-w-lg">Estamos aqui para ajudar. Entre em contacto connosco para orçamentos, parcerias ou questões gerais.</p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold border-l-4 border-primary pl-6 mb-8">Informações de Contacto</h3>
            <div className="space-y-4">
              {[
                { label: 'Sede', val: 'Rua de Pitancinhos, Braga', icon: 'location_on' },
                { label: 'Telefone', val: '+351 253 000 000', icon: 'call' },
                { label: 'Email', val: 'geral@bragalux.pt', icon: 'mail' },
              ].map((info, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <span className="material-symbols-outlined text-primary">{info.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="text-lg font-medium">{info.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-full min-h-[400px]">
            <div className="w-full h-full rounded-xl shadow-lg relative overflow-hidden group bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBKy2HOggVvDpmjGUjwuTgq9ynIs1VexRmT07rYQkaWPslKkSCwsATHgMU1MLkytG0P49jp4ep-oB2KdTH6BoynFody4rejG-fGidZlvrC5RPLfpyWv1sLmvly_SNoLmrY_hsh7vY6lP_n-JvScvRwdZmtKoxQb70YuSAlJNVENyJXIbK-zHjX1MrwcblaqtptOn_V4DChvF_FUugXIspMPWimk_kWd_7VErOcZY6lB5qlBx6zaHt_nPMwbBgCM-y0_n8QLxQKh91I)'}}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">explore</span>
                <span className="text-xs font-bold">VER NO MAPA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2 bg-[#181811] p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie-nos uma Mensagem</h2>
              <p className="text-gray-400 mb-8">Utilize o formulário para entrar em contacto. A nossa equipa responderá brevemente.</p>
            </div>
            <div className="flex gap-4">
              <span className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer material-symbols-outlined">public</span>
              <span className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer material-symbols-outlined">share</span>
            </div>
          </div>
          <div className="lg:col-span-3 p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nome Completo" className="rounded-lg border-gray-200 focus:ring-primary focus:border-primary" />
              <input type="email" placeholder="Email" className="rounded-lg border-gray-200 focus:ring-primary focus:border-primary" />
              <input type="text" placeholder="Assunto" className="md:col-span-2 rounded-lg border-gray-200 focus:ring-primary focus:border-primary" />
              <textarea placeholder="Sua mensagem..." rows={4} className="md:col-span-2 rounded-lg border-gray-200 focus:ring-primary focus:border-primary"></textarea>
              <button className="bg-primary text-black font-bold py-4 px-10 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Enviar Mensagem <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Recruitment CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 p-8 md:p-16">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="material-symbols-outlined text-[200px] text-primary">engineering</span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">O SEU FUTURO COMEÇA HOJE</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">Procuramos talentos motivados para integrar a nossa equipa. Junte-se a nós em projetos inovadores.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-black font-bold py-4 px-8 rounded-lg shadow-md hover:bg-primary-hover transition-colors">Candidatura Espontânea</button>
              <button className="bg-white text-black font-bold py-4 px-8 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">Ver Vagas Abertas</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
