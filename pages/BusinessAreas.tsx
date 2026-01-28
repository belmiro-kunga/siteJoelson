
import React from 'react';

const BusinessAreas: React.FC = () => {
  const areas = [
    { title: 'Infraestruturas de Distribuição', icon: 'electric_bolt', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAQUDAwRX7nTzu6NXTEm7BifWDlTl9m-Nw67FLYl96Tk71Agx_aikvGMEBT6gadMG0ZqDsgwcuTjiMvcRnUk522smIA0YS2QClq_e-CvaiJTWEbnNOdgJ7v7TMIPNKAqthjHXQEo7-do2Pt57hk6FJbWDMYyR5lfAU5sLBxVgH0wjElKXxnU1qBecj310AYNiHPVpqRvC1nC2g9zCEnVIA2YbMXPY2jfHMFMwsDNDJnYXAuJ0BZEgSDnfvwww6NWYHo_9YwmjY0dQ' },
    { title: 'Instalações Mecânicas', icon: 'settings_applications', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZYS9N_fbj9laMje-If263LwjsNvLcrIWeQiFdYfARCYBrT2bIsfdg7A6LluAwjokm5cqc2nC1ACSP12e5AAeoef9yvtZL0udIu6snivO7HPekzjkhN4iRgyPuaJcBf2qJgUIJ7w-bQt8gGWQ6EVbaqrDEAK_RxBlV7DmwUknwo0ZuRU0AsEwPFMNLpWNAXYHtb-DI5y0paP9d-YtvCnlqR15gaDF1AQqLiqCnPSVsos3XFe77AVCHf5wyqqRm8HTKpWHwdte-cow' },
    { title: 'Mobilidade Elétrica', icon: 'ev_station', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtgfAs73aFLH2q_RI_nB1nPcKPNcZ5kFuHWgAutkPWRpGAKFIcor22FgJon6ErkHVPotvXEpVXxG0MPHD6BYgiEHTY9UTsXmJeXZ1T-5Jec5NKf9VhVcOej1QrCLSFtB_pMxdbX_kZZ0jgHPQjjx5oIxM7E7LOfFK8qDbsRL5ygEVABAgUt4GKNiZU4Xp6WwubA6uoA7CCu_JN69Je4d4pww6zYiEb-2cBfCq510skuGDLXKbHd7YAxYD4XRZFiRbrGLFoTT0s0f4' },
    { title: 'Instalações Elétricas', icon: 'bolt', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6WoisV0HxB8xyl2Sb33dRiKrGlnSKcimTtIi_4r4am6vnsSkN3mvVYrUg2RAbXm2uC1Jr4fGo2zurB3J4lNqF86jLWhcM1c6_u7W8Xt3hSd80K85kD9ExiMkz82QUnIxc2D_zzGfSTGlUCkSFYj_j0CL6NfwbLysXbFWzLnjLrLEql8t3YPd0tA4PZRlyMBix6kxuHG9v1csmx0yeiPQTahf4SmoRkZp-UNj2YZi6ux-xqQxm-IJfHy3XxRGcYkg1vaZLDNVtHOQ' },
    { title: 'Eficiência Energética', icon: 'eco', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6De-lfRBSsSRIYgxLjSqmtUvQOmuJIKQh6ogvlbJAcWIJuIhA8RjopR91iZtirxVclSc3LyHzt-oVq7s8SWCoKNUlkY1o_tAz3uzD0_12ew6qLxfH-vQUemxonc33MnMpdY0_ZdZfxtaNMQgFlKMQkkj9g1iFGLC4Q0twgh1mg1o0zLkssM8HcfnqLN66I40sLbMHSdVygfIFN78iJ-olnr0np-bGT03V_xXCiXxfiTJwoH7cOIckIUyazK3mp70hp7ZD0-5lwy4' },
    { title: 'Instalações Hidráulicas', icon: 'water_drop', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRlgGWFR3be0vDHes9VrU7SwG4oNg19QOBB8mJZ86AsqMt4K85sJme6OMRS0-0sDb2Feu1HlwFufOBoSb-E_NWpLJSC1Sv7M4-c3wAEBylQ-CfdaH1iELhSEaj4bEgFxeUOIDc7_xJyuqoRrfFVQLsdoH1AenuepyRKZIPbqnrE0srXS6Sv_GxH-KntlczyVLCkmGz-IOOAaumAxwj87_HR6niR9h61bM7xnqTwcplSCFHVo9sT2wTOJaSb5XhuaolgjhJUgkTTXQ' },
    { title: 'Manutenção', icon: 'construction', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZMod2oJHBQf419nzTtt9IR4x881jfdj39NY82jv0WmGqlzkp9-FLfd_AE9UIlacUE6zwbPO_FW9DPJT3SNVC1Mky9GmT3jiBb7enypANszwOYiNsYkCDRHFCiZ5K_TQxI63CRru_kck0lb0-v1xbTJViNQvhu5_r9g8JMSDkomsdZTjF6Grf9iZ3pi8CILn2tFa4iPwiJ9dnrG3KWDgMZC0i__rywdAdyR8JWMXorwSeuGxxbgx0uz8oaaXbt2W6RYdi9ssNkEz8' },
    { title: 'Telecomunicações', icon: 'cell_tower', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASBJ1P5nTZfOzSFgsSbaeeNKRX_tYWDcJHbdYGUuU_Jr7JvBXT3jDUQy9XnJ5rByRVVKgGPahJ0Sg2LJo5zmWBWd4T1U8BpdrO2v7IZEJ4y1fBoIpkzVUWOJsrzLcBK8ZsHB0IVprDH_3p0WmUmHmUkDDqkFdJabLi7jNkNTGMCBftgqR0jqJmODBKmXFHsLvBkwUwnM6-OYWJf-bRM2BYrs9CL1HilrgfG7Pd3Is0JkMMq2WKjiJzG2umeMCfbyFbuMBWt_92Prs' },
  ];

  return (
    <div className="bg-background-light">
      <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuATcOdvFCCWCW86V_92Vxq9Db7_Y6x7sp7WAZI_MulZLFtTRg6Ds2jBQ6RxCU-3rYF8dB9JP4gs-bwoqUhi-oyZDcPLFsyDg-93SLIDcv0edvab-2zd4piovu-IvZT5OaOSVLKDBNTQa4BpcHGxz7-oWkKaKr6YKc8EbpT1LVtJOp6-SaevqfblGsXEJ0s3PRAykAlV05D9DAp4W4UzueJYtUTHhw-Cg0CPTO-EzKIkkNx6PSd5Hcvdz9eQNNbaZOXxEzNlJRfjmQ8" alt="Power Lines" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-4xl px-4">
          <h1 className="text-white text-5xl lg:text-7xl font-black mb-4 tracking-tight uppercase">Áreas de Negócio</h1>
          <p className="text-white/90 text-lg lg:text-xl font-medium">Excelência em infraestruturas e soluções integradas de energia, mecânica e tecnologia.</p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto w-full py-16 px-6">
        <h2 className="text-3xl font-black border-l-4 border-primary pl-6 mb-12">Os Nossos Setores de Atuação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => (
            <div key={idx} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <div className="h-32 bg-gray-50 relative overflow-hidden">
                <img src={area.img} className="absolute inset-0 opacity-20 grayscale object-cover w-full h-full" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-5xl">{area.icon}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-4 line-clamp-2">{area.title}</h3>
                <button className="mt-auto flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all">
                  Saber Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="bg-primary py-16 px-6 mt-16">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-text-main text-3xl lg:text-5xl font-black leading-tight">Procura uma solução para o seu projeto?</h2>
            <p className="mt-4 text-text-main/80 text-lg lg:text-xl font-medium">A nossa equipa de especialistas está pronta para ajudar a concretizar a sua visão.</p>
          </div>
          <button className="bg-text-main text-white h-16 px-10 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg">
            Fale connosco
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessAreas;
