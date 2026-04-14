import { MdForest } from "react-icons/md";

import { navLinks } from "../Header/navLinksData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        {/* ESQUERDA */}
        <div className="space-y-6">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MdForest className="text-2xl" />
            </div>

            <div>
              <p className="text-base font-semibold tracking-[0.14em]">
                GO VIAGENS
              </p>
              <p className="text-sm text-slate-500">
                Experiências pensadas para cada destino.
              </p>
            </div>
          </div>

          {/* TEXTO */}
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Receba novidades, roteiros e inspirações para sua próxima viagem.
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-slate-600">
              Cadastre seu e-mail para acompanhar lançamentos, destinos em alta
              e conteúdos exclusivos da Go Viagens.
            </p>
          </div>

          {/* FORM */}
          <form
            className="flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="min-h-12 flex-1 rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/30"
            />

            <button
              type="submit"
              className="rounded-2xl border border-slate-900 px-6 py-4 text-sm font-semibold transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-105"
            >
              Receber novidades
            </button>
          </form>
        </div>

        {/* DIREITA */}
        <div className="grid gap-10 border-t border-slate-200 pt-2 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
          {/* NAV */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navegação
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600 sm:text-base">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-slate-900 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contato
            </h3>

            <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                Atendimento consultivo para viagens, hospedagens e roteiros.
              </p>
              <p>contato@goviagens.com</p>
              <p>Seg a Sex, das 9h às 18h</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between ">
        <p>© {currentYear} Go Viagens. Todos os direitos reservados.</p>
        <p>Feito por Ricardo Vieira</p>
      </div>
    </footer>
  );
}

export default Footer;
