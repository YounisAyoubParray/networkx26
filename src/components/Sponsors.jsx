import { CONTACT } from "../data/eventInfo";

// Add sponsors here as they are confirmed, e.g. { name: "Company", logo: "/sponsors/company.svg", href: "https://..." }
const SPONSORS = [];

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-white px-6 py-20 text-text sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Sponsors & Partners
        </p>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Powering NetworkX
        </h2>

        {SPONSORS.length > 0 ? (
          <ul className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {SPONSORS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-dashed border-primary/30 bg-light/60 p-10">
            <p className="text-lg font-semibold">Sponsors will be announced soon.</p>
            <p className="mt-3 text-slate-600">
              Interested in supporting the 1st Edition of NetworkX? We would love to hear from you.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Email us at
            </p>
            <a
              href={`mailto:${CONTACT.email}?subject=Sponsoring%20NetworkX%202026`}
              className="mt-1 inline-block select-all break-all text-xl font-bold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-dark sm:text-2xl"
            >
              {CONTACT.email}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
