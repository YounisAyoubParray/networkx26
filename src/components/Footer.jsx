import { CONTACT, EVENT, NAV_LINKS } from "../data/eventInfo";
import SocialIcon from "../icons/SocialIcons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-dark text-white">
      <div className="grid w-full gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-12">
        <div>
          <Logo size="lg" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {EVENT.edition} · {EVENT.institute} · {EVENT.year}. Two days of talks and a hackathon
            bringing students, innovators and industry together.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Quick links
          </p>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-white/70 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Contact
          </p>
          <address className="space-y-2 text-sm not-italic leading-relaxed text-white/70">
            <p>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                {CONTACT.email}
              </a>
            </p>
            <p>
              {EVENT.venue.name}
              <br />
              {EVENT.venue.address}
            </p>
          </address>
          <ul className="mt-5 flex flex-wrap gap-2">
            {CONTACT.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={s.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-xs text-white/45 sm:px-8 lg:px-12">
        © {EVENT.year} NetworkX, {EVENT.institute}. All rights reserved.
      </div>
    </footer>
  );
}