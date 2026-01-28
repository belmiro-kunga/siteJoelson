
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const NewsDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="bg-background-light min-h-screen">
      <main className="max-w-[1280px] mx-auto px-4 lg:px-10 py-8">
        <nav className="flex gap-2 mb-8 text-gray-400 text-sm font-medium">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span>/</span>
          <Link to="/noticias" className="hover:text-primary">Notícias</Link>
          <span>/</span>
          <span className="text-text-main">A Transição para Iluminação LED Inteligente</span>
        </nav>

        <div className="max-w-[960px] mx-auto mb-10">
          <div className="flex gap-3 mb-4">
            <span className="bg-primary text-black px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Sustentabilidade</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium">Inovação</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">A Transição para Iluminação LED Inteligente em Infraestruturas Urbanas</h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            <span>24 de Outubro, 2023</span>
            <span className="mx-2">•</span>
            <span className="material-symbols-outlined text-base">schedule</span>
            <span>5 min de leitura</span>
          </div>
        </div>

        <div className="mb-12">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8TFSuwbuiYV7V3xzrGTFCRgPaxGMMcA8Zx3V9ThRnFNQDPB06AbxbTTKIp5Wadzpyf13JptlEcVp4fJWY7flgWdourKd06TTb9U9YV5iQVWUBekkeIiuF48XJBuHVJBO8Ph9XNXyo6-i-Qd16AqHRtTOltjkwfZcStRozEoCj4tpy4pqBX4gDVHO-_xjRdN_aPLlWCy4gTfAI2wZ30UoMYb7b6H_pIxqSzMhEo_77lEjktJi4PclkcgiCgYuAXVUzUVvP5NtmtDM" alt="LED Lighting" className="w-full h-[500px] object-cover rounded-xl shadow-lg" />
          <p className="mt-3 text-gray-500 text-xs italic text-center">Infraestrutura urbana modernizada com sistemas de iluminação LED de alta eficiência em Braga.</p>
        </div>

        <div className="max-w-[800px] mx-auto prose prose-lg leading-relaxed space-y-6">
          <p className="text-xl font-light">
            À medida que as cidades evoluem para se tornarem "Smart Cities", a iluminação pública deixa de ser apenas uma necessidade básica para se tornar uma rede inteligente de dados e eficiência. A Bragalux tem estado na vanguarda desta transição tecnológica em Portugal.
          </p>
          <h2 className="text-2xl font-bold mt-10">Eficiência Energética e Redução de Custos</h2>
          <p>
            O principal motor da mudança para o LED não é apenas a qualidade da luz, mas a drástica redução no consumo energético. Projetos recentes implementados pela Bragalux demonstram reduções de custos operacionais na ordem dos 60% a 70% para as autarquias locais. Além disso, a durabilidade destas luminárias reduz significativamente as necessidades de manutenção.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-2xl bg-primary/5">
            "A iluminação eficiente é o pilar da infraestrutura moderna, permitindo cidades mais seguras e ambientalmente responsáveis."
          </blockquote>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZyx3QFrKrWoDWb8c-y6BK8dih_8rvI2JJKcSVvCjELPw-wzQouRLwAsa30Cv_LQc5CxLXN5wsejE7om0l-b7hhspvwSRvToFYycZFXRe7Cst6iLIVShflyw3zvPz_DMSgQOC8B1OujZW8iQQSLB5Onljrr3dA5dTgw50p3sFBS2rKehfckTm26y-W1YfV82LUl3t0-1P-zH7bQsOqous6PF7-vFEo7C36ZSy8kLOOxS-ZnwONoAXJjtkIQsisVkus4XTIj-eAygI" alt="Tech" className="rounded-lg h-64 w-full object-cover" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRWtRFsFQuNSut01gefrUrjfiTeZ8ni60cAMQhfoNdD2sbUqSNmiaTRpzUH3XQhtiYCysz_0fs_G8QGlkQoxqMWX59Bzb6cW5gYAEyA1D2Ff3uDE31X2_U4YF8QiA0Ip2D4cCjCVXmv-BwNKKpfLgEnfMNn0I_dwh4WFU_QMF75gj8DnL8W2G0OP7cO2oWoJK1JEuZL913l6nn-6oxGuQGit-7knNjV_fbuh12srRt5TV6JUmz1ZF1guxxByGl3w2snNarsPVHvd0" alt="Control" className="rounded-lg h-64 w-full object-cover" />
          </div>

          <p>
            Para concluir, a transição para LED inteligente é um investimento com retorno garantido, tanto financeiro como ambiental. A Bragalux continua comprometida em trazer as melhores soluções globais para o contexto local, garantindo que as nossas cidades estão prontas para o futuro.
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewsDetail;
