import React from "react";

// Marduque Comex — Single Page Site (TailwindCSS)
// Tip: This preview supports Tailwind in ChatGPT canvas.
// Replace placeholders (e.g., logos/images) as needed.

export default function MarduqueComexSite() {
  const nav = [
    { id: "sobre", label: "Sobre" },
    { id: "valor", label: "Proposta de Valor" },
    { id: "produtos", label: "Portfólio" },
    { id: "diferenciais", label: "Diferenciais" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-neutral-900" />
            <div className="leading-tight">
              <p className="font-semibold">Marduque Comex Ltda</p>
              <p className="text-xs text-neutral-500">Global Trade Markets Worldwide</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-neutral-600">
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Broker internacional com <span className="underline decoration-neutral-300">governança</span>,
              <br className="hidden md:block" />
              <span className="underline decoration-neutral-300">compliance</span> e logística ponta a ponta.
            </h1>
            <p className="mt-5 text-neutral-600 text-lg">
              Conectamos fornecedores globais ao mercado brasileiro com transparência e agilidade —
              da negociação e due diligence ao embarque, desembaraço e entrega no destino.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#produtos" className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800">Ver portfólio</a>
              <a href="#valor" className="px-4 py-2 rounded-xl border border-neutral-300 hover:bg-white">Como entregamos</a>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              Sede: Av. Paulista, 1636 — São Paulo/SP — Brasil · CNPJ: 62.213.722/0001-81
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-700 shadow-xl" />
            <p className="mt-3 text-xs text-neutral-500">Substitua por uma imagem institucional.</p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Quem somos</h2>
            <p className="mt-4 text-neutral-700">
              A Marduque Comex é uma boutique de comércio internacional especializada na intermediação e
              comercialização de commodities e insumos industriais. Operamos como broker independente e
              parceiro estratégico de produtores e compradores, conectando origens confiáveis a demandas no Brasil
              e no exterior.
            </p>
            <p className="mt-4 text-neutral-700">
              Nosso modelo integra governança comercial, compliance documental e execução logística ponta a ponta,
              assegurando segurança jurídica, previsibilidade de prazos e eficiência de custos. Time bilíngue e
              atuação consultiva com foco em performance e recorrência de negócios.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="p-3 rounded-2xl bg-neutral-50 border">Sócios-Administradores: Sergio L. Insaurralde & Chrystian A. Gomes</li>
              <li className="p-3 rounded-2xl bg-neutral-50 border">Idiomas: Português · Espanhol · Inglês · Alemão</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6 bg-neutral-50">
            <h3 className="font-semibold">Nossas frentes</h3>
            <ul className="mt-4 space-y-2 text-neutral-700 list-disc pl-5">
              <li>Intermediação e representação com acesso direto à origem</li>
              <li>Compliance e gestão de risco (KYC/KYB, validações contratuais e técnicas)</li>
              <li>Arquitetura logística sob medida (FOB, CFR, CIF, DAP, DDP)</li>
              <li>Execução com SLAs, checkpoints e comunicação ativa</li>
              <li>Atendimento consultivo orientado a resultados</li>
              <li>Transparência e accountability em todas as etapas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proposta de Valor */}
      <section id="valor" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Proposta de Valor</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Acesso direto à origem",
                body:
                  "Relacionamento com produtores e tradings de primeira linha, rastreabilidade e flexibilidade de volumes/condições.",
              },
              {
                title: "Compliance & risco ponta a ponta",
                body:
                  "KYC/KYB, validação contratual e técnica, inspeções independentes quando aplicável, gestão cambial e de crédito.",
              },
              {
                title: "Arquitetura logística sob medida",
                body:
                  "Soluções entre FOB, CIF, CFR, DAP e DDP, coordenação portuária, booking, documentação e integração com despacho.",
              },
              {
                title: "Execução com SLA",
                body:
                  "Cronogramas, checkpoints e indicadores de prazo, custo e qualidade com contingências para mitigar desvios.",
              },
              {
                title: "Atendimento consultivo",
                body:
                  "Leitura de mercado e recomendações táticas (timing de compra, janela logística, alternativas de rota).",
              },
              {
                title: "Transparência e accountability",
                body:
                  "Relatórios por etapa e trilha documental organizada do início ao fim da operação.",
              },
            ].map((card) => (
              <div key={card.title} className="border rounded-3xl p-6 bg-white">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-neutral-700 text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio / Produtos */}
      <section id="produtos" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Portfólio</h2>
          <p className="mt-2 text-neutral-600">Principais linhas de produtos e especificações.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Concentrado de zinco / produto polimetálico */}
            <article className="rounded-3xl border p-6">
              <h3 className="font-semibold">Produto polimetálico (≈50% Zn)</h3>
              <p className="mt-2 text-neutral-700 text-sm">
                Pó marrom-amarelado proveniente da flotação de minérios polimetálicos, contendo cerca de 50% de zinco.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-medium">Aplicações</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 mt-1 space-y-1">
                  <li>Matéria-prima para produção de zinco metálico e compostos</li>
                  <li>Redução de metais preciosos e galvanização do aço</li>
                  <li>Setores: metalurgia, medicina, engenharia elétrica</li>
                </ul>
              </div>
              <p className="mt-4 text-sm text-neutral-500">Origem: Leste do Cazaquistão · HS Code: 2608.00.0000</p>
            </article>

            {/* Zinco metálico (lingotes) */}
            <article className="rounded-3xl border p-6">
              <h3 className="font-semibold">Zinco metálico (lingotes)</h3>
              <p className="mt-2 text-neutral-700 text-sm">
                Zinco é o 4º metal mais utilizado no mundo e 3º entre não-ferrosos. Obtido por fundição de cátodos de zinco.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-medium">Aplicações</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 mt-1 space-y-1">
                  <li>Revestimento galvânico e ligas</li>
                  <li>Tintas e vernizes</li>
                  <li>Construção de máquinas e civil (proteção anticorrosiva)</li>
                </ul>
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                Lingotes ~25 kg; pilhas até 1000 kg; altura ≤ 500 mm; cintados com fita de aço. Norma GOST 3640.
              </p>
            </article>

            {/* Ureia 46% N */}
            <article className="rounded-3xl border p-6">
              <h3 className="font-semibold">Ureia 46% N (PFA)</h3>
              <p className="mt-2 text-neutral-700 text-sm">
                Fertilizante nitrogenado sólido com 46% de nitrogênio. Maior teor de N entre os fertilizantes sólidos.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-medium">Uso</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 mt-1 space-y-1">
                  <li>Aplicação direta ao solo com equipamentos convencionais</li>
                  <li>Embalagens: granel ou big bags</li>
                  <li>Marca: PFA</li>
                </ul>
              </div>
            </article>

            {/* Enxofre pastilhado */}
            <article className="rounded-3xl border p-6">
              <h3 className="font-semibold">Enxofre em pastilhas — Industrial/Agrícola</h3>
              <p className="mt-2 text-neutral-700 text-sm">
                Enxofre industrial em pastilhas, adequado para aplicações agrícolas e industriais. Origem: Cazaquistão.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-separate border-spacing-y-1">
                  <thead>
                    <tr>
                      <th className="text-left p-2">Parâmetro</th>
                      <th className="text-left p-2">Especificação típica</th>
                      <th className="text-left p-2">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { k: "Teor de enxofre, %", s: "≥ 99,20 – 99,98", v: "≈ 99,98" },
                      { k: "Cinzas, % máx.", s: "≤ 0,40", v: "0,00 – 0,40" },
                      { k: "Orgânicos, % máx.", s: "≤ 0,50", v: "0,01" },
                      { k: "Ácidos (H2SO4), % máx.", s: "≤ 0,02", v: "0,0005 – 0,02" },
                      { k: "Umidade, % máx.", s: "≤ 1,0", v: "0,0" },
                      { k: "Poluição mecânica", s: "Não permitido", v: "Ausência" },
                    ].map((row) => (
                      <tr key={row.k} className="bg-neutral-50">
                        <td className="p-2">{row.k}</td>
                        <td className="p-2">{row.s}</td>
                        <td className="p-2">{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 text-xs text-neutral-500">Norma: GOST 127.1-93. Qualidade conforme laudo do fabricante.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Nossos diferenciais</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Governança & compliance",
                body:
                  "Processos formalizados de KYC/KYB, due diligence de contrapartes, revisão contratual e verificação técnica.",
              },
              {
                title: "Acesso direto à origem",
                body:
                  "Especificações, laudos e janelas de produção com previsibilidade de fornecimento e negociação competitiva.",
              },
              {
                title: "Logística integrada fim a fim",
                body:
                  "FOB, CFR, CIF, DAP e DDP; coordenação portuária, seguro, inspeções, desembaraço e transporte interno.",
              },
              {
                title: "Atendimento consultivo",
                body:
                  "Comunicação executiva, relatórios de status e recomendações táticas para maximizar competitividade.",
              },
              {
                title: "Transparência total",
                body:
                  "Indicadores de performance por etapa, visibilidade de custos e decisões críticas.",
              },
              {
                title: "Relacionamento de longo prazo",
                body:
                  "Parcerias sustentáveis com metas e SLAs claros.",
              },
            ].map((d) => (
              <div key={d.title} className="border rounded-3xl p-6 bg-white">
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-2 text-neutral-700 text-sm">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Contato</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border p-6">
              <ul className="space-y-2 text-neutral-700">
                <li><span className="font-medium">Endereço:</span> Av. Paulista, 1636 — São Paulo/SP — Brasil</li>
                <li><span className="font-medium">E-mail:</span> info@marduque.com.br</li>
                <li><span className="font-medium">Telefone/WhatsApp:</span> +55 (11) 95130-1188</li>
                <li><span className="font-medium">Atendimento:</span> Seg–Sex, 08h–21h (BRT)</li>
              </ul>
              <p className="mt-4 text-sm text-neutral-500">© Marduque Comex Ltda — Global Trade Markets Worldwide</p>
            </div>
            <form className="rounded-3xl border p-6 bg-neutral-50">
              <div className="grid grid-cols-1 gap-3">
                <input className="px-3 py-2 rounded-xl border" placeholder="Seu nome" />
                <input className="px-3 py-2 rounded-xl border" placeholder="E-mail" />
                <input className="px-3 py-2 rounded-xl border" placeholder="Telefone/WhatsApp" />
                <textarea className="px-3 py-2 rounded-xl border min-h-[120px]" placeholder="Mensagem" />
                <button type="button" className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800">
                  Enviar
                </button>
              </div>
              <p className="mt-2 text-xs text-neutral-500">Este formulário é estático para demonstração.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-500 flex flex-wrap items-center gap-2">
          <span>Marduque Comex Ltda</span>
          <span className="mx-1">•</span>
          <span>CNPJ: 62.213.722/0001-81</span>
          <span className="mx-1">•</span>
          <span>Idiomas: PT · ES · EN · DE</span>
        </div>
      </footer>
    </div>
  );
}
