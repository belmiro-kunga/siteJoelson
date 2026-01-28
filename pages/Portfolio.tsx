
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'Subestação Norte', location: 'Porto, Portugal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXh_aUnYK7ih6KnQcuPDagzodntYIQnsQPw0no4Ba5b407DH-Yse6_4AZ6gu4Bgj0ppxKL5zFKLxgv5saViYravPUvg4gBTuPz8SrrWuqOGO2J8gycB3OZllDgDKTet1pzTZpnv00FFL_CdKy6Hq2BW7WVRh0v2FhLsP431ILTi4s44PaYpJns3FNi4BhY8hsiUZbPyMS_DMylhpCdXmC7mAlt83FJ2KPOZSk7u_HBU8MXiVqSuLC7QZ710OTrJfh5ihYDSN4wqoA' },
    { title: 'Iluminação Urbana', location: 'Braga, Portugal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf5w-vox5zttdbXjXPfgiDzfdlD5OfrYAroYcAjntFy7cDBYGOGhN22LKfJyOlvr9mRcSs_BWkLZSWBKzbVHXM3Mg8R6cIUAs2MTs9K8ujLaejH2Rcl_nRgVVXJFYkX1HKQU_Zso29knTPIZBJWhl_mjVMr6TK3HM4TJ5fFy2mHpg2Z46-0iAEKl-BMXJvwbNAUgio92GPCH5sNUkQ2IJFieaoI4ejzIrX3kyphKjQHAYikhcX47_xlYBOQsdk33YDt2EnCtDaxOs' },
    { title: 'Complexo Eólico', location: 'Viseu, Portugal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzTdiHNmZKAUPCdB_3d35c6R-uBuAOIxvm6KBYxTR5WIXm9oUa83OnUm_jkASeX-Fwe_sZHBlDY9r4pUIGJBUGLJPicR_0GmWNN9-pkon_EisOJfHe_tfLkIJ6pqNKv9ieqdyF8oJ0xSpy0_VEQR8pQygfLrjvDgoHFn5r593obrZ8NE5sLH2lqDBm0cey_pS4YD-5G4b_HRhUhUBe2iUb9b-G2m-d8dgP8KdW9aShZ7djHsIDLX0RxGFKAvV4qCwJoHwagxxx2Oo' },
    { title: 'Parque Solar Central', location: 'Alentejo, Portugal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAILDhm23v84BjkQ9iTVMnfO8pqNxrRvjPADiUXR3Buv4Ycbl4AEWEEHUZr-NLXn57R0hWFjXuDtjkfJgV1jdwro7EtEfXY9fNmOFR3SdHJF9ZRG5XkvON-qQnwbKZYjqyVlCmib8aAub0xMky6776-oHlTmOmZzjwK48JHxYpvkAO-V3gbE4jqEUC7p-ralBvJQ_ex8jTsO0g1W7samRCPVDbpNIgqhKavadDHSAy7-s8Z0OFYF2R6-CwhYstObdX2SBMamHETCOM' },
    { title: 'Rede de Alta Tensão', location: 'Lisboa, Portugal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7owPH0MQTMjZ5wP_c5tniKopRlOGvWzyqwpMvSPJrzt82A0ZR_u9jyjme_8oxpVlL_Iv9MjiRRmeSkc8HOuKzGfWhkX5a4CoGxCmq6hsYoMzDSNgJL-8BHKRFJ3yaV4v73IOEQvW2kn8ItUWwAlTwVKElL-7AJfANISmhqVFTwevyzLVQyAZ81Inz2A6cfQ-zoQgxF2yXX8lMHoAtgyaFFwzWsJnaoRpG26c1vzdmItEnlbVeJQCAcbO9-Vikw3cf549eQ33736k' },
    { title: 'Instalação Industrial', location: 'Guimarães, Portugal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuGYskARyFRXeOXzQiQxYosfPocwJQUvx5VDhy6IsnFZm6WL30meowMQGLbfL0Fl3NETIGX6IjxlDHZh620Tk_wK_oVG8IagXfRRUQNsfUmr5sZY-rDmbtuhHQKm2v22ln5-tkAkAxfG8wOVjSHOKzw1N91zCItjxTPAbicC5I6k-rIYNMV5gBrhLoVsS1nf_2jZklXEbJb5uAmnCu9WhV6pnBtDapknsmlS4pFVEatVZUEBiQt1PYktVlD-Mcd0iznBlZy4y4EqI' },
  ];

  return (
    <div className="bg-background-light">
      <section className="px-6 md:px-20 lg:px-40 py-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[21/9] flex flex-col items-center justify-center text-center p-8">
            <div className="absolute inset-0 z-0 opacity-60">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCie7ey9KBVdwHbdb6gCRpvNJfMKpAw-Kqh-2ANRivVLhq-AwvYy594t2BbLhaiBSnZwca1-N8ZfAVCFU34dbuGpaGcgH1_itAz8e8qeQuwLqzFkFG0i_ku3k6dIgJfOYf3CyoDY98ZwurT0hVZrbShVM3q6nd9hr4lYz9ZTceilMPxR4RK_B8zVr25_OPJ3YDTYDghh-tJ8iC-fe94npLFqUsu6zso9c-Raw1NT0n_7A9Fry6vCIfP5ydWCrGcFTBW8hIPGZPKjN8" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight uppercase">
                Nosso <span className="text-primary">Portfólio</span>
              </h1>
              <p className="text-slate-200 text-lg md:text-xl font-light">Transformando energia em progresso através de infraestruturas elétricas inovadoras e sustentáveis.</p>
              <button className="self-center mt-4 flex items-center gap-2 rounded-lg h-14 px-8 bg-primary text-background-dark text-lg font-bold hover:gap-4 transition-all">
                Explorar Projetos <span className="material-symbols-outlined">arrow_downward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-20 lg:px-40 pb-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 py-4 border-y border-slate-200">
            {['Todos', 'Distribuição', 'Iluminação Pública', 'Instalações Industriais', 'Renováveis'].map((cat, idx) => (
              <button key={idx} className={`h-10 px-6 rounded-lg text-sm font-bold transition-all ${idx === 0 ? 'bg-primary text-background-dark' : 'bg-slate-200 hover:bg-slate-300'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl bg-gray-200 aspect-video cursor-pointer">
            <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-background-dark text-2xl font-black uppercase tracking-tight mb-2">{project.title}</h3>
              <div className="flex items-center gap-1 text-background-dark/80 font-bold uppercase text-xs tracking-widest">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="flex justify-center py-12">
        <button className="min-w-[200px] h-14 px-8 border-2 border-slate-300 rounded-lg text-lg font-bold hover:bg-primary hover:border-primary transition-all">
          Carregar Mais Projetos
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
