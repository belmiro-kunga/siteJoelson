
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded text-black">
                <span className="material-symbols-outlined text-xl font-bold">bolt</span>
              </div>
              <h4 className="text-2xl font-bold uppercase">Bragalux</h4>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Excelência em engenharia elétrica e infraestruturas. Construindo o futuro com energia e inovação desde 1983.
            </p>
            <div className="flex gap-4 pt-2">
              {['FB', 'LI', 'IG'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-black flex items-center justify-center transition-all">
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block text-white">Links Rápidos</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/sobre-nos/historia" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> História</Link></li>
              <li><Link to="/areas-de-negocio" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Áreas de Negócio</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Portfólio</Link></li>
              <li><Link to="/sustentabilidade" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Sustentabilidade</Link></li>
              <li><Link to="/contactos" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Recrutamento</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block text-white">Contactos</h5>
            <ul className="space-y-5 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                <span>Parque Industrial de Celeirós<br/>4705-025 Braga, Portugal</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>+351 253 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>geral@bragalux.pt</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span>Seg - Sex: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden h-48 bg-gray-800 relative group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIrgiAXXRPIWu3VawLEHF90hZ1XH0cvIkC9xgbNOwPFwIFCY4hWBz642nWS1vGuac0RfdEajY2DkPhH_ALi422iZS_sbY2g7MB4QEDT2xXnf26ge30Md1Q8DSfq6v7OLB3vks7q7W-IcNufnMNHcRrVJfKSn70V8MatM45rvnfdjkZat0xNsqGHeM-DHcBy88bXcdnNhagLwVhTIHTZyTZ_Tx0bJO4Ufs5i98sy68KBZPRGZMuaLAkGJOcZA_Uww23LkZHNhLfbwA" alt="Map Location" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="#" className="bg-primary hover:bg-white hover:text-black text-black text-xs font-bold px-4 py-2 rounded shadow-lg transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-base">map</span> Ver no Mapa
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Bragalux S.A. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
            <a href="#" className="hover:text-white transition-colors">Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
