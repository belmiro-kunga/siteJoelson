
import React from 'react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const articles = [
    { id: 1, category: 'Sustentabilidade', date: '15 de Outubro, 2023', title: 'Liderando a Transição Energética em 2024', desc: 'Exploramos como a Bragalux está a moldar o futuro da energia renovável através de novos parques fotovoltaicos.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv2IgV0VkuF-G0L9MGRYlw3t9UG7lSGFSCg9OacX4FW_x4ebKNePZYWoKVu5Fi11P2Hrde_q0HHLPBlko5qsfSgFCClNGyDMW8b3kd-pgpccrc922h4VXhtn9IeNvECBkxLq-mMUsJDRIDJZCHy4PHHMUAMCa7d3LW58ez5pcEHYudCOx7_Ab5PYmBL0qyWu2lldFXiSCIX29xb5y7pOQ1PYRmzo5qxXCXmDUab8uQAU6b6fOSchtyll_IJA34PhKgHOI0a5tHe0Q' },
    { id: 2, category: 'Inovação', date: '10 de Outubro, 2023', title: 'Inovações em Iluminação Pública Inteligente', desc: 'Novas tecnologias LED e sistemas de telegestão estão a transformar as cidades portuguesas em Smart Cities reais.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmpf9pxhaEKICDtCc-DgdeGifIh5_EYRmH5Xp8v4VW8rABlJc3PvcJB4OaFymIDXGsHSuol72gBc85mnHKrYLTyVDUFQc3bTTUD4VNZ8UgVTdh5iu8Xm36vOpOLwufiwJuwgOoizLsScBn0NGlzwUiAB-awYqGy2Lt0DqNmNwuihB1sMPNO7pZl41WxCrw3wVhUdmBbMFkEWY4RqNL3gl-O7WdYNsuQlV3hGoWMg0_NKLAgSUjW9CKRAjCiQF0TefWGw_wiaCyiB8' },
    { id: 3, category: 'Projetos', date: '28 de Setembro, 2023', title: 'Novo Projeto Estruturante em Braga', desc: 'Início da fase de implementação do novo sistema de gestão de infraestruturas elétricas no centro histórico.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMr6lubGMFDbvMLXOYvUSgdRK2t8EabkvWxd63lT55rZRRrJzrORCZ8CoxiwLphZGWOKmE-foZmuuHJLwVd4iXyCI_cjKZCa42UrjOzFi9J0Y5z97OqrO2tv8czJ-dHlF_CVkzxW4b1WZOFHqUm1JXWrwlEo5hdXDBvYzOY7e5RS4a3nmzBzzDMAz-ZMcp6TdBP523hS6rUYNDm05i1eNQJP3WaICItlFmjDLgRyLx15iwOQ1uf8XzPrSgYEy3UELW8v_AbQ5aOj8' },
    { id: 4, category: 'Institucional', date: '20 de Setembro, 2023', title: 'Expansão Internacional da Bragalux', desc: 'Abertura de novos escritórios para apoiar o mercado europeu em projetos de larga escala e mobilidade.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7elYiG44Bm_FEKKRHl6FWy-RoOhnZf2oFl-H2vHwRprgNHkc-PcI1zZDVYDtEevDseeNVjTz9EdlRseqg2CrF6uuW08pWc_t3VBz3dP0qIcP39kR_gVxC1yjv0m-PNhQ15MdRf0ibespb5c3Yyzfz8eRg-wau6eC4oblJNzHlRurKAGKH6ovT0NuPdapqqMnqPcG-EHlpPlwKtkLZX7OqU8SqOomijSAfPoI3A2SV9G0nsdw8oxwc5Hql0Qyo3F9r-yaw8b_8D9s' },
  ];

  return (
    <div className="bg-background-light">
      <section className="relative h-[300px] md:h-[400px] bg-black flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuB5zQQmOg7zQ4a6-gco8FQV9K8HVrwrCOD5QrCKNbp-ZmuonRU5aq-o21Ieo4F-1FuR9pjt8OaMKpJwRgR5obVHfNIQpNB4E52DS579VX4MpB0lJkluGC4Jqizaw3Mj6sk7Bxr2_90Y8y5_ZJB9r5YGyzSeoMFjyhFPwaVNOH8HHmCstqJ3_ylhKNCSu_XHoFMpd5pTqpNQcXU2GH__IvC2CUnSXeDQXcfYwOnXpCdnH55D7oLxlTqAnWzkkAxu_iGY5DaIxPjr4Qs)'}}></div>
        <div className="relative z-10">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tight mb-4">Notícias</h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">Acompanhe as últimas atualizações e inovações da Bragalux.</p>
        </div>
      </section>

      <section className="py-12 max-w-[1280px] mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div key={art.id} className="group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all shadow-sm flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src={art.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                <span className="absolute top-4 left-4 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">{art.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-500 text-xs mb-2">{art.date}</p>
                <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors">{art.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-6">{art.desc}</p>
                <Link to={`/noticias/${art.id}`} className="mt-auto flex items-center gap-2 text-sm font-bold hover:underline decoration-primary">
                  Ler mais <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-12">
        <div className="max-w-[800px] mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase">Subscreva a nossa Newsletter</h2>
          <p className="text-text-main mb-8 font-medium">Receba diretamente no seu e-mail as novidades e insights do setor.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="O seu e-mail" className="flex-1 rounded-lg border-none focus:ring-2 focus:ring-black px-4 py-3" />
            <button className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors">Subscrever</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
